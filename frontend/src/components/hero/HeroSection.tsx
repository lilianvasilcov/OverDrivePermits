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

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              OVERDRIVE PERMITS
            </h1>
            <p className={styles.subtitle}>
              Your trusted partner for trucking permits across all 50 US states. 
              Fast, reliable, and compliant permit solutions for oversized, overweight, 
              and superload cargo transportation.
            </p>
            <div className={styles.ctaContainer}>
              <Button 
                variant="primary" 
                size="large"
                onClick={handleGetStarted}
              >
                Request a Permit
              </Button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src="/logo.png" 
              alt="OVERDRIVE PERMITS Logo" 
              width={300}
              height={300}
              className={styles.heroLogo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

