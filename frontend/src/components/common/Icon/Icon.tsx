'use client';

import React from 'react';

export type IconName = 
  | 'map-marker' 
  | 'arrows-h' 
  | 'expand' 
  | 'arrows-v' 
  | 'lock' 
  | 'truck';

interface IconProps {
  name: IconName;
  className?: string;
  'aria-hidden'?: boolean;
}

const iconPaths: Record<IconName, string> = {
  'map-marker': 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  'arrows-h': 'M21 12H3M6 8l-4 4 4 4M18 8l4 4-4 4',
  'expand': 'M4 4h16v16H4V4zm2 2v12h12V6H6z',
  'arrows-v': 'M12 3v18M8 6l-4 4 4 4M16 6l4 4-4 4',
  'lock': 'M18 10V8c0-3.31-2.69-6-6-6S6 4.69 6 8v2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2zm-6 0V8c0-1.1-.9-2-2-2s-2 .9-2 2v2h4z',
  'truck': 'M20 8h-3V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h1V12l-3-4zM5 16H3V5h12v11H5zm11 0H9V8h7v8zm4-1h-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H16v-6h4v6z',
};

const Icon: React.FC<IconProps> = ({ name, className = '', 'aria-hidden': ariaHidden = true }) => {
  const path = iconPaths[name];
  if (!path) return null;

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={ariaHidden}
      focusable="false"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d={path} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
};

export default Icon;
