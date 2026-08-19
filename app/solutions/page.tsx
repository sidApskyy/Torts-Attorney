import type { Metadata } from 'next'
import { SolutionsClient } from './solutions-client'

export const metadata: Metadata = {
  title: 'Solutions | The Torts Attorney - Plaintiff Acquisition Systems',
  description: 'Comprehensive plaintiff acquisition solutions: campaign strategy, intake operations, qualification workflows, retainer support, delivery, and reporting for law firms.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions | The Torts Attorney - Plaintiff Acquisition Systems',
    description: 'Comprehensive plaintiff acquisition solutions: campaign strategy, intake operations, qualification workflows, retainer support, delivery, and reporting for law firms.',
    type: 'website',
  },
}

export default function SolutionsPage() {
  return <SolutionsClient />
}
