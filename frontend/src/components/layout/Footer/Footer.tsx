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
              <a href="mailto:info@oswpermits.com" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@oswpermits.com</span>
              </a>
              <a href="tel:+15096452903" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(509) 645-2903</span>
              </a>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>United States</span>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Follow us on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Follow us on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/15096452903" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Contact us on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Contact us on Telegram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
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
