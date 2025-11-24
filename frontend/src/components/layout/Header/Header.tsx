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
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen && 
        !target.closest(`.${styles.mobileMenu}`) && 
        !target.closest(`.${styles.menuButton}`) &&
        !target.closest(`.${styles.mobileNavContent}`)
      ) {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <a href="#map" className={styles.navLink} onClick={(e) => handleNavClick(e, 'map')}>
            State Regulations
          </a>
          <a href="#form" className={styles.navLink} onClick={(e) => handleNavClick(e, 'form')}>
            Request Permit
          </a>
          <a href="#faq" className={styles.navLink} onClick={(e) => handleNavClick(e, 'faq')}>
            FAQ
          </a>
        </nav>

        {/* Desktop Support Section */}
        <div className={styles.supportSection}>
          <div className={styles.supportBadge}>
            <svg className={styles.supportIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={styles.supportText}>24/7 Support</span>
          </div>
          <a href="tel:+15096452903" className={styles.phoneLink}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={styles.phoneNumber}>(509) 645-2903</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={handleMenuToggle}
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
      {isMenuOpen && (
        <div 
          className={styles.mobileMenu}
          style={{ '--header-height': `${headerHeight}px` } as React.CSSProperties}
        >
          <div className={styles.mobileMenuOverlay} onClick={handleMenuToggle} aria-hidden="true" />
          <nav className={styles.mobileNavContent}>
            <div className={styles.mobileSupportSection}>
              <div className={styles.mobileSupportBadge}>
                <svg className={styles.mobileSupportIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <a href="tel:+15096452903" className={styles.mobilePhoneLink}>
                <svg className={styles.mobilePhoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(509) 645-2903</span>
              </a>
            </div>
            <a 
              href="#map" 
              className={styles.mobileNavLink} 
              onClick={(e) => handleNavClick(e, 'map')}
            >
              State Regulations
            </a>
            <a 
              href="#form" 
              className={styles.mobileNavLink} 
              onClick={(e) => handleNavClick(e, 'form')}
            >
              Request Permit
            </a>
            <a 
              href="#faq" 
              className={styles.mobileNavLink} 
              onClick={(e) => handleNavClick(e, 'faq')}
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
