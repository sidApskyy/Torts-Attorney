import type { Metadata } from 'next'
import { ReportingClient } from './reporting-client'

export const metadata: Metadata = {
  title: 'Reporting & Campaign Intelligence | The Torts Attorney - Performance Analytics',
  description: 'Reporting and campaign intelligence for plaintiff campaigns: performance metrics, qualification tracking, acquisition economics, and transparent reporting dashboards.',
  alternates: { canonical: '/solutions/reporting' },
  openGraph: {
    title: 'Reporting & Campaign Intelligence | The Torts Attorney - Performance Analytics',
    description: 'Reporting and campaign intelligence for plaintiff campaigns: performance metrics, qualification tracking, acquisition economics, and transparent reporting dashboards.',
    type: 'website',
  },
}

export default function ReportingPage() {
  return <ReportingClient />
}
