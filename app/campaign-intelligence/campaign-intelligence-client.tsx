'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const metrics = [
  { label: 'Campaign Spend', value: '$125,000', change: '+12%', positive: true },
  { label: 'Leads Generated', value: '2,847', change: '+8%', positive: true },
  { label: 'Qualification Rate', value: '67%', change: '+5%', positive: true },
  { label: 'Retainer Conversion', value: '42%', change: '+3%', positive: true },
]

const campaigns = [
  { name: 'Mass Tort A', status: 'Active', leads: 847, qualified: 567, retained: 234 },
  { name: 'Mass Tort B', status: 'Active', leads: 623, qualified: 412, retained: 178 },
  { name: 'Personal Injury C', status: 'Limited', leads: 377, qualified: 268, retained: 98 },
]

export function CampaignIntelligenceClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden" aria-labelledby="intelligence-heading">
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
                Campaign Intelligence
              </motion.p>
              
              <motion.h1
                id="intelligence-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Acquisition Command Center
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Campaign visibility, funnel monitoring, lead quality tracking, and operational intelligence for plaintiff acquisition.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="red" size="lg" className="text-base">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="bg-[#F1F3F5] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[#4B5563] text-center">
              Illustrative sample data — not actual company performance. This dashboard demonstrates the type of visibility and intelligence available.
            </p>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="bg-[#F1F3F5] py-24 md:py-32 section-glow-gold" aria-labelledby="dashboard-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 section-heading-glow"
              >
                <h2 id="dashboard-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Campaign Intelligence Dashboard
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  Real-time visibility into campaign performance, funnel metrics, and acquisition economics.
                </p>
              </motion.div>

              {/* Top Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="content-card p-8"
                  >
                    <p className="text-sm text-[#4B5563] mb-3">{metric.label}</p>
                    <p className="text-3xl font-semibold text-[#202124] mb-3">{metric.value}</p>
                    <p className={`text-base ${metric.positive ? 'text-[#C6A24A]' : 'text-[#B85C5C]'}`}>
                      {metric.change}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Campaign Table */}
              <div className="content-card-accent p-8">
                <h3 className="font-serif text-xl font-semibold text-[#202124] mb-8">Active Campaigns</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[rgba(32, 33, 36,0.28)]">
                        <th className="text-left text-sm font-semibold text-[#4B5563] pb-4">Campaign</th>
                        <th className="text-left text-sm font-semibold text-[#4B5563] pb-4">Status</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Leads</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Qualified</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Retained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign, index) => (
                        <tr key={index} className="border-b border-[rgba(32, 33, 36,0.28)] last:border-0">
                          <td className="py-4 text-sm text-[#202124]">{campaign.name}</td>
                          <td className="py-4">
                            <span className={`text-xs px-2 py-1 rounded ${
                              campaign.status === 'Active'
                                ? 'bg-[#C6A24A]/20 text-[#C6A24A]'
                                : 'bg-[#C6A24A]/20 text-[#C6A24A]'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.leads}</td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.qualified}</td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.retained}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-[#F1F3F5] py-20 md:py-28 section-glow-gold" aria-labelledby="capabilities-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 section-heading-glow"
              >
                <h2 id="capabilities-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Intelligence Capabilities
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                  Comprehensive visibility across the entire acquisition funnel.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Campaign Visibility', description: 'Real-time campaign performance and spend tracking.' },
                  { title: 'Funnel Monitoring', description: 'Monitor conversion through every acquisition stage.' },
                  { title: 'Lead Quality Analysis', description: 'Track lead quality and qualification metrics.' },
                  { title: 'Intake Performance', description: 'Monitor intake response times and throughput.' },
                  { title: 'Qualification Tracking', description: 'Track qualification rates and disposition.' },
                  { title: 'Retainer Analytics', description: 'Monitor retainer conversion and drop-off points.' },
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="content-card-accent p-6"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#202124] mb-3">{capability.title}</h3>
                    <p className="text-base text-[#4B5563] leading-relaxed">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F8F6] py-24 md:py-32" aria-labelledby="intelligence-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                id="intelligence-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Implement Campaign Intelligence
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Let's discuss how we can implement campaign intelligence for your acquisition operations.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
