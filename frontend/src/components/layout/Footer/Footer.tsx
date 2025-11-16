import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Image 
              src="/logo.png" 
              alt="OVERDRIVE PERMITS Logo" 
              width={50}
              height={50}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Your trusted partner for trucking permits across all 50 US states.
            </p>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <a href="#map" className={styles.link}>State Regulations</a>
              <a href="#form" className={styles.link}>Request Permit</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contact</h4>
              <p className={styles.contactInfo}>Email: info@overdrivepermits.com</p>
              <p className={styles.contactInfo}>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} OVERDRIVE PERMITS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

