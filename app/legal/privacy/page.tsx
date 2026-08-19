import type { Metadata } from 'next'
import { LegalPageClient, LegalSection } from '@/components/legal/legal-page-client'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Torts Attorney',
  description: 'Privacy Policy for The Torts Attorney. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/legal/privacy' },
  robots: { index: false, follow: true },
}

const sections: LegalSection[] = [
  {
    heading: '1. Information We Collect',
    paragraphs: [
      'We collect information that you provide directly to us when you fill out our contact form, including your name, company name, email address, phone number, website (if provided), primary acquisition challenge, and any additional message content you choose to share.',
      'We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, operating system, referring URLs, pages viewed, and the date and time of your visit. This information is collected through cookies and similar tracking technologies as described in our Cookie Policy.',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    paragraphs: [
      'We use the information you provide to respond to your inquiries, schedule consultations, and communicate with you about our services. We may use your contact information to send you information about our services, updates, or marketing communications, provided you have given us consent to do so.',
      'We use automatically collected technical information to analyze website usage patterns, improve our website functionality, monitor for security issues, and optimize user experience. This data is aggregated and does not identify individual users.',
    ],
  },
  {
    heading: '3. How We Share Your Information',
    paragraphs: [
      'We do not sell, rent, or trade your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as email delivery services (e.g., Resend), analytics providers, and hosting providers. These service providers are contractually obligated to protect your information and are prohibited from using it for any other purpose.',
      'We may also disclose your information when required by law, court order, or government regulation, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.',
    ],
  },
  {
    heading: '4. Data Security',
    paragraphs: [
      'We implement reasonable technical, administrative, and physical safeguards designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (TLS/SSL), access controls, and regular security assessments.',
      'However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security, and you acknowledge that you provide your information at your own risk.',
    ],
  },
  {
    heading: '5. Your Rights',
    paragraphs: [
      'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data. You may also have the right to data portability and the right to object to certain types of processing.',
      'To exercise any of these rights, please contact us at hello@thetortsattorney.com. We will respond to your request within 30 days, as required by applicable law.',
    ],
  },
  {
    heading: '6. Cookies and Tracking Technologies',
    paragraphs: [
      'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files that may be placed on your device. For more information about how we use cookies and your choices regarding cookies, please review our Cookie Policy.',
    ],
  },
  {
    heading: '7. Children\u2019s Privacy',
    paragraphs: [
      'Our website is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can promptly delete it.',
    ],
  },
  {
    heading: '8. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageClient
      title="Privacy Policy"
      lastUpdated="August 2025"
      sections={sections}
    />
  )
}
