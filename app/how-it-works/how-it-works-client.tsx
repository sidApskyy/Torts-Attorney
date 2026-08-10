'use client'

import { Button } from '@/components/ui/button'
import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'

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
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden" aria-labelledby="how-it-works-heading">
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
                Our Process
              </motion.p>
              
              <motion.h1
                id="how-it-works-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                How We Build Acquisition Systems
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                A systematic approach to building and operating plaintiff acquisition systems that drive qualified cases.
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

        {/* Lifecycle Connection */}
        <section className="bg-[#F5F7FA] py-24 md:py-32 " aria-labelledby="lifecycle-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 id="lifecycle-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Connected to the Acquisition Lifecycle
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  Our process connects to every stage of the plaintiff acquisition lifecycle.
                </p>
              </motion.div>

              <LifecycleSystem variant="full" interactive={true} />
            </div>
          </div>
        </section>

        {/* 7-Stage Process */}
        <section className="bg-[#F1F3F5] py-24 md:py-32" aria-labelledby="process-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 id="process-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  7-Stage Operating Model
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  From diagnosis through scale, we build and operate acquisition systems as continuous operating models.
                </p>
              </motion.div>

              <div className="space-y-12">
                {stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="border-l-4 border-[rgba(32, 33, 36,0.28)] pl-8 md:pl-12 hover:border-[#C6A24A] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                      <div className="md:w-1/4">
                        <span className="font-serif text-5xl md:text-6xl font-semibold text-[#C6A24A] leading-none">
                          {stage.number}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#202124] mt-4">
                          {stage.title}
                        </h3>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-8">
                          {stage.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-4">
                            <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What You See</p>
                            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">{stage.whatClientSees}</p>
                          </div>
                          <div className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-4">
                            <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What We Measure</p>
                            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">{stage.whatGetsMeasured}</p>
                          </div>
                          <div className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-4">
                            <p className="text-xs font-semibold text-[#C6A24A] mb-2 uppercase tracking-wider">What We Optimize</p>
                            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">{stage.whatGetsOptimized}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-20 md:py-28 " aria-labelledby="how-it-works-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                id="how-it-works-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6"
              >
                Start Building Your Acquisition System
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-8"
              >
                Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                  Schedule a Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
