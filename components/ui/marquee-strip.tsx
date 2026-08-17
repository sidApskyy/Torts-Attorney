'use client'

import { Marquee } from '@/components/ui/marquee'

const phrases = [
  'Campaign-Specific Intake',
  'Documented Source Tracking',
  'Consent-Aware Workflows',
  'CRM-Ready Delivery',
  'Downstream Performance Visibility',
  'Pipeline Transparency',
  'Retainer Workflow Optimization',
]

export function MarqueeStrip() {
  return (
    <div className="bg-[#1A1A1F] py-5 relative overflow-hidden border-y border-[#C6A24A]/15">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1F] to-transparent z-10 pointer-events-none" />

      <Marquee speed={35} className="py-1">
        {phrases.map((phrase, index) => (
          <div key={index} className="flex items-center gap-4 shrink-0 px-6">
            <span className="font-serif text-lg md:text-xl font-medium text-[rgba(255,255,255,0.85)] tracking-wide">
              {phrase}
            </span>
            <span className="text-[#C6A24A] text-xl">✦</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
