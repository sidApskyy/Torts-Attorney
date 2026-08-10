'use client'

import { Button } from '@/components/ui/button'
import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 'campaign-strategy',
    title: 'Campaign Strategy',
    description: 'Strategic campaign planning, media strategy, and operational design tailored to your firm\'s capacity and acquisition goals.',
    href: '/solutions/campaign-strategy',
  },
  {
    id: 'media-acquisition',
    title: 'Media & Traffic Acquisition',
    description: 'Media buying, campaign deployment, and channel optimization across multiple platforms to drive qualified plaintiff leads.',
    href: '/solutions/media-acquisition',
  },
  {
    id: 'lead-response',
    title: 'Lead Response & Intake',
    description: 'Rapid lead response management, structured intake operations, and campaign-specific qualification workflows.',
    href: '/solutions/lead-response',
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification',
    description: 'Comprehensive lead qualification, screening, and dispositioning based on campaign criteria and firm requirements.',
    href: '/solutions/lead-qualification',
  },
  {
    id: 'documentation',
    title: 'Documentation & Compliance',
    description: 'Document collection, review, and management throughout the qualification process with compliance oversight.',
    href: '/solutions/documentation',
  },
  {
    id: 'retainer-optimization',
    title: 'Retainer & Conversion Optimization',
    description: 'Retainer workflow support, document completion tracking, signature management, and conversion optimization.',
    href: '/solutions/retainer-optimization',
  },
  {
    id: 'delivery',
    title: 'Delivery & Lead Distribution',
    description: 'Qualified case delivery with complete documentation, attribution data, and seamless integration with your systems.',
    href: '/solutions/delivery',
  },
  {
    id: 'reporting',
    title: 'Reporting & Campaign Intelligence',
    description: 'Transparent performance reporting, metrics tracking, operational visibility, and campaign intelligence dashboards.',
    href: '/solutions/reporting',
  },
]

export function SolutionsClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-20 md:py-32 overflow-hidden">
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
                Acquisition Solutions
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Complete Plaintiff Acquisition Systems
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                We don't simply generate leads. We build and operate plaintiff acquisition systems that connect every stage from strategy through optimization.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                  Build Your Acquisition System
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="bg-[#F5F7FA] py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6"
              >
                The Problem with Lead-Only Approaches
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-[#4B5563] leading-relaxed mb-8"
              >
                Most plaintiff acquisition services focus on generating leads. But lead volume is not the finish line. Value is created—or lost—in the stages after the lead arrives.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Response delays',
                  'Intake bottlenecks',
                  'Qualification gaps',
                  'Documentation issues',
                  'Retainer drop-off',
                  'Poor visibility',
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] p-4 rounded-lg card-premium-hover"
                  >
                    <p className="text-sm font-medium text-[#202124]">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Architecture */}
        <section className="bg-[#F8F8F6] py-20 md:py-28 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-4">
                  Connected Acquisition Architecture
                </h2>
                <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto">
                  Our solutions connect across the entire acquisition lifecycle, creating a continuous operating system for plaintiff acquisition.
                </p>
              </motion.div>

              <LifecycleSystem variant="full" interactive={true} />
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="bg-[#F1F3F5] py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-4">
                  Acquisition Solutions
                </h2>
                <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto">
                  Comprehensive solutions across every stage of the plaintiff acquisition lifecycle.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="border-l-2 border-[rgba(32, 33, 36,0.28)] pl-6 hover:border-[#C6A24A] transition-colors"
                  >
                    <h3 className="font-serif text-lg font-semibold text-[#202124] mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <a
                      href={solution.href}
                      className="text-sm text-[#C6A24A] hover:text-[#202124] transition-colors"
                    >
                      Learn more →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F7FA] py-20 md:py-28 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6"
              >
                Build Your Acquisition System
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-8"
              >
                Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals and capacity.
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
