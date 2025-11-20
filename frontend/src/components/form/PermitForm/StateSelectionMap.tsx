'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { geoCentroid, geoAlbersUsa } from 'd3-geo';
import { US_STATES } from '@/utils/constants/states';
import styles from './StateSelectionMap.module.css';

interface StateSelectionMapProps {
  selectedStates: string[];
  onStateToggle: (stateCode: string) => void;
}

// US States TopoJSON URL
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// State code mapping (TopoJSON uses FIPS codes)
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

// States that need external labels
const statesWithExternalLabels = new Set([
  'ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC',
]);

const getCentroid = (geo: any): [number, number] | null => {
  if (!geo?.geometry) return null;
  
  try {
    const result = geoCentroid(geo.geometry);
    if (result && Array.isArray(result) && result.length >= 2) {
      const lon = result[0];
      const lat = result[1];
      if (typeof lon === 'number' && typeof lat === 'number' && !isNaN(lon) && !isNaN(lat)) {
        return [lon, lat];
      }
    }
  } catch (error) {
    // Silently fail
  }
  
  return null;
};

interface ExternalLabelPosition {
  stateCode: string;
  centroid: [number, number];
  projectedX: number;
  projectedY: number;
  labelX: number;
  labelY: number;
}

const StateSelectionMap: React.FC<StateSelectionMapProps> = ({ selectedStates, onStateToggle }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 960, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const svg = mapContainerRef.current?.querySelector('svg');
      if (svg) {
        const viewBox = svg.getAttribute('viewBox');
        let width = 960;
        let height = 600;

        if (viewBox) {
          const parts = viewBox.split(/\s+|,/).filter(Boolean);
          if (parts.length >= 4) {
            const w = Number(parts[2]);
            const h = Number(parts[3]);
            if (!isNaN(w) && w > 0) width = w;
            if (!isNaN(h) && h > 0) height = h;
          }
        }

        if (width === 960 || height === 600) {
          const rect = svg.getBoundingClientRect();
          width = rect.width || width;
          height = rect.height || height;
        }

        setSvgDimensions({ width, height });
      }
    };

    const timer = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const getStateCode = (geo: any): string | null => {
    const fips = geo.properties?.STATE_FIPS || geo.id;
    return stateCodeMap[fips] || null;
  };

  const handleStateClick = (geo: any) => {
    const stateCode = getStateCode(geo);
    if (stateCode) {
      onStateToggle(stateCode);
    }
  };

  const getFillColor = (geo: any): string => {
    const stateCode = getStateCode(geo);
    if (!stateCode) return '#CBE8FF';
    
    const isSelected = selectedStates.includes(stateCode);
    if (isSelected) {
      return '#1E3A8A';
    }
    if (stateCode === hoveredState) {
      return '#3B82F6';
    }
    return '#CBE8FF';
  };

  return (
    <div className={styles.mapWrapper} ref={mapContainerRef}>
      <div className={styles.mapHeader}>
        <p className={styles.mapInstructions}>
          Click on states to select them. Selected states will be highlighted in blue.
        </p>
        {selectedStates.length > 0 && (
          <div className={styles.selectedStatesList}>
            <strong>Selected: </strong>
            {selectedStates.map(code => {
              const state = US_STATES.find(s => s.code === code);
              return state?.name || code;
            }).join(', ')}
          </div>
        )}
      </div>
      <ComposableMap
        projection="geoAlbersUsa"
        className={styles.mapContainer}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) => {
            const proj = geoAlbersUsa()
              .scale(1070)
              .translate([svgDimensions.width / 2, svgDimensions.height / 2]);

            const stateData = geographies
              .map((geo: any) => {
                const stateCode = getStateCode(geo);
                if (!stateCode) return null;
                
                const centroid = getCentroid(geo);
                if (!centroid) return null;
                
                return {
                  geo,
                  stateCode,
                  centroid,
                  needsExternalLabel: statesWithExternalLabels.has(stateCode),
                };
              })
              .filter((item): item is NonNullable<typeof item> => item !== null);

            const regularStates = stateData.filter(s => !s.needsExternalLabel);
            const externalStates = stateData.filter(s => s.needsExternalLabel);

            const minSpacing = 28;
            const labelXOffset = 50;
            const labelPositions: ExternalLabelPosition[] = [];
            
            const sortedExternal = [...externalStates].sort((a, b) => b.centroid[1] - a.centroid[1]);
            
            sortedExternal.forEach((state, index) => {
              const projected = proj(state.centroid);
              if (!projected || !Array.isArray(projected) || projected.length < 2) return;
              
              const projX = projected[0];
              const projY = projected[1];
              
              if (typeof projX !== 'number' || typeof projY !== 'number' || isNaN(projX) || isNaN(projY)) {
                return;
              }
              
              let labelY = projY;
              
              if (index > 0) {
                const prevLabel = labelPositions[index - 1];
                const minY = prevLabel.labelY + minSpacing;
                if (labelY < minY) {
                  labelY = minY;
                }
              }
              
              labelY = Math.max(30, Math.min(labelY, svgDimensions.height - 30));
              const labelX = Math.min(projX + labelXOffset, svgDimensions.width + 80);
              
              labelPositions.push({
                stateCode: state.stateCode,
                centroid: state.centroid,
                projectedX: projX,
                projectedY: projY,
                labelX,
                labelY,
              });
            });

            return (
              <>
                {geographies.map((geo: any) => {
                  const stateCode = getStateCode(geo);
                  const isSelected = stateCode ? selectedStates.includes(stateCode) : false;

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

                {regularStates.map(({ geo, stateCode, centroid }) => {
                  const isSelected = selectedStates.includes(stateCode);
                  
                  return (
                    <Marker key={`label-${geo.rsmKey}`} coordinates={centroid}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={styles.stateLabel}
                        style={{
                          fill: isSelected ? '#FFFFFF' : '#374151',
                          fontSize: isSelected ? '16px' : '14px',
                          fontWeight: isSelected ? '700' : '600',
                          pointerEvents: 'none',
                          userSelect: 'none',
                          fontFamily: 'var(--font-primary)',
                        }}
                      >
                        {stateCode}
                      </text>
                    </Marker>
                  );
                })}

                {labelPositions.map((labelData) => {
                  const isSelected = selectedStates.includes(labelData.stateCode);
                  
                  return (
                    <g key={`external-${labelData.stateCode}`}>
                      <line
                        x1={labelData.projectedX}
                        y1={labelData.projectedY}
                        x2={labelData.labelX}
                        y2={labelData.labelY}
                        stroke={isSelected ? '#1E3A8A' : '#9CA3AF'}
                        strokeWidth={isSelected ? 2 : 1}
                        strokeDasharray="0"
                        opacity={0.6}
                        className={styles.leaderLine}
                      />
                      <text
                        x={labelData.labelX}
                        y={labelData.labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={styles.stateLabel}
                        style={{
                          fill: isSelected ? '#1E3A8A' : '#374151',
                          fontSize: isSelected ? '16px' : '14px',
                          fontWeight: isSelected ? '700' : '600',
                          pointerEvents: 'none',
                          userSelect: 'none',
                          fontFamily: 'var(--font-primary)',
                        }}
                      >
                        {labelData.stateCode}
                      </text>
                    </g>
                  );
                })}
              </>
            );
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default StateSelectionMap;

