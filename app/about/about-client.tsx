'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden" aria-labelledby="about-heading">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A] mb-4"
              >
                About
              </motion.p>
              
              <motion.h1
                id="about-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Plaintiff Acquisition Intelligence
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                We build and operate plaintiff acquisition systems for mass tort and personal injury firms. Our approach focuses on acquisition intelligence, operational systems, and measurable results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-[#F5F7FA] py-24 md:py-32" aria-labelledby="what-we-do-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                id="what-we-do-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                What We Do
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-10"
              >
                The Torts Attorney provides legal marketing and case-acquisition services to law firms. We help firms plan, launch, qualify, and track plaintiff-acquisition campaigns—from first response through signed-retainer workflow and delivery.
              </motion.p>
              
              <div className="bg-[#F1F3F5] border-l-4 border-[#C6A24A] p-8 md:p-10 shadow-premium">
                <p className="text-base text-[#4B5563] leading-relaxed">
                  <strong className="text-[#202124]">Important:</strong> The Torts Attorney is not a law firm and does not provide legal advice. We provide marketing and acquisition services to law firms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="bg-[#F8F8F6] py-24 md:py-32 " aria-labelledby="principles-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 id="principles-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Our Principles
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  The principles that guide our approach to plaintiff acquisition.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-6 hover:border-[#C6A24A] transition-colors"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#202124] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-base text-[#4B5563] leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Note */}
        <section className="bg-[#F1F3F5] py-12" aria-labelledby="placeholder-note">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#F8F8F6] border-l-4 border-[#C6A24A] p-6 md:p-8 shadow-[0_8px_30px_rgba(32,33,36,0.22)]">
                <p id="placeholder-note" className="text-sm text-[#6B7280] text-center leading-relaxed">
                  <strong className="text-[#202124]">Placeholder Content:</strong> Company history, team information, founding dates, and specific organizational details require client verification. This page will be updated with factual information upon client input.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-24 md:py-32 " aria-labelledby="about-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                id="about-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Work With Us
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Let's discuss how we can build a plaintiff acquisition system for your firm.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
