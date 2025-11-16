'use client';

import React from 'react';
import { US_STATES } from '@/utils/constants/states';
import styles from './StateSelector.module.css';

interface StateSelectorProps {
  onSelect: (stateCode: string) => void;
  selectedState?: string;
}

const StateSelector: React.FC<StateSelectorProps> = ({ onSelect, selectedState }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateCode = e.target.value;
    if (stateCode) {
      onSelect(stateCode);
    }
  };

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor="state-select" className={styles.label}>
        Select a State
      </label>
      <select
        id="state-select"
        className={styles.select}
        value={selectedState || ''}
        onChange={handleChange}
        aria-label="Select a state to view regulations"
      >
        <option value="">Choose a state...</option>
        {US_STATES.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelector;

