'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button/Button';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const handleGetStarted = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '50', label: 'US States Covered' },
    { value: '24/7', label: 'Support Available' },
    { value: 'Fast', label: 'Processing Time' },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.gradientOverlay} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>Trusted by Industry Leaders</span>
            </div>
            
            <h1 className={styles.title}>
              Streamline Your
              <span className={styles.titleAccent}> Permit Process</span>
            </h1>
            
            <p className={styles.subtitle}>
              Professional permit solutions for oversized, overweight, and superload cargo 
              transportation across all 50 US states. Fast, reliable, and fully compliant.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.ctaContainer}>
              <div className={styles.ctaButtonWrapper}>
              <Button 
                variant="primary" 
                size="large"
                onClick={handleGetStarted}
                className={styles.ctaButton}
              >
                Get Started Today
              </Button>
                <div className={styles.priceContainer}>
                  <span className={styles.priceLabel}>Get your permits today for only</span>
                  <span className={styles.priceValue}>$25.00</span>
                </div>
              </div>
              <p className={styles.ctaSubtext}>
                No commitment required • Free consultation
              </p>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/logo.png" 
                alt="OVERDRIVE PERMITS Logo" 
                width={600}
                height={600}
                className={styles.heroLogo}
                priority
              />
              <div className={styles.logoGlow} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Fully Licensed & Insured</span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24/7 Customer Support</span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Fast Turnaround Times</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

