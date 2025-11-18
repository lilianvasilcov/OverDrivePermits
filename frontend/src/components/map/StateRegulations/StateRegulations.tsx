'use client';

import React, { useState, useEffect } from 'react';
import { getStateName } from '@/utils/constants/states';
import { getStateRegulations, hasStateRegulations } from '@/utils/constants/regulations';
import { StateRegulation } from '@/types/state.types';
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

  // All states now have regulations, but keep fallback for edge cases
  if (!regulations || !hasStateRegulations(stateCode)) {
    return (
      <div className={styles.regulations}>
        <h3 className={styles.title}>{stateName} Regulations</h3>
        <div className={styles.note}>
          <p className={styles.noteText}>
            <strong>Regulations Available</strong><br />
            Detailed regulations for {stateName} are available. 
            If you need additional information, please contact us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.regulations}>
      <h3 className={styles.title}>{regulations.stateName} Oversize Information</h3>
      
      {regulations.permits && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Permits</h4>
          <p className={styles.sectionText}>{regulations.permits}</p>
        </div>
      )}

      {regulations.operatingTime && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Operating Time</h4>
          <p className={styles.sectionText}>{regulations.operatingTime}</p>
        </div>
      )}

      {regulations.restrictions && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Restrictions</h4>
          <p className={styles.sectionText}>{regulations.restrictions}</p>
        </div>
      )}

      {regulations.speedLimit && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Speed Limit</h4>
          <p className={styles.sectionText}>{regulations.speedLimit}</p>
        </div>
      )}

      {regulations.legalDimensions && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Legal Dimensions</h4>
          <p className={styles.sectionText}>{regulations.legalDimensions}</p>
        </div>
      )}

      {regulations.routinePermitLimits && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Routine Oversize Permit Limits</h4>
          <p className={styles.sectionText}>{regulations.routinePermitLimits}</p>
        </div>
      )}

      {regulations.escorts && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Escorts</h4>
          <p className={styles.sectionText}>{regulations.escorts}</p>
        </div>
      )}

      {regulations.securityMeasures && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Security Measures</h4>
          <p className={styles.sectionText}>{regulations.securityMeasures}</p>
        </div>
      )}
    </div>
  );
};

export default StateRegulations;

