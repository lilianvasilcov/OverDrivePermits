'use client';

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import styles from './USMap.module.css';

interface USMapProps {
  onStateSelect: (stateCode: string) => void;
  selectedState?: string;
}

// US States TopoJSON URL (using a public CDN)
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// State code mapping (TopoJSON uses FIPS codes, we need to map to state codes)
const stateCodeMap: Record<string, string> = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA',
  '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL',
  '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN',
  '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME',
  '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH',
  '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI',
  '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT',
  '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI',
  '56': 'WY',
};

// States that need external labels with leader lines (small/close states in Northeast)
// Positions are calculated dynamically to prevent overlap
const statesWithExternalLabels = new Set([
  'ME',  // Maine
  'NH',  // New Hampshire
  'VT',  // Vermont
  'MA',  // Massachusetts
  'RI',  // Rhode Island
  'CT',  // Connecticut
  'NJ',  // New Jersey
  'DE',  // Delaware
  'MD',  // Maryland
  'DC',  // District of Columbia
]);

const USMap: React.FC<USMapProps> = ({ onStateSelect, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getStateCode = (geo: any): string | null => {
    const fips = geo.properties?.STATE_FIPS || geo.id;
    return stateCodeMap[fips] || null;
  };

  const handleStateClick = (geo: any) => {
    const stateCode = getStateCode(geo);
    if (stateCode) {
      onStateSelect(stateCode);
    }
  };

  const getFillColor = (geo: any): string => {
    const stateCode = getStateCode(geo);
    if (!stateCode) return '#CBE8FF';
    
    if (stateCode === selectedState) {
      return '#1E3A8A'; // Primary blue for selected
    }
    if (stateCode === hoveredState) {
      return '#3B82F6'; // Primary blue light for hover
    }
    return '#CBE8FF'; // Light blue for default
  };

  return (
    <div className={styles.mapWrapper}>
      <ComposableMap
        projection="geoAlbersUsa"
        className={styles.mapContainer}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies, projection }: { geographies: any[]; projection: any }) => (
            <>
              {geographies.map((geo: any) => {
                const stateCode = getStateCode(geo);
                const isSelected = stateCode === selectedState;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFillColor(geo)}
                    stroke="#FFFFFF"
                    strokeWidth={isSelected ? 2 : 1}
                    style={{
                      default: {
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      },
                      hover: {
                        outline: 'none',
                        cursor: 'pointer',
                        fill: '#3B82F6',
                      },
                      pressed: {
                        outline: 'none',
                        fill: '#1E3A8A',
                      },
                    }}
                    onMouseEnter={() => {
                      if (stateCode) {
                        setHoveredState(stateCode);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredState(null);
                    }}
                    onClick={() => handleStateClick(geo)}
                  />
                );
              })}
              {(() => {
                // First pass: collect all states with external labels and their centroids
                const externalLabelStates: Array<{
                  geo: any;
                  stateCode: string;
                  centroid: [number, number];
                  projectedCentroid: [number, number];
                }> = [];
                
                const regularLabelStates: Array<{
                  geo: any;
                  stateCode: string;
                  centroid: [number, number];
                }> = [];
                
                geographies.forEach((geo: any) => {
                  const stateCode = getStateCode(geo);
                  if (!stateCode) return;
                  
                  let centroid: [number, number] | null = null;
                  
                  try {
                    if (geo.geometry) {
                      centroid = geoCentroid(geo.geometry) as [number, number];
                    }
                  } catch (error) {
                    if (geo.geometry?.type === 'Polygon' && geo.geometry.coordinates?.[0]?.[0]) {
                      const coords = geo.geometry.coordinates[0];
                      const midPoint = coords[Math.floor(coords.length / 2)];
                      if (midPoint && Array.isArray(midPoint) && midPoint.length >= 2) {
                        centroid = [midPoint[0], midPoint[1]];
                      }
                    }
                  }
                  
                  if (!centroid) return;
                  
                  const needsExternalLabel = statesWithExternalLabels.has(stateCode);
                  
                  if (needsExternalLabel) {
                    const [centroidX, centroidY] = projection(centroid);
                    externalLabelStates.push({
                      geo,
                      stateCode,
                      centroid,
                      projectedCentroid: [centroidX, centroidY],
                    });
                  } else {
                    regularLabelStates.push({ geo, stateCode, centroid });
                  }
                });
                
                // Sort external label states by Y position (top to bottom)
                externalLabelStates.sort((a, b) => a.projectedCentroid[1] - b.projectedCentroid[1]);
                
                // Calculate label positions with minimum spacing to prevent overlap
                const minLabelSpacing = 25; // Minimum pixels between labels
                const labelXOffset = 60; // Fixed X position for all external labels
                const labelPositions: Array<{ stateCode: string; x: number; y: number }> = [];
                
                externalLabelStates.forEach((state, index) => {
                  const baseY = state.projectedCentroid[1];
                  let labelY = baseY;
                  
                  // Check for overlap with previous labels
                  if (index > 0) {
                    const prevLabel = labelPositions[index - 1];
                    const minY = prevLabel.y + minLabelSpacing;
                    if (labelY < minY) {
                      labelY = minY;
                    }
                  }
                  
                  labelPositions.push({
                    stateCode: state.stateCode,
                    x: state.projectedCentroid[0] + labelXOffset,
                    y: labelY,
                  });
                });
                
                // Create a map for quick lookup
                const labelPositionMap = new Map(
                  labelPositions.map(pos => [pos.stateCode, pos])
                );
                
                return (
                  <>
                    {/* Render regular labels */}
                    {regularLabelStates.map(({ geo, stateCode, centroid }) => (
                      <Marker key={`label-${geo.rsmKey}`} coordinates={centroid}>
                        <text
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className={styles.stateLabel}
                          style={{
                            fill: stateCode === selectedState ? '#FFFFFF' : '#374151',
                            fontSize: stateCode === selectedState ? '16px' : '14px',
                            fontWeight: stateCode === selectedState ? '700' : '600',
                            pointerEvents: 'none',
                            userSelect: 'none',
                            fontFamily: 'var(--font-primary)',
                          }}
                        >
                          {stateCode}
                        </text>
                      </Marker>
                    ))}
                    
                    {/* Render external labels with leader lines */}
                    {externalLabelStates.map(({ geo, stateCode, projectedCentroid }) => {
                      const labelPos = labelPositionMap.get(stateCode);
                      if (!labelPos) return null;
                      
                      const [centroidX, centroidY] = projectedCentroid;
                      
                      return (
                        <g key={`label-${geo.rsmKey}`}>
                          {/* Leader line */}
                          <line
                            x1={centroidX}
                            y1={centroidY}
                            x2={labelPos.x}
                            y2={labelPos.y}
                            stroke={stateCode === selectedState ? '#1E3A8A' : '#9CA3AF'}
                            strokeWidth={stateCode === selectedState ? 2 : 1}
                            strokeDasharray={stateCode === selectedState ? '0' : '3,3'}
                            opacity={0.6}
                            className={styles.leaderLine}
                          />
                          {/* Label */}
                          <text
                            x={labelPos.x}
                            y={labelPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className={styles.stateLabel}
                            style={{
                              fill: stateCode === selectedState ? '#1E3A8A' : '#374151',
                              fontSize: stateCode === selectedState ? '16px' : '14px',
                              fontWeight: stateCode === selectedState ? '700' : '600',
                              pointerEvents: 'none',
                              userSelect: 'none',
                              fontFamily: 'var(--font-primary)',
                            }}
                          >
                            {stateCode}
                          </text>
                        </g>
                      );
                    })}
                  </>
                );
              })()}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMap;

