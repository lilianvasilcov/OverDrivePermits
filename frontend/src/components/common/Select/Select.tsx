'use client';

import React, { forwardRef } from 'react';
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
  ({ label, error, required, helperText, options, placeholder, className = '', ...props }, ref) => {
    const selectClasses = [
      styles.select,
      error && styles.selectError,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.selectGroup}>
        {label && (
          <label className={styles.label} htmlFor={props.id || props.name}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <select
          ref={ref}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id || props.name}-error` : undefined}
          {...props}
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
          <span id={`${props.id || props.name}-error`} className={styles.error}>
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

