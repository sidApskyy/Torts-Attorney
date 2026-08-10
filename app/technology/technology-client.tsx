'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden" aria-labelledby="technology-heading">
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
                Technology
              </motion.p>
              
              <motion.h1
                id="technology-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Acquisition Infrastructure
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Technology infrastructure supporting plaintiff acquisition systems across campaign management, intake, qualification, and reporting.
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

        {/* Data Flow Architecture */}
        <section className="bg-[#F5F7FA] py-24 md:py-32" aria-labelledby="data-flow-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 id="data-flow-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Data Flow Architecture
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  Data flows through connected systems from media response through case delivery and reporting.
                </p>
              </motion.div>

              <div className="bg-[#F1F3F5] border-l-4 border-[#C6A24A] p-8 md:p-12 shadow-premium">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  {['Media Response', 'Intake', 'Qualification', 'Documentation', 'Delivery', 'Reporting'].map((stage, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm md:text-base font-semibold text-[#202124]">{stage}</p>
                      </div>
                      {index < 5 && <div className="hidden md:block w-16 h-0.5 bg-[rgba(32, 33, 36,0.28)]" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="bg-[#F8F8F6] py-24 md:py-32 " aria-labelledby="systems-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 id="systems-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Acquisition Systems
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  Integrated systems supporting the complete plaintiff acquisition lifecycle.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {systems.map((system, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-6 hover:border-[#C6A24A] transition-colors"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#202124] mb-3">
                      {system.title}
                    </h3>
                    <p className="text-base text-[#4B5563] leading-relaxed">
                      {system.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Note */}
        <section className="bg-[#F1F3F5] py-24 md:py-32" aria-labelledby="integrations-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 id="integrations-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8">
                  Integration Capabilities
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] mb-10">
                  Integration capabilities may include connectivity with CRM systems, case management platforms, and third-party data providers. Specific integrations are configured based on your firm's existing technology stack and requirements.
                </p>
                <div className="bg-[#F8F8F6] border-l-4 border-[#C6A24A] p-8 md:p-10 shadow-[0_8px_30px_rgba(32,33,36,0.22)]">
                  <p className="text-base text-[#6B7280] text-center leading-relaxed">
                    Integration capabilities are verified and configured on a per-client basis. We do not claim specific technology partnerships without client verification.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-24 md:py-32 " aria-labelledby="technology-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                id="technology-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Discuss Your Technology Needs
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Let's discuss how we can integrate with your existing technology stack.
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
