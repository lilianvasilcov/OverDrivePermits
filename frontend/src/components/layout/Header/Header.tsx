'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(73);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(`.${styles.mobileMenu}`) && !target.closest(`.${styles.menuButton}`)) {
        setIsMenuOpen(false);
      }
    };

    // Close menu on scroll
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={styles.header}>
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
          <span className={styles.logoText}>
            <span className={styles.logoTextFull}>OVERDRIVE PERMITS</span>
            <span className={styles.logoTextShort}>OVERDRIVE</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#map" className={styles.navLink} onClick={handleNavClick}>State Regulations</a>
          <a href="#form" className={styles.navLink} onClick={handleNavClick}>Request Permit</a>
          <a href="#faq" className={styles.navLink} onClick={handleNavClick}>FAQ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        style={{ '--header-height': `${headerHeight}px` } as React.CSSProperties}
      >
        <div className={styles.mobileMenuOverlay} onClick={handleNavClick} aria-hidden="true" />
        <nav className={styles.mobileNavContent}>
          <a href="#map" className={styles.mobileNavLink} onClick={handleNavClick}>
            State Regulations
          </a>
          <a href="#form" className={styles.mobileNavLink} onClick={handleNavClick}>
            Request Permit
          </a>
          <a href="#faq" className={styles.mobileNavLink} onClick={handleNavClick}>
            FAQ
          </a>
        </nav>
        </div>
    </header>
  );
};

export default Header;

