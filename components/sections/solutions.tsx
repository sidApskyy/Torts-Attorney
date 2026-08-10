'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { PixelCard } from '@/components/ui/pixel-card'

export function Solutions() {
  const solutions = [
    {
      title: 'Campaign Strategy & Media',
      problem: 'Media buying without operational alignment leads to wasted spend and unqualified volume.',
      capability: 'Campaign-specific operating plans, media strategy, and deployment aligned to your intake capacity.',
      value: 'Higher-quality responses that match your firm\'s operational capability.',
      featured: true,
    },
    {
      title: 'Intake & Qualification',
      problem: 'Generic intake workflows miss qualification opportunities and create downstream bottlenecks.',
      capability: 'Campaign-specific intake operations with qualification logic and disposition tracking.',
      value: 'Faster qualification, better dispositioning, and improved conversion rates.',
      featured: false,
    },
    {
      title: 'Retainer Workflow',
      problem: 'Document collection and retainer completion are where most potential cases are lost.',
      capability: 'Structured retainer workflow support with document tracking and completion monitoring.',
      value: 'Higher retainer completion rates and faster time-to-signature.',
      featured: false,
    },
    {
      title: 'Lead Nurturing & Reactivation',
      problem: 'Qualified leads that don\'t convert immediately are often lost to follow-up gaps.',
      capability: 'Systematic nurturing and reactivation workflows for qualified but unconverted leads.',
      value: 'Recovery of qualified opportunities and improved campaign economics.',
      featured: false,
    },
    {
      title: 'Reporting & Analytics',
      problem: 'Without visibility into downstream performance, you can\'t optimize acquisition economics.',
      capability: 'Transparent reporting on metrics from response through retainer completion.',
      value: 'Data-driven optimization and clear visibility into campaign performance.',
      featured: false,
    },
    {
      title: 'CRM & Workflow Integration',
      problem: 'Manual data transfer between acquisition systems and case management creates errors and delays.',
      capability: 'Seamless integration with your existing CRM and case management systems.',
      value: 'Faster delivery, reduced errors, and automated workflow triggers.',
      featured: false,
    },
  ]

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="solutions-heading">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20 section-heading-glow">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A]">
                What We Do
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
            </motion.span>
            <h2 id="solutions-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Solutions Built for the <span className="text-[#9B7830] font-bold">Full Pipeline</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
            >
              We address the operational challenges that occur after the lead arrives—because that's where acquisition performance is determined.
            </motion.p>
          </div>

          {/* Featured solution - slide-up + fade in */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <PixelCard
              variant="red"
              gap={8}
              speed={45}
              className="glass-card p-10 md:p-14"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-6">
                    {solutions[0].title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#6B7280]">
                        The Problem
                      </p>
                      <p className="text-[#4B5563] leading-[1.7]">
                        {solutions[0].problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#C6A24A]">
                        Our Capability
                      </p>
                      <p className="text-[#4B5563] leading-[1.7]">
                        {solutions[0].capability}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:border-l lg:border-[rgba(32, 33, 36,0.28)] lg:pl-10">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#6B7280]">
                    Operational Value
                  </p>
                  <p className="text-[#202124] text-lg md:text-xl leading-[1.5] font-medium">
                    {solutions[0].value}
                  </p>
                </div>
              </div>
            </PixelCard>
          </motion.div>

          {/* Supporting solutions - PixelCard with hover animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {solutions.slice(1).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'h-full',
                  index === 0 ? 'md:col-span-2' : ''
                )}
              >
                <PixelCard
                  variant="copper"
                  gap={7}
                  speed={40}
                  className={cn('glass-card h-full p-8', index === 0 ? 'md:col-span-2' : '')}
                >
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-4">
                    {solution.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#6B7280]">
                        The Problem
                      </p>
                      <p className="text-sm text-[#4B5563] leading-[1.7]">
                        {solution.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#C6A24A]">
                        Our Capability
                      </p>
                      <p className="text-sm text-[#4B5563] leading-[1.7]">
                        {solution.capability}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[rgba(198, 162, 74,0.20)]">
                      <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#6B7280]">
                        Operational Value
                      </p>
                      <p className="text-sm text-[#202124] leading-[1.7] font-medium">
                        {solution.value}
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Button variant="red" size="lg" className="text-base">
              Explore Solutions in Detail
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
