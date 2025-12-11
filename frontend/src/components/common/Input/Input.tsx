'use client';

import React, { forwardRef, useId } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  error?: string;
  required?: boolean;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, helperText, className = '', id, name, ...props }, ref) => {
    // Use React's useId for stable server/client hydration
    const generatedId = useId();
    // Ensure we always have an id for label association
    const inputId = id || name || generatedId;
    const inputName = name || inputId;
    
    const inputClasses = [
      styles.input,
      error && styles.inputError,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.inputGroup}>
        {label && (
          <label className={styles.label} htmlFor={inputId}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={inputName}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
        {error && (
          <span id={`${inputId}-error`} className={styles.error}>
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

