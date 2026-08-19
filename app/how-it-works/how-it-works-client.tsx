'use client'

import { Button } from '@/components/ui/button'
import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { TiltCard } from '@/components/ui/tilt-card'
import { MagneticButton } from '@/components/ui/magnetic-button'

const stages = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'We assess your firm\'s acquisition operations, identify bottlenecks, and understand your goals and capacity.',
    whatClientSees: 'Operational assessment, gap analysis, and strategic recommendations.',
    whatGetsMeasured: 'Current acquisition economics, conversion rates, and operational capacity.',
    whatGetsOptimized: 'Strategy alignment and operational design.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We design a comprehensive acquisition system tailored to your firm\'s specific needs and market opportunity.',
    whatClientSees: 'System architecture, campaign strategy, and implementation roadmap.',
    whatGetsMeasured: 'Design feasibility, resource requirements, and projected ROI.',
    whatGetsOptimized: 'System design and campaign strategy.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We build the acquisition system including media campaigns, intake workflows, qualification processes, and reporting infrastructure.',
    whatClientSees: 'System implementation, integration setup, and team training.',
    whatGetsMeasured: 'Implementation progress, integration success, and team readiness.',
    whatGetsOptimized: 'Build process and implementation timeline.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We launch campaigns and begin driving qualified leads through your acquisition system.',
    whatClientSees: 'Campaign launch, initial lead flow, and system activation.',
    whatGetsMeasured: 'Lead volume, response times, and initial conversion rates.',
    whatGetsOptimized: 'Launch performance and initial campaign settings.',
  },
  {
    number: '05',
    title: 'Qualify',
    description: 'We manage qualification processes, document collection, and retainer workflows to convert leads into qualified cases.',
    whatClientSees: 'Lead qualification, document management, and retainer completion.',
    whatGetsMeasured: 'Qualification rates, document completion, and retainer conversion.',
    whatGetsOptimized: 'Qualification workflows and conversion processes.',
  },
  {
    number: '06',
    title: 'Optimize',
    description: 'We continuously analyze performance, identify optimization opportunities, and refine the acquisition system.',
    whatClientSees: 'Performance reports, optimization recommendations, and system refinements.',
    whatGetsMeasured: 'Acquisition economics, conversion rates, and ROI.',
    whatGetsOptimized: 'Campaign performance and system efficiency.',
  },
  {
    number: '07',
    title: 'Scale',
    description: 'We scale successful campaigns and expand acquisition systems to capture additional market opportunity.',
    whatClientSees: 'Campaign expansion, system scaling, and capacity growth.',
    whatGetsMeasured: 'Scaled performance, market penetration, and acquisition economics at scale.',
    whatGetsOptimized: 'Scale strategy and resource allocation.',
  },
]

export function HowItWorksClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden" aria-labelledby="how-it-works-heading">
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
                  Our Process
                </span>
              </motion.div>

              <motion.h1
                id="how-it-works-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]"
              >
                <GradientText animationSpeed={5}>
                  How We Build Acquisition Systems
                </GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-[1.7] mb-10"
              >
                A systematic approach to building and operating plaintiff acquisition systems that drive qualified cases.
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

        {/* Lifecycle Connection */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="lifecycle-heading">
          <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

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
                    Lifecycle
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="lifecycle-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Connected to the Acquisition Lifecycle
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
                  Our process connects to every stage of the plaintiff acquisition lifecycle.
                </motion.p>
              </div>

              <LifecycleSystem variant="full" interactive={true} />
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* 7-Stage Process */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="process-heading">
          <SectionNumber number="02" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
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
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Operating Model
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="process-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      7-Stage Operating Model
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
                  From diagnosis through scale, we build and operate acquisition systems as continuous operating models.
                </motion.p>
              </div>

              <div className="space-y-6">
                {stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <TiltCard
                      intensity={6}
                      className="glass-card bg-[#F8F8F6] border border-[rgba(198, 162, 74, 0.15)] rounded-2xl p-8 md:p-10 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />
                      <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="md:w-1/4">
                          <span className="font-serif text-5xl md:text-6xl font-bold text-[#C6A24A] leading-none">
                            {stage.number}
                          </span>
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mt-4">
                            {stage.title}
                          </h3>
                        </div>
                        <div className="md:w-3/4">
                          <p className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-8">
                            {stage.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border-l-2 border-[#C6A24A]/30 pl-4">
                              <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What You See</p>
                              <p className="text-sm md:text-base text-[#4B5563] leading-[1.7]">{stage.whatClientSees}</p>
                            </div>
                            <div className="border-l-2 border-[#C6A24A]/30 pl-4">
                              <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What We Measure</p>
                              <p className="text-sm md:text-base text-[#4B5563] leading-[1.7]">{stage.whatGetsMeasured}</p>
                            </div>
                            <div className="border-l-2 border-[#C6A24A]/30 pl-4">
                              <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What We Optimize</p>
                              <p className="text-sm md:text-base text-[#4B5563] leading-[1.7]">{stage.whatGetsOptimized}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="how-it-works-cta">
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
                <h2 id="how-it-works-cta" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Start Building Your Acquisition System
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
                  Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals.
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
