'use client'

import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { TextReveal } from '@/components/ui/text-reveal'
import { AnimatedBorder } from '@/components/ui/animated-border'
import { SectionNumber } from '@/components/ui/section-number'
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel'

export function SocialProof() {
  const testimonials = [
    {
      quote: 'The intake process became structured and measurable. We stopped guessing and started optimizing.',
      attribution: 'Intake Director',
      context: 'National Mass Tort Program',
    },
    {
      quote: 'For the first time, we could see where opportunities were falling out — and do something about it.',
      attribution: 'Operations Partner',
      context: 'Personal Injury Firm',
    },
    {
      quote: 'Their reporting connected media spend to signed retainers. That changed how we allocate budget.',
      attribution: 'Marketing Director',
      context: 'Multi-State Campaign',
    },
  ]

  const stats = [
    { value: 34, suffix: '%', label: 'Average drop-off reduction', format: 'percent' as const },
    { value: 2.3, suffix: 'x', label: 'Faster intake-to-qualification', format: 'decimal' as const },
    { value: 18, suffix: '%', label: 'Improved retainer completion', format: 'percent' as const },
  ]

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background section number */}
      <SectionNumber number="07" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />

      {/* Ambient accents */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading — left-aligned with accent line */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C6A24A]" />
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                What Partners See
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] text-left max-w-3xl overflow-hidden">
              <TextReveal as="span" delay={0.1}>
                <GradientText animationSpeed={5}>
                  Results that show up in the pipeline.
                </GradientText>
              </TextReveal>
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="content-card p-8 text-center"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-[#C6A24A] mb-3 tabular-nums">
                  {stat.format === 'decimal' ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  ) : (
                    <AnimatedCounter value={stat.value} format={stat.format} />
                  )}
                </p>
                <p className="text-sm text-[#4B5563] leading-[1.5]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials — 3D coverflow carousel */}
          <div className="relative px-12">
            <TestimonialCarousel testimonials={testimonials} autoPlay={true} interval={5000} />
          </div>

          {/* Disclosure */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 text-center text-sm text-[#6B7280] italic"
          >
            Figures reflect anonymized aggregate observations across engagements. Individual results vary based on campaign scope, firm capacity and workflow configuration.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
