'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'

const steps = [
  {
    number: '01',
    title: 'Map the Current Process',
    description: 'We review your existing campaign, intake workflow, qualification criteria and reporting. The goal is to understand where opportunities are being won, lost or delayed — before changing anything.',
    highlights: ['Workflow audit', 'Gap identification', 'Capacity assessment'],
  },
  {
    number: '02',
    title: 'Build the Operating Plan',
    description: 'We design a campaign-specific plan covering media strategy, intake operations, qualification criteria, documentation workflow, delivery method and reporting cadence — aligned to your firm\'s capacity.',
    highlights: ['Campaign-specific design', 'Delivery configuration', 'Reporting framework'],
  },
  {
    number: '03',
    title: 'Operate and Optimize',
    description: 'We execute the plan, monitor every pipeline stage and report on what is working. Adjustments are made based on downstream outcomes — not just lead counts.',
    highlights: ['Active management', 'Downstream optimization', 'Transparent reporting'],
  },
]

export function HowItWorks() {
  return (
    <section className="bg-[#F5F7FA] py-24 md:py-32 lg:py-40 relative overflow-hidden" aria-labelledby="how-it-works-heading">
      {/* Ambient accents */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C6A24A]" />
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                From Conversation to Campaign
              </p>
            </div>
            <h2 id="how-it-works-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] text-left max-w-3xl">
              <GradientText animationSpeed={5}>
                Three steps. No black boxes.
              </GradientText>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-[1.7] text-left">
              Every engagement follows the same transparent structure — from initial conversation through active operation.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#C6A24A]/10 via-[#C6A24A]/30 to-[#C6A24A]/10" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Number circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-white border border-[#C6A24A]/20 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(198,162,74,0.15)] relative z-10">
                    <span className="font-serif text-3xl font-bold text-[#C6A24A]">{step.number}</span>
                  </div>
                  {/* Glow behind circle */}
                  <div className="absolute inset-0 rounded-2xl bg-[#C6A24A]/8 blur-xl" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-[#4B5563] leading-[1.7] mb-6">
                  {step.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {step.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-3 text-sm text-[#202124]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A24A] flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 text-center"
          >
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#C6A24A] hover:text-[#9B7830] transition-colors group"
            >
              See the full acquisition lifecycle
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
