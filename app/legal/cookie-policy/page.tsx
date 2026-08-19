import type { Metadata } from 'next'
import { LegalPageClient, LegalSection } from '@/components/legal/legal-page-client'

export const metadata: Metadata = {
  title: 'Cookie Policy | The Torts Attorney',
  description: 'Cookie Policy for The Torts Attorney. Learn about the cookies we use and how to manage them.',
  alternates: { canonical: '/legal/cookie-policy' },
  robots: { index: false, follow: true },
}

const sections: LegalSection[] = [
  {
    heading: '1. What Are Cookies',
    paragraphs: [
      'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners. Cookies allow websites to remember your actions and preferences over a period of time, so you don\u2019t have to re-enter them every time you visit the site or browse from one page to another.',
    ],
  },
  {
    heading: '2. Types of Cookies We Use',
    paragraphs: [
      'Essential cookies: These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in the contact form.',
      'Analytics cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.',
      'Functional cookies: These cookies enable enhanced functionality and personalization, such as remembering your preferences from previous visits. If you do not allow these cookies, some or all of these services may not function properly.',
    ],
  },
  {
    heading: '3. Third-Party Cookies',
    paragraphs: [
      'In some special cases, we may use cookies from trusted third-party services. These third parties may use cookies to analyze how you use our site, to deliver content from our site, or to provide functionality such as maps or embedded videos. These third-party cookies are subject to the respective third-party privacy policies.',
    ],
  },
  {
    heading: '4. Managing Cookies',
    paragraphs: [
      'You can control and manage cookies in your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. If you choose to refuse cookies, some parts of our website may not function properly.',
      'To manage cookies in Google Chrome, go to Settings > Privacy and security > Cookies and other site data. In Mozilla Firefox, go to Settings > Privacy & Security > Cookies and Site Data. In Safari, go to Preferences > Privacy > Cookies and website data. In Microsoft Edge, go to Settings > Cookies and site permissions > Cookies and site data.',
    ],
  },
  {
    heading: '5. Cookie Consent',
    paragraphs: [
      'When you first visit our website, we display a cookie consent banner that allows you to accept or decline non-essential cookies. Your choice is stored in a cookie and remembered for future visits. You may withdraw your consent at any time by clearing your browser cookies and revisiting our site.',
    ],
  },
  {
    heading: '6. Updates to This Cookie Policy',
    paragraphs: [
      'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this Cookie Policy periodically.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPageClient
      title="Cookie Policy"
      lastUpdated="August 2025"
      sections={sections}
    />
  )
}
