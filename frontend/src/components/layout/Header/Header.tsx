'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
      window.addEventListener('scroll', handleScroll);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#map" className={styles.navLink} onClick={handleNavClick}>State Regulations</a>
          <a href="#form" className={styles.navLink} onClick={handleNavClick}>Request Permit</a>
          <a href="#faq" className={styles.navLink} onClick={handleNavClick}>FAQ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavContent}>
          <a href="#map" className={styles.mobileNavLink} onClick={handleNavClick}>
            State Regulations
          </a>
          <a href="#form" className={styles.mobileNavLink} onClick={handleNavClick}>
            Request Permit
          </a>
          <a href="#faq" className={styles.mobileNavLink} onClick={handleNavClick}>
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

