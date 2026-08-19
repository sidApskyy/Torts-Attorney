import type { Metadata } from 'next'
import { LeadResponseClient } from './lead-response-client'

export const metadata: Metadata = {
  title: 'Lead Response & Intake | The Torts Attorney - Intake Operations',
  description: 'Lead response and intake operations for plaintiff campaigns: rapid response, intake workflows, qualification screening, and TCPA-compliant consent management.',
  alternates: { canonical: '/solutions/lead-response' },
  openGraph: {
    title: 'Lead Response & Intake | The Torts Attorney - Intake Operations',
    description: 'Lead response and intake operations for plaintiff campaigns: rapid response, intake workflows, qualification screening, and TCPA-compliant consent management.',
    type: 'website',
  },
}

export default function LeadResponsePage() {
  return <LeadResponseClient />
}
