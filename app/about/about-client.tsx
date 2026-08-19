'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'

const principles = [
  {
    title: 'Acquisition Intelligence',
    description: 'We approach plaintiff acquisition as an intelligence-driven discipline, not a volume game.',
  },
  {
    title: 'Operational Systems',
    description: 'We build and operate acquisition systems, not just generate leads.',
  },
  {
    title: 'Transparency',
    description: 'We provide visibility into performance, economics, and operational metrics.',
  },
  {
    title: 'Measurement',
    description: 'We measure what matters: qualified cases, acquisition costs, and ROI.',
  },
  {
    title: 'Process',
    description: 'We follow systematic processes from strategy through optimization.',
  },
  {
    title: 'Technology',
    description: 'We leverage technology infrastructure to support acquisition operations.',
  },
]

export function AboutClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden" aria-labelledby="about-heading">
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
                  About
                </span>
              </motion.div>

              <motion.h1
                id="about-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]"
              >
                <GradientText animationSpeed={5}>
                  Plaintiff Acquisition Intelligence
                </GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-[1.7] mb-10"
              >
                We build and operate plaintiff acquisition systems for mass tort and personal injury firms. Our approach focuses on acquisition intelligence, operational systems, and measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact">
                  <MagneticButton strength={0.25} className="rounded-full">
                    <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                      Start a Conversation
                    </Button>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* What We Do */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="what-we-do-heading">
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
                    What We Do
                  </p>
                </div>
                <TextReveal as="h2" id="what-we-do-heading" delay={0.1} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-8 leading-[0.95] tracking-[-0.02em]">
                  <GradientText animationSpeed={5}>
                    What We Do
                  </GradientText>
                </TextReveal>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-10"
              >
                The Torts Attorney provides legal marketing and case-acquisition services to law firms. We help firms plan, launch, qualify, and track plaintiff-acquisition campaigns—from first response through signed-retainer workflow and delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card p-8 md:p-10 relative overflow-hidden bg-[#F1F3F5]">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/3 to-transparent pointer-events-none" />
                  <p className="text-base text-[#4B5563] leading-[1.7] relative">
                    <strong className="text-[#202124]">Important:</strong> The Torts Attorney is not a law firm and does not provide legal advice. We provide marketing and acquisition services to law firms.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Our Principles */}
        <section className="bg-[#F8F8F6] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="principles-heading">
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
                    Our Principles
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="principles-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Our Principles
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  The principles that guide our approach to plaintiff acquisition.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
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
                      borderRadius="20px"
                      borderColor="rgba(198, 162, 74, 0.25)"
                      glareColor="#C6A24A"
                      glareOpacity={0.18}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      className="glass-card"
                      style={{ padding: '2rem', position: 'relative', boxSizing: 'border-box' }}
                    >
                      <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-lg bg-[#C6A24A]/10 flex items-center justify-center border border-[#C6A24A]/20">
                            <span className="text-[#C6A24A] font-serif text-sm font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-[#C6A24A]/30 to-transparent" />
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-3">
                          {principle.title}
                        </h3>
                        <p className="text-base text-[#4B5563] leading-[1.7]">
                          {principle.description}
                        </p>
                      </div>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Placeholder Note */}
        <section className="bg-[#F1F3F5] py-12" aria-labelledby="placeholder-note">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F8F8F6] border-l-4 border-[#C6A24A] p-6 md:p-8 shadow-[0_8px_30px_rgba(32,33,36,0.22)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />
                <p id="placeholder-note" className="text-sm text-[#6B7280] text-center leading-[1.7] relative">
                  <strong className="text-[#202124]">Placeholder Content:</strong> Company history, team information, founding dates, and specific organizational details require client verification. This page will be updated with factual information upon client input.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="about-cta">
          {/* Ambient glow orbs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)' }}
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
                <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-6">
                  Work With Us
                </p>
                <h2 id="about-cta" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Work With Us
                    </GradientText>
                  </TextReveal>
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-12 leading-[1.7]"
                >
                  Let's discuss how we can build a plaintiff acquisition system for your firm.
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
                        Start a Conversation
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
