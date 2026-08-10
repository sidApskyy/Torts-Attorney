import type { Metadata } from 'next'
import { RetainerOptimizationClient } from './retainer-optimization-client'

export const metadata: Metadata = {
  title: 'Retainer & Conversion Optimization | The Torts Attorney - Retainer Support',
  description: 'Retainer and conversion optimization for plaintiff campaigns: document workflow support, retainer completion tracking, and conversion rate improvement strategies.',
  openGraph: {
    title: 'Retainer & Conversion Optimization | The Torts Attorney - Retainer Support',
    description: 'Retainer and conversion optimization for plaintiff campaigns: document workflow support, retainer completion tracking, and conversion rate improvement strategies.',
    type: 'website',
  },
}

export default function RetainerOptimizationPage() {
  return <RetainerOptimizationClient />
}
