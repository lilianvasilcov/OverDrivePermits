import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for OVERDRIVE PERMITS - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.paragraph}>
              OVERDRIVE PERMITS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website and use 
              our permit services. Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            
            <h3 className={styles.subsectionTitle}>2.1 Personal Information</h3>
            <p className={styles.paragraph}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className={styles.list}>
              <li>Submit a permit request form</li>
              <li>Contact us via email or phone</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Interact with our website features</li>
            </ul>
            <p className={styles.paragraph}>
              This information may include:
            </p>
            <ul className={styles.list}>
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Company name and business information</li>
              <li>Vehicle and cargo details for permit applications</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className={styles.subsectionTitle}>2.2 Automatically Collected Information</h3>
            <p className={styles.paragraph}>
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className={styles.list}>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers and usage data</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p className={styles.paragraph}>
              We use the information we collect for various purposes, including:
            </p>
            <ul className={styles.list}>
              <li>Processing and managing your permit applications</li>
              <li>Communicating with you about your permit requests</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Sending administrative information, updates, and notifications</li>
              <li>Improving our website, services, and user experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Marketing and promotional purposes (with your consent where required)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Information Sharing and Disclosure</h2>
            <p className={styles.paragraph}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              in the following circumstances:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Service Providers:</strong> We may share information with third-party service providers who 
                perform services on our behalf, such as payment processing, email delivery, and website hosting.
              </li>
              <li>
                <strong>Government Agencies:</strong> We may disclose information to state and federal agencies as 
                required for permit processing and regulatory compliance.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or 
                government regulation, or to protect our rights, property, or safety.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your 
                information may be transferred to the acquiring entity.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with third parties when you have 
                provided explicit consent.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <p className={styles.paragraph}>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to 
              protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Your Rights and Choices</h2>
            <p className={styles.paragraph}>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className={styles.list}>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
            <p className={styles.paragraph}>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Cookies and Tracking Technologies</h2>
            <p className={styles.paragraph}>
              We use cookies and similar tracking technologies to collect and store information about your preferences 
              and activities on our website. You can control cookie preferences through your browser settings. However, 
              disabling cookies may limit your ability to use certain features of our website.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
            <p className={styles.paragraph}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party 
              sites you visit.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Children's Privacy</h2>
            <p className={styles.paragraph}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have inadvertently collected information from a child, please 
              contact us immediately.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Changes to This Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
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

