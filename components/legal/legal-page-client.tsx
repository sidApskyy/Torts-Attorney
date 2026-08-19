'use client'

import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'

export interface LegalSection {
  heading: string
  paragraphs: string[]
}

interface LegalPageClientProps {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPageClient({ title, lastUpdated, sections }: LegalPageClientProps) {
  return (
    <main className="bg-[#F8F8F6] min-h-screen">
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
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
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Legal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[0.95] tracking-[-0.02em] overflow-hidden"
            >
              <GradientText animationSpeed={5}>
                {title}
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-[#6B7280] mb-12"
            >
              Last updated: {lastUpdated}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[20px] border border-[rgba(198, 162, 74, 0.25)] p-6 mb-12"
            >
              <p className="text-sm text-[#4B5563] leading-relaxed">
                <strong className="text-[#202124]">Disclaimer:</strong> This {title.toLowerCase()} is provided for informational purposes only and does not constitute legal advice. The Torts Attorney is not a law firm and does not provide legal representation. You should consult with qualified legal counsel to ensure this policy meets your specific regulatory and compliance requirements.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base text-[#4B5563] leading-[1.8] mb-4">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-[#E4E1D8]"
            >
              <p className="text-sm text-[#6B7280]">
                Questions about this {title.toLowerCase()}? Contact us at{' '}
                <a href="mailto:hello@thetortsattorney.com" className="text-[#C6A24A] hover:text-[#9B7830] transition-colors">
                  hello@thetortsattorney.com
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
