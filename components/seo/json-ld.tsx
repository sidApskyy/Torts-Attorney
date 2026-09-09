import Script from 'next/script'
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thetortsattorney.com'
const orgId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: 'The Torts Attorney',
  description: 'Legal marketing and case-acquisition services for plaintiff law firms. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting.',
  url: siteUrl,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_ADDRESS,
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: ['Mass Tort Case Acquisition', 'Lead Generation', 'Intake Operations', 'Qualification Workflows', 'Retainer Management', 'Legal Marketing'],
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.twitter].filter(Boolean),
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/opengraph-image`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    areaServed: 'US',
    availableLanguage: ['English'],
  },
}

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: 'The Torts Attorney',
  url: siteUrl,
  publisher: { '@id': orgId },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/insights?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Plaintiff Case Acquisition Pipeline',
  serviceType: 'Legal Marketing and Case Acquisition',
  provider: { '@id': orgId },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description: 'Full pipeline case acquisition services including campaign strategy, media, intake, qualification, retainer workflow, delivery, and reporting.',
  offers: {
    '@type': 'Offer',
    description: 'Custom pricing based on engagement scope — lead delivery, qualified opportunity, document-complete, or signed-retainer workflow.',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: 'Custom pricing based on engagement scope.',
    },
  },
}

export function JsonLd() {
  return (
    <>
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can a campaign launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines depend on campaign scope, media channels, intake capacity and documentation requirements. After an initial scoping conversation, we provide a deployment estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a law firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Torts Attorney provides legal marketing and case-acquisition services for plaintiff law firms and campaign partners. We are not a law firm and do not provide legal advice or legal representation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What reporting do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide regular reporting that includes real-time dashboards, weekly performance summaries and monthly deep-dive analyses with attribution data, qualification metrics and economic analysis.',
      },
    },
  ],
}

export function FaqJsonLd() {
  return (
    <Script
      id="ld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}
