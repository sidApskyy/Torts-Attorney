import type { Metadata } from 'next'
import { LegalPageClient, LegalSection } from '@/components/legal/legal-page-client'

export const metadata: Metadata = {
  title: 'Disclosures | The Torts Attorney',
  description: 'Disclosures for The Torts Attorney. Important information about our services, advertising, and regulatory compliance.',
  alternates: { canonical: '/legal/disclosures' },
  robots: { index: false, follow: true },
}

const sections: LegalSection[] = [
  {
    heading: '1. Nature of Our Business',
    paragraphs: [
      'The Torts Attorney is a legal marketing and case-acquisition services provider. We are not a law firm. We do not provide legal advice, and we do not represent individuals in legal matters. Our services are designed to support plaintiff law firms and campaign partners in acquiring, qualifying, and delivering potential cases.',
      'Nothing on this website should be construed as legal advice or as forming an attorney-client relationship. If you need legal representation, you should consult with a licensed attorney in your jurisdiction.',
    ],
  },
  {
    heading: '2. No Guarantee of Results',
    paragraphs: [
      'The information provided on this website is for general informational and marketing purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information contained on this website.',
      'Case acquisition results vary based on numerous factors including campaign scope, media channels, intake capacity, qualification criteria, and market conditions. We do not guarantee specific outcomes, case volumes, or conversion rates. Any statistics or metrics referenced on this website are illustrative and do not represent a guarantee of future performance.',
    ],
  },
  {
    heading: '3. Advertising and Marketing',
    paragraphs: [
      'This website constitutes attorney marketing material under the rules of professional conduct applicable to legal marketing in various jurisdictions. The content on this site is intended to describe our services to potential business clients (law firms and campaign partners) and is not directed at individuals seeking legal representation.',
      'Prior results do not guarantee a similar outcome. Any testimonials or case studies referenced on this website are provided for illustrative purposes and do not constitute a guarantee, warranty, or prediction regarding the outcome of any future engagement.',
    ],
  },
  {
    heading: '4. Jurisdictional Limitations',
    paragraphs: [
      'The Torts Attorney operates from Philadelphia, Pennsylvania. Our services are offered to clients across the United States, subject to applicable state and federal regulations governing legal marketing and lead generation. We do not solicit or accept engagements in jurisdictions where our services would be prohibited by law.',
    ],
  },
  {
    heading: '5. Compliance with Telephone Consumer Protection Act (TCPA)',
    paragraphs: [
      'In connection with our lead response and intake operations, we adhere to applicable provisions of the Telephone Consumer Protection Act (TCPA) and related regulations. We implement consent management practices and maintain records of consumer consent for communications. However, ultimate compliance responsibility rests with the engaging law firm or campaign partner.',
    ],
  },
  {
    heading: '6. Data and Privacy',
    paragraphs: [
      'We handle personal information in accordance with our Privacy Policy and Cookie Policy, which are incorporated herein by reference. We do not sell personal information to third parties. Data processing activities are conducted in compliance with applicable state privacy laws, including the California Consumer Privacy Act (CCPA) where applicable.',
    ],
  },
  {
    heading: '7. Contact Information',
    paragraphs: [
      'If you have questions about these disclosures or our services, please contact us at hello@thetortsattorney.com or (888) 555-0192. Our mailing address is 1801 Market Street, Suite 2100, Philadelphia, PA 19103.',
    ],
  },
]

export default function DisclosuresPage() {
  return (
    <LegalPageClient
      title="Disclosures"
      lastUpdated="August 2025"
      sections={sections}
    />
  )
}
