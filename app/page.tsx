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
import { MarqueeStrip } from '@/components/ui/marquee-strip'

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
      <div id="hero">
        <Hero />
      </div>
      <div className="section-divider" />
      <div id="capabilities">
        <TrustStrip />
      </div>
      <div className="section-divider" />
      <div id="problem">
        <Problem />
      </div>
      <MarqueeStrip />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div className="section-divider" />
      <div id="lifecycle">
        <AcquisitionLifecycleDetail />
      </div>
      <div className="section-divider" />
      <div id="solutions">
        <Solutions />
      </div>
      <div className="section-divider" />
      <div id="command-center">
        <CommandCenter />
      </div>
      <div className="section-divider" />
      <div id="why-us">
        <WhyUs />
      </div>
      <div className="section-divider" />
      <div id="proof">
        <Proof />
      </div>
      <div className="section-divider" />
      <div id="social-proof">
        <SocialProof />
      </div>
      <div className="section-divider" />
      <div id="faq">
        <FAQ />
      </div>
      <div className="section-divider" />
      <div id="final-cta">
        <FinalCTA />
      </div>
    </div>
  )
}
