import type { Metadata } from 'next'
import { LegalPageClient, LegalSection } from '@/components/legal/legal-page-client'

export const metadata: Metadata = {
  title: 'Terms of Service | The Torts Attorney',
  description: 'Terms of Service for The Torts Attorney. The terms and conditions governing your use of our website.',
  alternates: { canonical: '/legal/terms' },
  robots: { index: false, follow: true },
}

const sections: LegalSection[] = [
  {
    heading: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing or using the website of The Torts Attorney (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Site. These Terms constitute a legally binding agreement between you and The Torts Attorney.',
    ],
  },
  {
    heading: '2. Description of Services',
    paragraphs: [
      'The Torts Attorney provides legal marketing and case-acquisition services for plaintiff law firms and campaign partners. We are not a law firm and do not provide legal advice or legal representation. Our services include campaign strategy, media acquisition, lead response, intake operations, lead qualification, documentation support, retainer optimization, delivery, and reporting.',
      'These Terms govern your use of our website only. Separate service agreements will govern any engagement for our professional services.',
    ],
  },
  {
    heading: '3. Intellectual Property',
    paragraphs: [
      'All content on this Site, including text, graphics, logos, design elements, and software, is the property of The Torts Attorney or its licensors and is protected by United States and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.',
    ],
  },
  {
    heading: '4. Use of the Site',
    paragraphs: [
      'You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by any third party. You agree not to use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party\u2019s use of the Site.',
      'Prohibited conduct includes, but is not limited to: submitting false or misleading information through our contact form, attempting to gain unauthorized access to any portion of the Site, using automated tools to scrape or extract content, and transmitting viruses, malware, or other malicious code.',
    ],
  },
  {
    heading: '5. Disclaimer of Warranties',
    paragraphs: [
      'The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or secure, or that any information on the Site is accurate, complete, or current.',
    ],
  },
  {
    heading: '6. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by applicable law, The Torts Attorney shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the Site, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages.',
    ],
  },
  {
    heading: '7. Indemnification',
    paragraphs: [
      'You agree to indemnify, defend, and hold harmless The Torts Attorney and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney\u2019s fees, arising out of or in connection with your use of the Site or your violation of these Terms.',
    ],
  },
  {
    heading: '8. Third-Party Links',
    paragraphs: [
      'The Site may contain links to third-party websites or services that are not owned or controlled by The Torts Attorney. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge that The Torts Attorney shall not be liable for any damage or loss caused by your use of any third-party website.',
    ],
  },
  {
    heading: '9. Changes to These Terms',
    paragraphs: [
      'We may revise these Terms from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.',
    ],
  },
  {
    heading: '10. Governing Law',
    paragraphs: [
      'These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or your use of the Site shall be resolved exclusively in the state or federal courts located in Philadelphia County, Pennsylvania.',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPageClient
      title="Terms of Service"
      lastUpdated="August 2025"
      sections={sections}
    />
  )
}
