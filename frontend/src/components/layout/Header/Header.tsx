'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image 
            src="/logo.png" 
            alt="OVERDRIVE PERMITS Logo" 
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>OVERDRIVE PERMITS</span>
        </div>
        <nav className={styles.nav}>
          <a href="#map" className={styles.navLink}>State Regulations</a>
          <a href="#form" className={styles.navLink}>Request Permit</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

