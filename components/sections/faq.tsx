'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'

const faqs = [
  {
    question: 'How quickly can a campaign launch?',
    answer: 'Timelines depend on campaign scope, media channels, intake capacity and documentation requirements. After an initial scoping conversation, we provide a deployment estimate based on the agreed workflow and the firm\'s readiness.',
  },
  {
    question: 'Do you work with conflicts checking?',
    answer: 'Yes. Conflict checking is part of the intake workflow where the receiving firm requires it. We do not deliver records that have not cleared the agreed conflict process.',
  },
  {
    question: 'What jurisdictions do you support?',
    answer: 'We support campaigns across the United States. Campaign-specific restrictions, bar rules and state-level advertising requirements are addressed during campaign planning.',
  },
  {
    question: 'How do you handle consent and compliance?',
    answer: 'Campaign workflows are built around approved disclosures and documented consent. We follow the compliance framework agreed with the receiving firm and do not deploy campaigns without documented approvals.',
  },
  {
    question: 'Can you integrate with our existing CRM or case management system?',
    answer: 'Delivery can be structured through agreed APIs, webhooks, SFTP or direct CRM integration. We work with the receiving firm\'s technical team to configure the delivery method that fits their workflow.',
  },
  {
    question: 'What reporting do you provide?',
    answer: 'We provide regular reporting that includes real-time dashboards, weekly performance summaries and monthly deep-dive analyses. All reports include attribution data, qualification metrics and economic analysis where available.',
  },
  {
    question: 'Are you a law firm?',
    answer: 'No. The Torts Attorney provides legal marketing and case-acquisition services for plaintiff law firms and campaign partners. We are not a law firm and do not provide legal advice or legal representation.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Programs can be structured around lead delivery, qualified opportunity, document-complete workflow or signed-retainer workflow, depending on the engagement. Pricing is discussed during the initial scoping conversation.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background section number */}
      <SectionNumber number="08" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />

      {/* Ambient accents */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C6A24A]" />
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                Common Questions
              </p>
              <div className="h-px w-8 bg-[#C6A24A]" />
            </div>
            <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
              <TextReveal as="span" delay={0.1}>
                <GradientText animationSpeed={5}>
                  What firms ask before they engage.
                </GradientText>
              </TextReveal>
            </h2>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`content-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-[#C6A24A]/20' : ''}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#C6A24A]' : 'text-[#202124] group-hover:text-[#9B7830]'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C6A24A]' : 'bg-[#F1F3F5] group-hover:bg-[#C6A24A]/10'}`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#C6A24A]'}`}
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      >
                        <path d="M6 1h2v12H6V1zM1 6h12v2H1V6z" fill="currentColor" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 relative">
                          {/* Gold gradient fill background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C6A24A]/5 via-transparent to-transparent rounded-b-2xl pointer-events-none" />
                          <div className="h-px w-full bg-gradient-to-r from-[#C6A24A]/20 to-transparent mb-4" />
                          <p className="text-base text-[#4B5563] leading-[1.7] relative">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
