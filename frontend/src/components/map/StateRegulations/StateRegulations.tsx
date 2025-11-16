'use client';

import React, { useState, useEffect } from 'react';
import { getStateName } from '@/utils/constants/states';
import { getStateRegulations, hasStateRegulations } from '@/utils/constants/regulations';
import { StateRegulation } from '../../../../../shared/types/state.types';
import styles from './StateRegulations.module.css';

interface StateRegulationsProps {
  stateCode: string;
}

const StateRegulations: React.FC<StateRegulationsProps> = ({ stateCode }) => {
  const [regulations, setRegulations] = useState<StateRegulation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stateCode) {
      setRegulations(null);
      return;
    }

    setIsLoading(true);
    // Simulate API call delay for better UX
    setTimeout(() => {
      const stateRegs = getStateRegulations(stateCode);
      setRegulations(stateRegs);
      setIsLoading(false);
    }, 300);
  }, [stateCode]);

  if (!stateCode) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🗺️</div>
        <h3 className={styles.emptyTitle}>Select a State</h3>
        <p className={styles.emptyText}>
          Click on any state on the map to view regulations and restrictions
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Loading regulations...</p>
      </div>
    );
  }

  const stateName = getStateName(stateCode);

  if (!regulations || !hasStateRegulations(stateCode)) {
    return (
      <div className={styles.regulations}>
        <h3 className={styles.title}>{stateName} Regulations</h3>
        <div className={styles.note}>
          <p className={styles.noteText}>
            <strong>Regulations Coming Soon</strong><br />
            Detailed regulations for {stateName} are being compiled. 
            Please contact us directly for permit information for this state.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.regulations}>
      <h3 className={styles.title}>{regulations.stateName} Regulations</h3>
      
      {regulations.oversized && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Oversized Cargo</h4>
          <p className={styles.sectionText}>{regulations.oversized}</p>
        </div>
      )}

      {regulations.overweight && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Overweight Cargo</h4>
          <p className={styles.sectionText}>{regulations.overweight}</p>
        </div>
      )}

      {regulations.superload && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Superload Regulations</h4>
          <p className={styles.sectionText}>{regulations.superload}</p>
        </div>
      )}

      {regulations.timeRestrictions && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Time Restrictions</h4>
          <p className={styles.sectionText}>{regulations.timeRestrictions}</p>
        </div>
      )}

      {regulations.routeRestrictions && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Route Restrictions</h4>
          <p className={styles.sectionText}>{regulations.routeRestrictions}</p>
        </div>
      )}

      {regulations.permitRequirements && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Permit Requirements</h4>
          <p className={styles.sectionText}>{regulations.permitRequirements}</p>
        </div>
      )}

      {regulations.contactInfo && (
        <div className={styles.contactBox}>
          <h4 className={styles.contactTitle}>Contact Information</h4>
          <p className={styles.contactText}>{regulations.contactInfo}</p>
        </div>
      )}
    </div>
  );
};

export default StateRegulations;

