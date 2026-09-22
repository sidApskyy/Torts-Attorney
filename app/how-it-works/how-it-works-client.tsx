'use client'

import { Button } from '@/components/ui/button'
import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { TiltCard } from '@/components/ui/tilt-card'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { MoltenMetal } from '@/components/ui/molten-metal'
import { PageHero } from '@/components/layout/page-hero'
import {
  Stethoscope,
  PencilRuler,
  Hammer,
  Rocket,
  CheckCircle,
  TrendingUp,
  Maximize,
  Eye,
  Ruler,
  Cog,
  type LucideIcon,
} from 'lucide-react'

const stages: Array<{
  number: string
  title: string
  icon: LucideIcon
  description: string
  whatClientSees: string
  whatGetsMeasured: string
  whatGetsOptimized: string
}> = [
  {
    number: '01',
    title: 'Diagnose',
    icon: Stethoscope,
    description: 'We assess your firm\'s acquisition operations, identify bottlenecks, and understand your goals and capacity.',
    whatClientSees: 'Operational assessment, gap analysis, and strategic recommendations.',
    whatGetsMeasured: 'Current acquisition economics, conversion rates, and operational capacity.',
    whatGetsOptimized: 'Strategy alignment and operational design.',
  },
  {
    number: '02',
    title: 'Design',
    icon: PencilRuler,
    description: 'We design a comprehensive acquisition system tailored to your firm\'s specific needs and market opportunity.',
    whatClientSees: 'System architecture, campaign strategy, and implementation roadmap.',
    whatGetsMeasured: 'Design feasibility, resource requirements, and projected ROI.',
    whatGetsOptimized: 'System design and campaign strategy.',
  },
  {
    number: '03',
    title: 'Build',
    icon: Hammer,
    description: 'We build the acquisition system including media campaigns, intake workflows, qualification processes, and reporting infrastructure.',
    whatClientSees: 'System implementation, integration setup, and team training.',
    whatGetsMeasured: 'Implementation progress, integration success, and team readiness.',
    whatGetsOptimized: 'Build process and implementation timeline.',
  },
  {
    number: '04',
    title: 'Launch',
    icon: Rocket,
    description: 'We launch campaigns and begin driving qualified leads through your acquisition system.',
    whatClientSees: 'Campaign launch, initial lead flow, and system activation.',
    whatGetsMeasured: 'Lead volume, response times, and initial conversion rates.',
    whatGetsOptimized: 'Launch performance and initial campaign settings.',
  },
  {
    number: '05',
    title: 'Qualify',
    icon: CheckCircle,
    description: 'We manage qualification processes, document collection, and retainer workflows to convert leads into qualified cases.',
    whatClientSees: 'Lead qualification, document management, and retainer completion.',
    whatGetsMeasured: 'Qualification rates, document completion, and retainer conversion.',
    whatGetsOptimized: 'Qualification workflows and conversion processes.',
  },
  {
    number: '06',
    title: 'Optimize',
    icon: TrendingUp,
    description: 'We continuously analyze performance, identify optimization opportunities, and refine the acquisition system.',
    whatClientSees: 'Performance reports, optimization recommendations, and system refinements.',
    whatGetsMeasured: 'Acquisition economics, conversion rates, and ROI.',
    whatGetsOptimized: 'Campaign performance and system efficiency.',
  },
  {
    number: '07',
    title: 'Scale',
    icon: Maximize,
    description: 'We scale successful campaigns and expand acquisition systems to capture additional market opportunity.',
    whatClientSees: 'Campaign expansion, system scaling, and capacity growth.',
    whatGetsMeasured: 'Scaled performance, market penetration, and acquisition economics at scale.',
    whatGetsOptimized: 'Scale strategy and resource allocation.',
  },
]

export function HowItWorksClient() {
  return (
    <main>
        <PageHero
          eyebrow="Our Process"
          background={
            <>
              {/* Molten metal shader — same cinematic background as the technology page */}
              <div className="absolute inset-0" aria-hidden>
                <MoltenMetal
                  color1="#0A0A0A"
                  color2="#1A1A1F"
                  color3="#000000"
                  speed={0.25}
                  scale={4}
                  detail={5}
                  glow={1.2}
                  coreSize={0.18}
                  swirl={1.2}
                  fold={-0.4}
                  blackPoint={0.15}
                  brightness={0.9}
                  colorMode="molten"
                  grain={true}
                  grainIntensity={0.02}
                  mouseInteraction={true}
                  mouseStrength={0.3}
                  opacity={0.9}
                  className="absolute inset-0"
                />
                {/* Cream wash for readability */}
                <div className="absolute inset-0 bg-[rgba(248,248,246,0.3)]" />
              </div>

              {/* Ambient orbs */}
              <div
                className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
                style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
              />
              <div
                className="absolute bottom-[10%] right-[5%] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
                style={{ background: 'radial-gradient(circle, rgba(32, 33, 36, 0.04), transparent 70%)', animationDelay: '4s' }}
              />

              {/* Text backdrop — guarantees readability over any shader state */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(248,248,246,0.85) 0%, rgba(248,248,246,0.5) 50%, transparent 100%)',
                }}
              />
            </>
          }
          title={
            <h1 id="how-it-works-heading" className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.02em] text-[#202124]">
              How We Build Acquisition Systems
            </h1>
          }
          subtitle="A systematic approach to building and operating plaintiff acquisition systems that drive qualified cases."
          cta={
            <Link href="/contact">
              <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                Start a Conversation
              </Button>
            </Link>
          }
        />

        <div className="section-divider-animated" />

        {/* Lifecycle Connection */}
        <section className="bg-[#F5F7FA] pt-16 md:pt-20 lg:pt-24 pb-24 sm:pb-40 md:pb-44 lg:pb-48 relative overflow-hidden" aria-labelledby="lifecycle-heading">
          <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={20} />
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
                <h2 id="lifecycle-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
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
                <h2 id="process-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
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

              <div className="relative space-y-6">
                {/* Vertical pipeline connector — draws itself as you scroll */}
                <motion.div
                  className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C6A24A] via-[#C6A24A]/40 to-transparent origin-top pointer-events-none hidden sm:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />

                {stages.map((stage, index) => {
                  const Icon = stage.icon
                  const isLast = index === stages.length - 1
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                  >
                    {/* Pipeline node — sits on the connector line */}
                    <div className="absolute left-6 md:left-10 top-8 -translate-x-1/2 z-20 hidden sm:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: index * 0.08 + 0.3, duration: 0.4, ease: 'backOut' }}
                        className="w-4 h-4 rounded-full bg-[#C6A24A] border-2 border-[#F1F3F5] shadow-[0_0_12px_rgba(198,162,74,0.4)]"
                      />
                    </div>

                    <TiltCard
                      intensity={4}
                      className="glass-card bg-[#F8F8F6] border border-[rgba(198, 162, 74, 0.15)] rounded-2xl p-6 md:p-10 relative overflow-hidden sm:ml-16 transition-all duration-500 group-hover:border-[#C6A24A]/35 group-hover:shadow-[0_12px_40px_rgba(198,162,74,0.10)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />

                      {/* Shine sweep on hover */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-[rgba(198,162,74,0.06)] to-transparent skew-x-[-20deg] transition-all duration-700 group-hover:left-[150%]" />
                      </div>

                      <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Left: Icon + number + title */}
                        <div className="md:w-1/4 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                          {/* Icon badge */}
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C6A24A]/15 to-[#9B7830]/10 border border-[#C6A24A]/20 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C6A24A]/20 group-hover:shadow-[0_0_24px_rgba(198,162,74,0.25)] group-hover:-rotate-3">
                            <Icon className="w-6 h-6 text-[#C6A24A] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="font-serif text-4xl md:text-5xl font-bold text-[#C6A24A]/30 leading-none block transition-colors duration-500 group-hover:text-[#C6A24A]/50">
                              {stage.number}
                            </span>
                            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mt-2 transition-colors duration-300 group-hover:text-[#9B7830]">
                              {stage.title}
                            </h3>
                          </div>
                        </div>

                        {/* Right: Description + 3 columns */}
                        <div className="md:w-3/4">
                          <p className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-6">
                            {stage.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#F5F7FA] rounded-xl p-4 border border-[#C6A24A]/8 transition-all duration-300 group-hover:border-[#C6A24A]/20 group-hover:bg-[#F5F7FA]/80">
                              <div className="flex items-center gap-2 mb-2">
                                <Eye className="w-3.5 h-3.5 text-[#C6A24A]" strokeWidth={2} />
                                <p className="text-xs font-semibold text-[#C6A24A] uppercase tracking-wider">What You See</p>
                              </div>
                              <p className="text-sm text-[#4B5563] leading-[1.6]">{stage.whatClientSees}</p>
                            </div>
                            <div className="bg-[#F5F7FA] rounded-xl p-4 border border-[#C6A24A]/8 transition-all duration-300 group-hover:border-[#C6A24A]/20 group-hover:bg-[#F5F7FA]/80">
                              <div className="flex items-center gap-2 mb-2">
                                <Ruler className="w-3.5 h-3.5 text-[#C6A24A]" strokeWidth={2} />
                                <p className="text-xs font-semibold text-[#C6A24A] uppercase tracking-wider">What We Measure</p>
                              </div>
                              <p className="text-sm text-[#4B5563] leading-[1.6]">{stage.whatGetsMeasured}</p>
                            </div>
                            <div className="bg-[#F5F7FA] rounded-xl p-4 border border-[#C6A24A]/8 transition-all duration-300 group-hover:border-[#C6A24A]/20 group-hover:bg-[#F5F7FA]/80">
                              <div className="flex items-center gap-2 mb-2">
                                <Cog className="w-3.5 h-3.5 text-[#C6A24A]" strokeWidth={2} />
                                <p className="text-xs font-semibold text-[#C6A24A] uppercase tracking-wider">What We Optimize</p>
                              </div>
                              <p className="text-sm text-[#4B5563] leading-[1.6]">{stage.whatGetsOptimized}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                  )
                })}
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
                <h2 id="how-it-works-cta" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
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
                    <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
