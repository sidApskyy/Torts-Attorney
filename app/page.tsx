import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Problem } from '@/components/sections/problem'
import { AcquisitionLifecycleDetail } from '@/components/sections/acquisition-lifecycle-detail'
import { Solutions } from '@/components/sections/solutions'
import { CommandCenter } from '@/components/sections/command-center'
import { WhyUs } from '@/components/sections/why-us'
import { Proof } from '@/components/sections/proof'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'The Torts Attorney - Plaintiff Acquisition Systems for Law Firms',
  description: 'Build and operate plaintiff acquisition systems: campaign strategy, media buying, intake operations, qualification workflows, retainer support, and delivery for law firms.',
  openGraph: {
    title: 'The Torts Attorney - Plaintiff Acquisition Systems for Law Firms',
    description: 'Build and operate plaintiff acquisition systems: campaign strategy, media buying, intake operations, qualification workflows, retainer support, and delivery for law firms.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="section-divider" />
      <TrustStrip />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <AcquisitionLifecycleDetail />
      <div className="section-divider" />
      <Solutions />
      <div className="section-divider" />
      <CommandCenter />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />
      <Proof />
      <div className="section-divider" />
      <FinalCTA />
    </div>
  )
}
