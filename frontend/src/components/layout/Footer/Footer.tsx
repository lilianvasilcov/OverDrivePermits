'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <Image 
                src="/logo.png" 
                alt="OVERDRIVE PERMITS Logo" 
                width={60}
                height={60}
                className={styles.logo}
              />
              <div className={styles.brandInfo}>
                <h3 className={styles.brandName}>OVERDRIVE PERMITS</h3>
                <p className={styles.tagline}>
                  Your trusted partner for trucking permits across all 50 US states. 
                  Fast, reliable, and fully compliant permit solutions.
                </p>
              </div>
            </div>
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Licensed & Insured</span>
              </div>
              <div className={styles.badge}>
                <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <nav className={styles.linkList}>
                <a 
                  href="#map" 
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, 'map')}
                >
                  State Regulations
                </a>
                <a 
                  href="#form" 
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, 'form')}
                >
                  Request Permit
                </a>
                <a 
                  href="#faq" 
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, 'faq')}
                >
                  FAQ
                </a>
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Services</h4>
              <nav className={styles.linkList}>
                <a href="#" className={styles.link}>Oversize Permits</a>
                <a href="#" className={styles.link}>Overweight Permits</a>
                <a href="#" className={styles.link}>Superload Permits</a>
                <a href="#" className={styles.link}>Multi-State Permits</a>
              </nav>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h4 className={styles.linkTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:info@overdrivepermits.com" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@overdrivepermits.com</span>
              </a>
              <a href="tel:+15551234567" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </a>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} OVERDRIVE PERMITS. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
              <span className={styles.separator}>•</span>
              <a href="/terms-of-service" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>
          <div className={styles.footerNote}>
            <p>Licensed permit service provider serving all 50 US states</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
