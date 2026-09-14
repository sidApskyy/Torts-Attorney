import type { Metadata } from 'next'
import { LegalPageClient, LegalSection } from '@/components/legal/legal-page-client'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Torts Attorney',
  description: 'Privacy Policy for The Torts Attorney. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/legal/privacy' },
  robots: { index: false, follow: true },
}

const intro: string[] = [
  'At The Torts Attorney, accessible from https://thetortsattorney.com, safeguarding the privacy of our visitors is one of our top priorities. This Privacy Policy document outlines the types of information collected and recorded by The Torts Attorney and how we use it.',
  `If you have any further questions or need more information about our Privacy Policy, please don\u2019t hesitate to contact us at ${CONTACT_EMAIL}.`,
  'This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information they share and/or we collect at The Torts Attorney. This policy does not apply to information collected offline or through other channels outside this website.',
]

const sections: LegalSection[] = [
  {
    heading: '1. Consent',
    paragraphs: [
      'By using our website, you hereby consent to our Privacy Policy and agree to its terms.',
    ],
  },
  {
    heading: '2. Information We Collect',
    paragraphs: [
      'The personal information you are asked to provide, along with the reasons why you are asked to provide it, will be made clear to you when we request it.',
      'If you contact us directly, we may collect additional information such as your name, email address, phone number, the contents of the message and/or any attachments you send us, and any other details you choose to provide.',
      'When you register for an account, we may ask for contact information such as your name, company name, address, email address, and phone number.',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    paragraphs: [
      'We use the information we collect in various ways, including to:',
    ],
    list: [
      { text: 'Provide, operate, and maintain our website' },
      { text: 'Improve, personalize, and expand our website' },
      { text: 'Understand and analyze how you use our website' },
      { text: 'Develop new products, services, features, and functionality' },
      { text: 'Communicate with you, either directly or through our partners, including for customer service, updates, and marketing purposes' },
      { text: 'Send you emails and SMS messages' },
      { text: 'Prevent fraud' },
    ],
  },
  {
    heading: '4. Log Files',
    paragraphs: [
      'The Torts Attorney follows a standard practice of using log files. These files log visitors when they visit websites, which is standard for all hosting companies as part of their analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and possibly the number of clicks. This information is not linked to any personally identifiable information and is used for trend analysis, site administration, user movement tracking, and demographic insights.',
    ],
  },
  {
    heading: '5. Cookies and Web Beacons',
    paragraphs: [
      'Like many websites, The Torts Attorney uses \u2018cookies\u2019 to store information about visitors\u2019 preferences and the pages they visited on the site. This information is used to optimize the user experience by customizing web content based on the visitor\u2019s browser type and other relevant data.',
    ],
  },
  {
    heading: '6. Advertising Partners Privacy Policies',
    paragraphs: [
      'You may consult this list to find the Privacy Policy for each of the advertising partners of The Torts Attorney.',
      'Third-party ad servers or networks use technologies like cookies, JavaScript, or web beacons in their respective advertisements and links that appear on The Torts Attorney, which are sent directly to your browser. They automatically receive your IP address when this happens. These technologies are used to measure the effectiveness of advertising campaigns and to personalize the ads you see on other websites.',
      'Note that The Torts Attorney has no access to or control over these cookies used by third-party advertisers.',
    ],
  },
  {
    heading: '7. Third-Party Privacy Policies',
    paragraphs: [
      'The Torts Attorney does not share or sell your subscriber information to any third parties.',
    ],
  },
  {
    heading: '8. CCPA Privacy Rights (Do Not Sell My Personal Information)',
    paragraphs: [
      'Under the California Consumer Privacy Act (CCPA), California consumers have specific rights, including:',
    ],
    list: [
      { text: 'Requesting that a business disclose the categories and specific pieces of personal data it has collected.' },
      { text: 'Requesting that a business delete any personal data collected about the consumer.' },
      { text: 'Requesting that a business that sells personal data stop doing so.' },
    ],
    closingParagraphs: [
      `If you wish to exercise any of these rights, please contact us at ${CONTACT_EMAIL}. We have one month to respond to your request.`,
    ],
  },
  {
    heading: '9. GDPR Data Protection Rights',
    paragraphs: [
      'We want to ensure you are fully aware of all your data protection rights. Every user is entitled to the following:',
    ],
    list: [
      { label: 'Right to Access:', text: 'You have the right to request copies of your personal data. We may charge a small fee for this service.' },
      { label: 'Right to Rectification:', text: 'You have the right to request that we correct any information you believe is inaccurate or incomplete.' },
      { label: 'Right to Erasure:', text: 'You have the right to request that we erase your personal data under certain conditions.' },
      { label: 'Right to Restrict Processing:', text: 'You have the right to request that we restrict the processing of your personal data under certain conditions.' },
      { label: 'Right to Object to Processing:', text: 'You have the right to object to our processing of your personal data under certain conditions.' },
      { label: 'Right to Data Portability:', text: 'You have the right to request that we transfer your data to another organization, or directly to you, under certain conditions.' },
    ],
    closingParagraphs: [
      `If you would like to exercise any of these rights, please contact us at ${CONTACT_EMAIL}. We have one month to respond to your request.`,
    ],
  },
  {
    heading: '10. Children\u2019s Information',
    paragraphs: [
      'Protecting children online is another priority for us. We encourage parents and guardians to monitor and guide their children\u2019s internet activity.',
      `The Torts Attorney does not knowingly collect any personally identifiable information from children under the age of 13. If you believe that your child provided this kind of information on our website, please contact us immediately at ${CONTACT_EMAIL}, and we will make every effort to promptly remove such information from our records.`,
    ],
  },
  {
    heading: '11. Changes to This Policy',
    paragraphs: [
      'This policy is subject to updates. We recommend checking this page periodically for any changes.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageClient
      title="Privacy Policy"
      lastUpdated="August 2025"
      intro={intro}
      sections={sections}
    />
  )
}
