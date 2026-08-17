import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Problem } from '@/components/sections/problem'
import { AcquisitionLifecycleDetail } from '@/components/sections/acquisition-lifecycle-detail'
import { Solutions } from '@/components/sections/solutions'
import { CommandCenter } from '@/components/sections/command-center'
import { WhyUs } from '@/components/sections/why-us'
import { Proof } from '@/components/sections/proof'
import { SocialProof } from '@/components/sections/social-proof'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Plaintiff Case Acquisition & Intake Services | The Torts Attorney',
  description: 'We help plaintiff law firms build and operate case-acquisition programs across campaign strategy, media, intake, qualification, retainer workflow and reporting.',
  openGraph: {
    title: 'Plaintiff Case Acquisition & Intake Services | The Torts Attorney',
    description: 'We help plaintiff law firms build and operate case-acquisition programs across campaign strategy, media, intake, qualification, retainer workflow and reporting.',
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
      <HowItWorks />
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
      <SocialProof />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <FinalCTA />
    </div>
  )
}
