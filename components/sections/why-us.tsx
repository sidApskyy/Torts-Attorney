'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { ImageReveal } from '@/components/ui/image-reveal'
import { FlowingMenu, type FlowingMenuItem } from '@/components/ui/flowing-menu'

export function WhyUs() {
  const imageRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const differentiators: FlowingMenuItem[] = [
    {
      label: '01',
      title: 'Campaign-Specific Operating Plans',
      description: 'Every campaign has its own criteria, timing, exclusions, documentation and operational constraints.',
    },
    {
      label: '02',
      title: 'Transparent Dispositioning',
      description: 'A useful system should show why a record advanced, stalled, fell out or requires review.',
    },
    {
      label: '03',
      title: 'Capacity-Aware Scaling',
      description: 'Traffic should not outrun the intake team, documentation process or receiving firm\'s ability to work the opportunity.',
    },
    {
      label: '04',
      title: 'Downstream Optimization',
      description: 'The cheapest lead is not automatically the best lead. When downstream outcomes are available, they should influence campaign decisions.',
    },
    {
      label: '05',
      title: 'Flexible Delivery',
      description: 'Programs can be structured around lead delivery, qualified opportunity, document-complete workflow or signed-retainer workflow, depending on the engagement.',
    },
    {
      label: '06',
      title: 'Human Accountability',
      description: 'Automation improves consistency and speed. People still handle judgment, exceptions and quality review.',
    },
  ]

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="why-us-heading">
      {/* Background section number */}
      <SectionNumber number="05" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />

      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
              Built Around Plaintiff-Side Reality
            </p>
            <h2 id="why-us-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
              <TextReveal as="span" delay={0.1}>
                <GradientText animationSpeed={5}>
                  Why The Torts Attorney
                </GradientText>
              </TextReveal>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              Acquisition is only one part of the job. We build around what follows.
            </p>
          </motion.div>

          {/* Full-width architectural panorama */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 relative w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(32,33,36,0.15)] group"
            style={{ aspectRatio: '16/9' }}
          >
            <ImageReveal direction="bottom" delay={0.2} className="absolute inset-0">
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : imageY }}
              className="absolute inset-0"
            >
              <Image
                src="/image 3.png"
                alt="Grand classical law library interior"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            </ImageReveal>
            {/* Subtle gold tint overlay — top */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#C6A24A]/8 via-transparent to-transparent pointer-events-none" />
            {/* Bottom fade for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F6]/40 via-transparent to-transparent pointer-events-none" />
            {/* Inner border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C6A24A]/15 pointer-events-none" />
          </motion.div>

          {/* Differentiators — FlowingMenu: titles stay visible, descriptions flow on hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="content-card p-2 sm:p-4"
          >
            <FlowingMenu
              items={differentiators}
              speed={12}
              borderColor="rgba(198, 162, 74, 0.15)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
