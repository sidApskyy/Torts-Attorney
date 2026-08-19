'use client'

import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'

const areas = [
  { title: 'Docket Intelligence', description: 'Track emerging litigation, filing trends, and opportunity identification across mass tort and personal injury categories.' },
  { title: 'Acquisition Economics', description: 'Analyze cost structures, conversion metrics, and ROI across different campaign types and market segments.' },
  { title: 'Intake Operations', description: 'Benchmark intake performance, qualification rates, and operational efficiency against industry standards.' },
  { title: 'Compliance & Data', description: 'Stay informed on TCPA regulations, consent management, and data privacy requirements for acquisition operations.' },
  { title: 'Campaign Playbooks', description: 'Access operational frameworks, qualification criteria, and best practices for specific case types and markets.' },
]

export function GrowthIntelligence() {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
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
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Insights</span>
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
                  Plaintiff Growth Intelligence
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
              Beyond acquisition services, we provide operational insights to help firms make informed decisions about growth opportunities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map((area, index) => (
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
                    <h3 className="font-serif text-lg font-semibold text-[#202124] mb-3">{area.title}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{area.description}</p>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-[20px] border border-[rgba(198, 162, 74, 0.25)] p-8 md:p-12 text-center">
              <p className="font-serif text-xl md:text-2xl text-[#202124] leading-relaxed">
                We provide operational insights to help firms build acquisition systems that scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
