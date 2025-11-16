'use client';

import React, { useState, lazy, Suspense } from 'react';
import StateSelector from '@/components/map/StateSelector/StateSelector';
import StateRegulations from '@/components/map/StateRegulations/StateRegulations';
import styles from './MapContainer.module.css';

// Lazy load the map component for better performance
const USMap = lazy(() => import('@/components/map/USMap/USMap'));

const MapSection: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateSelect = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  return (
    <section id="map" className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>State Regulations & Restrictions</h2>
          <p className={styles.description}>
            Choose a state to see our complete guide of restrictions and regulations for each state
          </p>
        </div>
        
        <div className={styles.mapWrapper}>
          {/* Desktop: Show interactive map */}
          <div className={styles.mapDesktop}>
            <Suspense fallback={
              <div className={styles.mapLoading}>
                <div className={styles.loadingSpinner}></div>
                <p>Loading map...</p>
              </div>
            }>
              <USMap 
                onStateSelect={handleStateSelect}
                selectedState={selectedState || undefined}
              />
            </Suspense>
          </div>
          
          {/* Mobile: Show dropdown selector */}
          <div className={styles.mapMobile}>
            <StateSelector
              onSelect={handleStateSelect}
              selectedState={selectedState || undefined}
            />
          </div>
          
          <div className={styles.regulationsContainer}>
            <StateRegulations 
              stateCode={selectedState || ''}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

