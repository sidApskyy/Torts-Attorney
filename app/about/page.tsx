import type { Metadata } from 'next'
import { AboutClientWrapper } from './about-wrapper'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About | The Torts Attorney - Plaintiff Acquisition Intelligence',
  description: 'About The Torts Attorney: we build and operate plaintiff acquisition systems for mass tort and personal injury firms with intelligence-driven strategies.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | The Torts Attorney - Plaintiff Acquisition Intelligence',
    description: 'About The Torts Attorney: we build and operate plaintiff acquisition systems for mass tort and personal injury firms with intelligence-driven strategies.',
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutClientWrapper />
}
