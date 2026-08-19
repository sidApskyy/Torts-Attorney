'use client'

import { Button } from '@/components/ui/button'
import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { WordReveal } from '@/components/ui/word-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'

const solutions = [
  {
    id: 'campaign-strategy',
    title: 'Campaign Strategy',
    description: 'Strategic campaign planning, media strategy, and operational design tailored to your firm\'s capacity and acquisition goals.',
    href: '/solutions/campaign-strategy',
  },
  {
    id: 'media-acquisition',
    title: 'Media & Traffic Acquisition',
    description: 'Media buying, campaign deployment, and channel optimization across multiple platforms to drive qualified plaintiff leads.',
    href: '/solutions/media-acquisition',
  },
  {
    id: 'lead-response',
    title: 'Lead Response & Intake',
    description: 'Rapid lead response management, structured intake operations, and campaign-specific qualification workflows.',
    href: '/solutions/lead-response',
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification',
    description: 'Comprehensive lead qualification, screening, and dispositioning based on campaign criteria and firm requirements.',
    href: '/solutions/lead-qualification',
  },
  {
    id: 'documentation',
    title: 'Documentation & Compliance',
    description: 'Document collection, review, and management throughout the qualification process with compliance oversight.',
    href: '/solutions/documentation',
  },
  {
    id: 'retainer-optimization',
    title: 'Retainer & Conversion Optimization',
    description: 'Retainer workflow support, document completion tracking, signature management, and conversion optimization.',
    href: '/solutions/retainer-optimization',
  },
  {
    id: 'delivery',
    title: 'Delivery & Lead Distribution',
    description: 'Qualified case delivery with complete documentation, attribution data, and seamless integration with your systems.',
    href: '/solutions/delivery',
  },
  {
    id: 'reporting',
    title: 'Reporting & Campaign Intelligence',
    description: 'Transparent performance reporting, metrics tracking, operational visibility, and campaign intelligence dashboards.',
    href: '/solutions/reporting',
  },
]

export function SolutionsClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Architectural grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          {/* Ambient orbs */}
          <div className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }} />
          <div className="absolute bottom-[5%] right-[10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)', animationDelay: '4s' }} />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px bg-[#C6A24A]"
                />
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A]">
                  Acquisition Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
              >
                <WordReveal text="Complete Plaintiff Acquisition Systems" delay={0.15} />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-[1.7] mb-10"
              >
                We don't simply generate leads. We build and operate plaintiff acquisition systems that connect every stage from strategy through optimization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact">
                  <MagneticButton strength={0.25} className="rounded-full">
                    <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                      Build Your Acquisition System
                    </Button>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Problem Framing */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 section-heading-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#C6A24A]" />
                  <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    The Problem
                  </p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      The Problem with Lead-Only Approaches
                    </GradientText>
                  </TextReveal>
                </h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-8"
              >
                Most plaintiff acquisition services focus on generating leads. But lead volume is not the finish line. Value is created—or lost—in the stages after the lead arrives.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Response delays',
                  'Intake bottlenecks',
                  'Qualification gaps',
                  'Documentation issues',
                  'Retainer drop-off',
                  'Poor visibility',
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card bg-[#F1F3F5] border border-[rgba(198, 162, 74, 0.15)] p-4 rounded-xl card-premium-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C6A24A] to-transparent" />
                    <p className="text-sm font-medium text-[#202124]">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Solution Architecture */}
        <section className="bg-[#F8F8F6] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold">
          <SectionNumber number="02" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 section-heading-glow">
                <motion.div
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
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Architecture
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Connected Acquisition Architecture
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  Our solutions connect across the entire acquisition lifecycle, creating a continuous operating system for plaintiff acquisition.
                </motion.p>
              </div>

              <LifecycleSystem variant="full" interactive={true} />
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Solution Categories */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <SectionNumber number="03" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/4 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/3 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#F8F8F6] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '7s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 section-heading-glow">
                <motion.div
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
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Solutions
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Acquisition Solutions
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  Comprehensive solutions across every stage of the plaintiff acquisition lifecycle.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,248,246,0.95))"
                      borderRadius="16px"
                      borderColor="rgba(198, 162, 74, 0.25)"
                      glareColor="#C6A24A"
                      glareOpacity={0.15}
                      glareAngle={-30}
                      glareSize={250}
                      transitionDuration={800}
                      className="glass-card"
                      style={{ padding: '1.5rem', position: 'relative', boxSizing: 'border-box' }}
                    >
                      <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-7 h-7 rounded-lg bg-[#C6A24A]/10 flex items-center justify-center border border-[#C6A24A]/20">
                            <span className="text-[#C6A24A] font-serif text-xs font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#202124] mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-[#4B5563] leading-[1.7] mb-4 flex-1">
                          {solution.description}
                        </p>
                        <a
                          href={solution.href}
                          className="text-sm text-[#C6A24A] hover:text-[#202124] transition-colors inline-flex items-center gap-1 group"
                        >
                          Learn more
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold">
          {/* Ambient glow orbs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/20 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="content-card p-6 sm:p-12 md:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent rounded-t-xl" />
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Build Your Acquisition System
                    </GradientText>
                  </TextReveal>
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-10 leading-[1.7]"
                >
                  Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals and capacity.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex justify-center"
                >
                  <Link href="/contact">
                    <MagneticButton strength={0.25} className="rounded-full">
                      <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                        Schedule a Consultation
                      </Button>
                    </MagneticButton>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
