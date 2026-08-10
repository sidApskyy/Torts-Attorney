import type { Metadata } from 'next'
import { InsightsClient } from './insights-client'

export const metadata: Metadata = {
  title: 'Insights | The Torts Attorney - Plaintiff Growth Intelligence',
  description: 'Strategic insights on plaintiff acquisition, intake operations, qualification workflows, TCPA compliance, and campaign intelligence for law firms.',
  openGraph: {
    title: 'Insights | The Torts Attorney - Plaintiff Growth Intelligence',
    description: 'Strategic insights on plaintiff acquisition, intake operations, qualification workflows, TCPA compliance, and campaign intelligence for law firms.',
    type: 'website',
  },
}

export default function InsightsPage() {
  return <InsightsClient />
}
