import type { Metadata } from 'next'
import { LeadQualificationClient } from './lead-qualification-client'

export const metadata: Metadata = {
  title: 'Lead Qualification | The Torts Attorney - Qualification Workflows',
  description: 'Lead qualification workflows for plaintiff campaigns: campaign-specific qualification criteria, disposition tracking, and transparent decision documentation.',
  alternates: { canonical: '/solutions/lead-qualification' },
  openGraph: {
    title: 'Lead Qualification | The Torts Attorney - Qualification Workflows',
    description: 'Lead qualification workflows for plaintiff campaigns: campaign-specific qualification criteria, disposition tracking, and transparent decision documentation.',
    type: 'website',
  },
}

export default function LeadQualificationPage() {
  return <LeadQualificationClient />
}
