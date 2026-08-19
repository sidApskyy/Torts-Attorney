import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Problem } from '@/components/sections/problem'
import { MarqueeStrip } from '@/components/ui/marquee-strip'

const HowItWorks = dynamic(() => import('@/components/sections/how-it-works').then((m) => m.HowItWorks))
const AcquisitionLifecycleDetail = dynamic(() => import('@/components/sections/acquisition-lifecycle-detail').then((m) => m.AcquisitionLifecycleDetail))
const Solutions = dynamic(() => import('@/components/sections/solutions').then((m) => m.Solutions))
const CommandCenter = dynamic(() => import('@/components/sections/command-center').then((m) => m.CommandCenter))
const WhyUs = dynamic(() => import('@/components/sections/why-us').then((m) => m.WhyUs))
const Proof = dynamic(() => import('@/components/sections/proof').then((m) => m.Proof))
const SocialProof = dynamic(() => import('@/components/sections/social-proof').then((m) => m.SocialProof))
const FAQ = dynamic(() => import('@/components/sections/faq').then((m) => m.FAQ))
const FinalCTA = dynamic(() => import('@/components/sections/final-cta').then((m) => m.FinalCTA))

export const metadata: Metadata = {
  title: 'Plaintiff Case Acquisition & Intake Services | The Torts Attorney',
  description: 'We help plaintiff law firms build and operate case-acquisition programs across campaign strategy, media, intake, qualification, retainer workflow and reporting.',
  alternates: { canonical: '/' },
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
      <div className="section-divider-animated" />
      <div id="capabilities">
        <TrustStrip />
      </div>
      <div className="section-divider-animated" />
      <div id="problem">
        <Problem />
      </div>
      <MarqueeStrip />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div className="section-divider-animated" />
      <div id="lifecycle">
        <AcquisitionLifecycleDetail />
      </div>
      <div className="section-divider-animated" />
      <div id="solutions">
        <Solutions />
      </div>
      <div className="section-divider-animated" />
      <div id="command-center">
        <CommandCenter />
      </div>
      <div className="section-divider-animated" />
      <div id="why-us">
        <WhyUs />
      </div>
      <div className="section-divider-animated" />
      <div id="proof">
        <Proof />
      </div>
      <div className="section-divider-animated" />
      <div id="social-proof">
        <SocialProof />
      </div>
      <div className="section-divider-animated" />
      <div id="faq">
        <FAQ />
      </div>
      <div className="section-divider-animated" />
      <div id="final-cta">
        <FinalCTA />
      </div>
    </div>
  )
}
