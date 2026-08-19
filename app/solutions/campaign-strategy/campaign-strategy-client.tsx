'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

const capabilities = [
  { title: 'Market Analysis', description: 'Analyze market opportunity, competition, and acquisition economics for your target case types.' },
  { title: 'Capacity Planning', description: 'Assess your firm\'s intake capacity, qualification workflows, and retainer conversion capability.' },
  { title: 'Media Strategy', description: 'Develop media channel strategy, audience targeting, and budget allocation aligned with acquisition goals.' },
  { title: 'Campaign Design', description: 'Design campaign structure, qualification criteria, and operational workflows.' },
  { title: 'Performance Modeling', description: 'Model acquisition economics, conversion projections, and ROI scenarios.' },
  { title: 'Risk Assessment', description: 'Identify potential risks, compliance requirements, and operational constraints.' },
]

export function CampaignStrategyClient() {
  return (
    <main>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'Campaign Strategy' }]} />
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          <div className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }} />
          <div className="absolute bottom-[10%] right-[5%] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(32, 33, 36, 0.04), transparent 70%)', animationDelay: '4s' }} />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-px bg-[#C6A24A]"
                />
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Solution</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
              >
                <GradientText animationSpeed={5}>
                  Campaign Strategy
                </GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Strategic campaign planning, media strategy, and operational design tailored to your firm's capacity and acquisition goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

        {/* The Challenge */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px bg-[#C6A24A]"
                />
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">The Problem</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]"
              >
                <GradientText animationSpeed={5}>
                  The Challenge
                </GradientText>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] leading-relaxed"
              >
                Many firms approach plaintiff acquisition without a clear strategy—focusing on lead volume rather than acquisition economics, campaign fit, or operational capacity. This leads to wasted spend, poor lead quality, and intake bottlenecks.
              </motion.p>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* What We Do */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 section-glow-gold relative overflow-hidden">
          <SectionNumber number="02" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          <div className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#F8F8F6] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Capabilities</span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
                >
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      What We Do
                    </GradientText>
                  </TextReveal>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
                >
                  We develop comprehensive campaign strategies aligned with your firm's goals, capacity, and market opportunity.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <GlareHover
                      width="100%"
                      height="auto"
                      background="rgba(255, 255, 255, 0.80)"
                      borderColor="rgba(198, 162, 74, 0.20)"
                      glareColor="#C6A24A"
                      glareOpacity={0.08}
                      transitionDuration={700}
                      className="rounded-[20px]"
                    >
                      <div className="p-6">
                        <h3 className="font-serif text-lg font-semibold text-[#202124] mb-3">{item.title}</h3>
                        <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
                      </div>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Lifecycle Connection */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <SectionNumber number="03" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          <div className="absolute top-1/3 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Lifecycle</span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
                >
                  <GradientText animationSpeed={5}>
                    Connected to the Acquisition Lifecycle
                  </GradientText>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
                >
                  Campaign Strategy is the foundation that informs every stage of the acquisition system.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-[20px] border border-[rgba(198, 162, 74, 0.20)] p-10 shadow-[0_8px_30px_rgba(32,33,36,0.12)]"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#C6A24A]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-base font-semibold text-[#C6A24A]">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#202124] mb-2 text-lg">Strategy</h4>
                      <p className="text-base text-[#4B5563]">Campaign planning and media strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#C6A24A]/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-base font-semibold text-[#6B7280]">→</span>
                    </div>
                    <div>
                      <p className="text-base text-[#4B5563]">Informs media buying, intake workflows, qualification criteria, and performance targets</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* CTA */}
        <section className="bg-[#F8F8F6] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold">
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
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
              >
                <GradientText animationSpeed={5}>
                  Develop Your Campaign Strategy
                </GradientText>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                Let's discuss how we can develop a campaign strategy tailored to your firm's goals and market opportunity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact">
                  <MagneticButton strength={0.25} className="rounded-full">
                    <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                      Start a Conversation
                    </Button>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
