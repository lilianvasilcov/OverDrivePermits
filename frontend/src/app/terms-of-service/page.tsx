import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for OVERDRIVE PERMITS - Read our terms and conditions for using our permit services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.paragraph}>
              By accessing and using the OVERDRIVE PERMITS website and services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please do not use 
              this service.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Description of Services</h2>
            <p className={styles.paragraph}>
              OVERDRIVE PERMITS provides permit procurement and consultation services for oversized, overweight, and 
              superload cargo transportation across all 50 US states. Our services include:
            </p>
            <ul className={styles.list}>
              <li>Permit application processing and submission</li>
              <li>Regulatory compliance consultation</li>
              <li>State-specific permit information and guidance</li>
              <li>Route planning assistance</li>
              <li>Customer support and permit management</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. User Responsibilities</h2>
            <p className={styles.paragraph}>
              As a user of our services, you agree to:
            </p>
            <ul className={styles.list}>
              <li>Provide accurate, current, and complete information when submitting permit requests</li>
              <li>Maintain the security of your account credentials, if applicable</li>
              <li>Comply with all applicable federal, state, and local laws and regulations</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not use our services to transmit any harmful, offensive, or illegal content</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Notify us immediately of any unauthorized use of your account or breach of security</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Permit Processing and Approval</h2>
            <p className={styles.paragraph}>
              <strong>4.1 Processing Time:</strong> We strive to process permit applications as quickly as possible. 
              However, processing times vary by state and permit type. We do not guarantee specific processing times, 
              as these are subject to state agency schedules and requirements.
            </p>
            <p className={styles.paragraph}>
              <strong>4.2 Approval Not Guaranteed:</strong> We facilitate the permit application process but do not 
              guarantee permit approval. Permit approval is at the sole discretion of the relevant state or federal 
              agencies. We are not responsible for permit denials or delays caused by regulatory agencies.
            </p>
            <p className={styles.paragraph}>
              <strong>4.3 Accuracy of Information:</strong> You are responsible for ensuring all information provided 
              in your permit application is accurate and complete. Errors or omissions may result in permit denial, 
              delays, or additional fees.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Fees and Payment</h2>
            <p className={styles.paragraph}>
              <strong>5.1 Service Fees:</strong> Our service fees are disclosed at the time of permit request submission. 
              Fees may vary based on permit type, state, and complexity of the application.
            </p>
            <p className={styles.paragraph}>
              <strong>5.2 State Fees:</strong> In addition to our service fees, you are responsible for all state and 
              federal permit fees, which are paid directly to the issuing agencies. These fees are separate from our 
              service charges.
            </p>
            <p className={styles.paragraph}>
              <strong>5.3 Payment Terms:</strong> Payment is required as specified in your service agreement. We accept 
              payment through approved methods as indicated on our website.
            </p>
            <p className={styles.paragraph}>
              <strong>5.4 Refunds:</strong> Service fees are generally non-refundable once processing has begun. Refund 
              policies may vary based on specific circumstances and will be communicated at the time of service.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              <strong>6.1 Service Disclaimer:</strong> Our services are provided "as is" and "as available" without 
              warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, 
              error-free, or completely secure.
            </p>
            <p className={styles.paragraph}>
              <strong>6.2 Limitation of Damages:</strong> To the maximum extent permitted by law, OVERDRIVE PERMITS 
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including 
              but not limited to loss of profits, revenue, data, or business opportunities, arising from or related to 
              the use of our services.
            </p>
            <p className={styles.paragraph}>
              <strong>6.3 Maximum Liability:</strong> Our total liability for any claims arising from our services shall 
              not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
            <p className={styles.paragraph}>
              <strong>6.4 Transportation Risks:</strong> We are not responsible for any damages, delays, or losses 
              incurred during transportation. You are solely responsible for compliance with all transportation 
              regulations and safety requirements.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Indemnification</h2>
            <p className={styles.paragraph}>
              You agree to indemnify, defend, and hold harmless OVERDRIVE PERMITS, its officers, directors, employees, 
              agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable 
              attorneys' fees) arising from:
            </p>
            <ul className={styles.list}>
              <li>Your use of our services</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any law or regulation</li>
              <li>Your infringement of any third-party rights</li>
              <li>Any inaccurate or incomplete information provided by you</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All content, features, and functionality of our website and services, including but not limited to text, 
              graphics, logos, images, and software, are the property of OVERDRIVE PERMITS or its licensors and are 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className={styles.paragraph}>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise 
              use our content without our prior written permission.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Privacy</h2>
            <p className={styles.paragraph}>
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to 
              understand how we collect, use, and protect your information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Termination</h2>
            <p className={styles.paragraph}>
              We reserve the right to terminate or suspend your access to our services at any time, with or without 
              cause or notice, for any reason, including breach of these Terms of Service. Upon termination, your right 
              to use our services will immediately cease.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Changes to Terms</h2>
            <p className={styles.paragraph}>
              We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
              changes by posting the updated terms on this page and updating the "Last Updated" date. Your continued use 
              of our services after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Governing Law and Dispute Resolution</h2>
            <p className={styles.paragraph}>
              <strong>12.1 Governing Law:</strong> These Terms of Service shall be governed by and construed in 
              accordance with the laws of the United States and the state in which OVERDRIVE PERMITS is incorporated, 
              without regard to its conflict of law provisions.
            </p>
            <p className={styles.paragraph}>
              <strong>12.2 Dispute Resolution:</strong> Any disputes arising from or relating to these terms or our 
              services shall be resolved through binding arbitration in accordance with the rules of the American 
              Arbitration Association, except where prohibited by law.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Severability</h2>
            <p className={styles.paragraph}>
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall 
              be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in 
              full force and effect.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Entire Agreement</h2>
            <p className={styles.paragraph}>
              These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and 
              OVERDRIVE PERMITS regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>15. Contact Information</h2>
            <p className={styles.paragraph}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>OVERDRIVE PERMITS</strong></p>
              <p>Email: <a href="mailto:info@overdrivepermits.com" className={styles.link}>info@overdrivepermits.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className={styles.link}>(555) 123-4567</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

