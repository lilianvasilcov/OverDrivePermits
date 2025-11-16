'use client';

import React, { forwardRef } from 'react';
import styles from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, required, helperText, className = '', ...props }, ref) => {
    const textareaClasses = [
      styles.textarea,
      error && styles.textareaError,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.textareaGroup}>
        {label && (
          <label className={styles.label} htmlFor={props.id || props.name}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
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

Textarea.displayName = 'Textarea';

export default Textarea;

