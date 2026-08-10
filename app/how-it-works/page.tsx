import type { Metadata } from 'next'
import { HowItWorksClient } from './how-it-works-client'

export const metadata: Metadata = {
  title: 'How It Works | The Torts Attorney - 7-Stage Operating Model',
  description: 'Our 7-stage operating model for plaintiff acquisition: validate, build, launch, qualify, complete & deliver, and optimize campaigns for law firms.',
  openGraph: {
    title: 'How It Works | The Torts Attorney - 7-Stage Operating Model',
    description: 'Our 7-stage operating model for plaintiff acquisition: validate, build, launch, qualify, complete & deliver, and optimize campaigns for law firms.',
    type: 'website',
  },
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}
