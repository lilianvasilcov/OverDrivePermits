'use client';

import React, { forwardRef } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, helperText, className = '', ...props }, ref) => {
    const inputClasses = [
      styles.input,
      error && styles.inputError,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.inputGroup}>
        {label && (
          <label className={styles.label} htmlFor={props.id || props.name}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id || props.name}-error` : undefined}
          {...props}
        />
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

Input.displayName = 'Input';

export default Input;

