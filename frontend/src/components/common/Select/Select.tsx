'use client';

import React, { forwardRef, useId } from 'react';
import styles from './Select.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, required, helperText, options, placeholder, className = '', id, name, ...props }, ref) => {
    // Use React's useId for stable server/client hydration
    const generatedId = useId();
    // Ensure we always have an id for label association
    const selectId = id || name || generatedId;
    const selectName = name || selectId;
    
    const selectClasses = [
      styles.select,
      error && styles.selectError,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.selectGroup}>
        {label && (
          <label className={styles.label} htmlFor={selectId}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <select
          {...props}
          ref={ref}
          id={selectId}
          name={selectName}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span id={`${selectId}-error`} className={styles.error}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span className={styles.helperText}>{helperText}</span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

