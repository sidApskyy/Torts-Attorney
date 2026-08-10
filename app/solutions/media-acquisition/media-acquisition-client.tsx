'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function MediaAcquisitionClient() {
  return (
    <main>
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
                Media & Traffic Acquisition
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Media buying, campaign deployment, and channel optimization across multiple platforms to drive qualified plaintiff leads.
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
                Media buying without strategy leads to wasted spend and poor lead quality. Effective plaintiff acquisition requires channel strategy, audience targeting, and continuous optimization aligned with campaign goals.
              </motion.p>
            </div>
          </div>
        </section>

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
                  We execute media campaigns across multiple channels with continuous optimization for lead quality and acquisition economics.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Channel Strategy', description: 'Develop media channel strategy aligned with campaign objectives and target audience.' },
                  { title: 'Media Buying', description: 'Execute media buying across search, display, social, and programmatic channels.' },
                  { title: 'Audience Targeting', description: 'Define and optimize audience segments for qualified plaintiff acquisition.' },
                  { title: 'Creative Development', description: 'Develop campaign creative optimized for response and qualification.' },
                  { title: 'Performance Optimization', description: 'Continuously optimize campaigns for lead quality, cost, and conversion.' },
                  { title: 'Budget Management', description: 'Manage media budgets with real-time allocation and performance tracking.' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="content-card-accent p-6"
                  >
                    <h3 className="font-serif text-xl font-semibold text-[#202124] mb-4">{item.title}</h3>
                    <p className="text-base text-[#4B5563] leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F6] py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Optimize Your Media Acquisition
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Let's discuss how we can optimize your media acquisition for better lead quality and acquisition economics.
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
