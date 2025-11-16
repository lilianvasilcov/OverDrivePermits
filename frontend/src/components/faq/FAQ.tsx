'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What types of permits do you handle?',
    answer: 'We handle all types of trucking permits including oversized cargo, overweight cargo, superload permits, and special route permits. Our team is experienced with permits for all 50 US states.',
  },
  {
    question: 'How long does it take to get a permit?',
    answer: 'Processing times vary by state and permit type. Standard permits typically take 1-3 business days, while superload and special permits may take 3-7 business days. We\'ll provide you with an estimated timeline when you submit your request.',
  },
  {
    question: 'What information do I need to provide?',
    answer: 'You\'ll need to provide cargo details (weight, dimensions, type), route information, travel dates, and your contact information. The more details you provide, the faster we can process your permit request.',
  },
  {
    question: 'Do you handle permits for all 50 states?',
    answer: 'Yes! We have experience processing permits for all 50 US states. Each state has different regulations and requirements, which is why we provide state-specific information on our interactive map.',
  },
  {
    question: 'What are the costs for permit services?',
    answer: 'Permit costs vary by state, permit type, and cargo specifications. We provide transparent pricing with no hidden fees. Contact us with your specific requirements for a detailed quote.',
  },
  {
    question: 'Can I get a permit for multiple states?',
    answer: 'Absolutely! We can help you coordinate permits for multi-state routes. This is especially important for long-haul shipments that cross multiple state lines.',
  },
  {
    question: 'What if I need a permit urgently?',
    answer: 'We offer expedited processing for urgent permit requests. Please indicate your timeline when submitting your request, and we\'ll do our best to accommodate your needs. Additional fees may apply for rush orders.',
  },
  {
    question: 'Do you provide escort services?',
    answer: 'While we specialize in permit procurement, we can connect you with trusted escort service providers in your area. Many superload and oversized cargo permits require certified escorts.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Find answers to common questions about our permit services
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.questionButton} ${isOpen ? styles.open : ''}`}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={isOpen ? "M5 10L10 5L15 10" : "M5 10L10 15L15 10"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerContent}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

