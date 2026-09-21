'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { PageHero } from '@/components/layout/page-hero'
import { GoldBeam } from '@/components/ui/gold-beam'
import { MoltenMetal } from '@/components/ui/molten-metal'
import { Database, Briefcase, Plug, ShieldCheck, type LucideIcon } from 'lucide-react'

const systems = [
  {
    title: 'Campaign Systems',
    description: 'Campaign management, media buying, and performance tracking infrastructure.',
  },
  {
    title: 'Intake Systems',
    description: 'Lead response, intake workflows, and qualification management systems.',
  },
  {
    title: 'Qualification Systems',
    description: 'Lead qualification, screening, and dispositioning workflows.',
  },
  {
    title: 'CRM & Workflow',
    description: 'CRM integration, workflow automation, and case management connectivity.',
  },
  {
    title: 'Reporting Systems',
    description: 'Performance reporting, analytics, and campaign intelligence dashboards.',
  },
  {
    title: 'Integrations',
    description: 'Integration capabilities with existing systems and third-party platforms.',
  },
]

export function TechnologyClient() {
  return (
    <main>
        {/* Custom hero with cinematic molten metal background */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden" aria-label="Technology hero">
          {/* Molten metal shader — cinematic flowing background */}
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
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Technology</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-px bg-[#C6A24A]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 id="technology-heading" className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.02em] pb-2 text-[#202124]">
                  Acquisition Infrastructure
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mt-6 mb-8"
              >
                Technology infrastructure supporting plaintiff acquisition systems across campaign management, intake, qualification, and reporting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact">
                  <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198,162,74,0.16)] hover:shadow-[0_8px_30px_rgba(198,162,74,0.22)]">
                    Start a Conversation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Data Flow Architecture */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="data-flow-heading">
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
                    Data Flow Architecture
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="data-flow-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Data Flow Architecture
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
                  Data flows through connected systems from media response through case delivery and reporting.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card p-6 md:p-10 relative overflow-hidden bg-[#F1F3F5]">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/3 to-transparent pointer-events-none" />

                  {/* Desktop: horizontal flow */}
                  <div className="hidden lg:flex relative items-center justify-between gap-2">
                    {['Media Response', 'Intake', 'Qualification', 'Documentation', 'Delivery', 'Reporting'].map((stage, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="text-center"
                        >
                          <div className="px-3 py-3 rounded-xl bg-[#F8F8F6] border border-[#C6A24A]/20 shadow-sm min-w-[110px] relative overflow-hidden">
                            {/* Sequential shimmer sweep */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.8, repeatDelay: 3.5, ease: 'easeInOut' }}
                              style={{ background: 'linear-gradient(90deg, transparent, rgba(198,162,74,0.12), transparent)' }}
                            />
                            <p className="text-sm font-semibold text-[#202124] relative">{stage}</p>
                          </div>
                        </motion.div>
                        {index < 5 && (
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 'auto', opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                            className="flex items-center"
                          >
                            <div className="w-8 h-0.5 bg-gradient-to-r from-[#C6A24A] to-[#9B7830]" />
                            <span className="text-[#C6A24A] text-lg ml-0.5">→</span>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile + tablet: vertical flow */}
                  <div className="lg:hidden flex flex-col gap-3 relative pl-8">
                    {/* Vertical connector line */}
                    <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#C6A24A] via-[#C6A24A]/40 to-transparent" />
                    {['Media Response', 'Intake', 'Qualification', 'Documentation', 'Delivery', 'Reporting'].map((stage, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {/* Node on the line */}
                        <div className="absolute left-[-20px] w-3 h-3 rounded-full bg-[#C6A24A] border-2 border-[#F1F3F5] shadow-[0_0_8px_rgba(198,162,74,0.3)]" />
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1"
                        >
                          <div className="px-4 py-3 rounded-xl bg-[#F8F8F6] border border-[#C6A24A]/20 shadow-sm relative overflow-hidden">
                            {/* Sequential shimmer sweep */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.8, repeatDelay: 3.5, ease: 'easeInOut' }}
                              style={{ background: 'linear-gradient(90deg, transparent, rgba(198,162,74,0.12), transparent)' }}
                            />
                            <p className="text-sm font-semibold text-[#202124] relative">{stage}</p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Systems */}
        <section className="bg-[#F8F8F6] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="systems-heading">
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
                    Acquisition Systems
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="systems-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Acquisition Systems
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
                  Integrated systems supporting the complete plaintiff acquisition lifecycle.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systems.map((system, index) => (
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
                          {system.title}
                        </h3>
                        <p className="text-base text-[#4B5563] leading-[1.7]">
                          {system.description}
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

        {/* Integrations Note */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="integrations-heading">
          <SectionNumber number="03" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#F8F8F6] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
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
                    Connectivity
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="integrations-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Integration Capabilities
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
                  Integration capabilities may include connectivity with CRM systems, case management platforms, and third-party data providers. Specific integrations are configured based on your firm's existing technology stack and requirements.
                </motion.p>
              </div>

              {/* Integration category cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Database, title: 'CRM Systems', desc: 'Sync leads, contacts, and case data with your existing CRM workflow.' },
                  { icon: Briefcase, title: 'Case Management', desc: 'Connect with case management platforms for seamless handoff and tracking.' },
                  { icon: Plug, title: 'Data Providers', desc: 'Integrate third-party data sources for enrichment and verification.' },
                ].map((integration, i) => {
                  const Icon = integration.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -6 }}
                      className="group"
                    >
                      <div className="content-card p-6 h-full relative overflow-hidden transition-all duration-500 group-hover:border-[#C6A24A]/35 group-hover:shadow-[0_12px_40px_rgba(198,162,74,0.10)]">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C6A24A]/40 to-transparent transition-all duration-500 group-hover:h-1" />

                        {/* Shine sweep */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-[rgba(198,162,74,0.06)] to-transparent skew-x-[-20deg] transition-all duration-700 group-hover:left-[150%]" />
                        </div>

                        {/* Icon badge */}
                        <div className="w-12 h-12 rounded-xl bg-[#C6A24A]/10 border border-[#C6A24A]/20 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C6A24A]/15 group-hover:shadow-[0_0_20px_rgba(198,162,74,0.25)]">
                          <Icon className="w-5 h-5 text-[#C6A24A]" strokeWidth={1.5} />
                        </div>

                        <h3 className="font-serif text-lg font-bold text-[#202124] mb-2 transition-colors duration-300 group-hover:text-[#9B7830]">
                          {integration.title}
                        </h3>
                        <p className="text-sm text-[#4B5563] leading-[1.6]">
                          {integration.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Disclaimer card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card bg-[#F8F8F6] p-6 md:p-8 shadow-[0_8px_30px_rgba(32,33,36,0.22)] relative overflow-hidden max-w-3xl mx-auto"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C6A24A]/10 border border-[#C6A24A]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#C6A24A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">Verified Per Client</p>
                    <p className="text-base text-[#6B7280] leading-[1.7]">
                      Integration capabilities are verified and configured on a per-client basis. We do not claim specific technology partnerships without client verification.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="technology-cta">
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
                <h2 id="technology-cta" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[0.95] tracking-[-0.02em] overflow-hidden pb-2">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Discuss Your Technology Needs
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
                  Let's discuss how we can integrate with your existing technology stack.
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
                      Start a Conversation
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
