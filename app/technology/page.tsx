import type { Metadata } from 'next'
import { TechnologyClient } from './technology-client'

export const metadata: Metadata = {
  title: 'Technology | The Torts Attorney - Acquisition Infrastructure',
  description: 'Technology infrastructure for plaintiff acquisition: campaign systems, intake workflows, qualification platforms, CRM integration, and reporting dashboards.',
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'Technology | The Torts Attorney - Acquisition Infrastructure',
    description: 'Technology infrastructure for plaintiff acquisition: campaign systems, intake workflows, qualification platforms, CRM integration, and reporting dashboards.',
    type: 'website',
  },
}

export default function TechnologyPage() {
  return <TechnologyClient />
}
