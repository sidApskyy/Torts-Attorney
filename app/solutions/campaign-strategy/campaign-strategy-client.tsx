'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CampaignStrategyClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden">
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
                Solution
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Campaign Strategy
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Strategic campaign planning, media strategy, and operational design tailored to your firm's capacity and acquisition goals.
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

        {/* Problem */}
        <section className="bg-[#F5F7FA] py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8 gold-accent-line"
              >
                The Challenge
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] leading-relaxed"
              >
                Many firms approach plaintiff acquisition without a clear strategy—focusing on lead volume rather than acquisition economics, campaign fit, or operational capacity. This leads to wasted spend, poor lead quality, and intake bottlenecks.
              </motion.p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-[#F1F3F5] py-24 md:py-32 section-glow-gold">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 section-heading-glow"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  What We Do
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  We develop comprehensive campaign strategies aligned with your firm's goals, capacity, and market opportunity.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Market Analysis',
                    description: 'Analyze market opportunity, competition, and acquisition economics for your target case types.',
                  },
                  {
                    title: 'Capacity Planning',
                    description: 'Assess your firm\'s intake capacity, qualification workflows, and retainer conversion capability.',
                  },
                  {
                    title: 'Media Strategy',
                    description: 'Develop media channel strategy, audience targeting, and budget allocation aligned with acquisition goals.',
                  },
                  {
                    title: 'Campaign Design',
                    description: 'Design campaign structure, qualification criteria, and operational workflows.',
                  },
                  {
                    title: 'Performance Modeling',
                    description: 'Model acquisition economics, conversion projections, and ROI scenarios.',
                  },
                  {
                    title: 'Risk Assessment',
                    description: 'Identify potential risks, compliance requirements, and operational constraints.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="content-card-accent p-6"
                  >
                    <h3 className="font-serif text-xl font-semibold text-[#202124] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lifecycle Connection */}
        <section className="bg-[#F1F3F5] py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Connected to the Acquisition Lifecycle
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563]">
                  Campaign Strategy is the foundation that informs every stage of the acquisition system.
                </p>
              </motion.div>

              <div className="bg-[#F8F8F6] border border-[rgba(32, 33, 36,0.28)] p-10 shadow-[0_8px_30px_rgba(32,33,36,0.22)] rounded-xl">
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F8F6] py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Develop Your Campaign Strategy
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Let's discuss how we can develop a campaign strategy tailored to your firm's goals and market opportunity.
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
