'use client';

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
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
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
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
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMap;

