import Script from 'next/script'

export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Torts Attorney',
    description: 'Legal marketing and case-acquisition services for plaintiff law firms. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting.',
    url: 'https://thetortsattorney.com',
    areaServed: 'United States',
    knowsAbout: ['Mass Tort Case Acquisition', 'Lead Generation', 'Intake Operations', 'Qualification Workflows', 'Retainer Management', 'Legal Marketing'],
    sameAs: [],
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Plaintiff Case Acquisition Pipeline',
    provider: {
      '@type': 'Organization',
      name: 'The Torts Attorney',
    },
    areaServed: 'United States',
    description: 'Full pipeline case acquisition services including campaign strategy, media, intake, qualification, retainer workflow, delivery, and reporting.',
    offers: {
      '@type': 'Offer',
      description: 'Custom pricing based on engagement scope — lead delivery, qualified opportunity, document-complete, or signed-retainer workflow.',
    },
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

  return (
    <>
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}
