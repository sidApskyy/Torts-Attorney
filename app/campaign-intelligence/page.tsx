import type { Metadata } from 'next'
import { CampaignIntelligenceClient } from './campaign-intelligence-client'

export const metadata: Metadata = {
  title: 'Campaign Intelligence | The Torts Attorney - Command Center',
  description: 'Campaign intelligence dashboard for plaintiff acquisition: real-time metrics, funnel monitoring, lead quality tracking, and operational visibility.',
  alternates: { canonical: '/campaign-intelligence' },
  openGraph: {
    title: 'Campaign Intelligence | The Torts Attorney - Command Center',
    description: 'Campaign intelligence dashboard for plaintiff acquisition: real-time metrics, funnel monitoring, lead quality tracking, and operational visibility.',
    type: 'website',
  },
}

export default function CampaignIntelligencePage() {
  return <CampaignIntelligenceClient />
}
