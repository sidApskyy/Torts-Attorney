import type { Metadata } from 'next'
import { DocumentationClient } from './documentation-client'

export const metadata: Metadata = {
  title: 'Documentation & Compliance | The Torts Attorney - Document Management',
  description: 'Documentation and compliance for plaintiff campaigns: document collection, completion tracking, TCPA compliance, and audit trails for case management.',
  alternates: { canonical: '/solutions/documentation' },
  openGraph: {
    title: 'Documentation & Compliance | The Torts Attorney - Document Management',
    description: 'Documentation and compliance for plaintiff campaigns: document collection, completion tracking, TCPA compliance, and audit trails for case management.',
    type: 'website',
  },
}

export default function DocumentationPage() {
  return <DocumentationClient />
}
