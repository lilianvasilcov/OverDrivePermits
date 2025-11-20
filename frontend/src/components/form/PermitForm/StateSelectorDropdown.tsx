'use client';

import React, { useState, useRef, useEffect } from 'react';
import { US_STATES } from '@/utils/constants/states';
import styles from './StateSelectorDropdown.module.css';

interface StateSelectorDropdownProps {
  selectedStates: string[];
  onStateToggle: (stateCode: string) => void;
}

const StateSelectorDropdown: React.FC<StateSelectorDropdownProps> = ({
  selectedStates,
  onStateToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStates, setFilteredStates] = useState(US_STATES);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter states based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredStates(US_STATES);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = US_STATES.filter(
        state =>
          state.name.toLowerCase().includes(query) ||
          state.code.toLowerCase().includes(query)
      );
      setFilteredStates(filtered);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleStateClick = (stateCode: string) => {
    onStateToggle(stateCode);
    // Keep dropdown open for multiple selections
    setSearchQuery('');
  };

  const handleRemoveState = (stateCode: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onStateToggle(stateCode);
  };

  const getSelectedStateNames = () => {
    return selectedStates
      .map(code => {
        const state = US_STATES.find(s => s.code === code);
        return state?.name || code;
      })
      .join(', ');
  };

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <div className={styles.selectedStatesDisplay}>
        {selectedStates.length > 0 ? (
          <div className={styles.selectedStatesList}>
            {selectedStates.map(code => {
              const state = US_STATES.find(s => s.code === code);
              return (
                <span key={code} className={styles.selectedStateTag}>
                  {state?.name || code}
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={e => handleRemoveState(code, e)}
                    aria-label={`Remove ${state?.name || code}`}
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        ) : (
          <span className={styles.placeholder}>No states selected</span>
        )}
      </div>

      <div className={styles.dropdownContainer}>
        <button
          type="button"
          className={styles.dropdownButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>Select States</span>
          <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.searchContainer}>
              <input
                ref={inputRef}
                type="text"
                className={styles.searchInput}
                placeholder="Search states (e.g., 'geo' for Georgia)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onClick={e => e.stopPropagation()}
              />
            </div>

            <div className={styles.statesList}>
              {filteredStates.length > 0 ? (
                filteredStates.map(state => {
                  const isSelected = selectedStates.includes(state.code);
                  return (
                    <button
                      key={state.code}
                      type="button"
                      className={`${styles.stateOption} ${
                        isSelected ? styles.stateOptionSelected : ''
                      }`}
                      onClick={() => handleStateClick(state.code)}
                    >
                      <span className={styles.stateName}>{state.name}</span>
                      <span className={styles.stateCode}>{state.code}</span>
                      {isSelected && (
                        <span className={styles.checkmark}>✓</span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className={styles.noResults}>
                  No states found matching &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateSelectorDropdown;

