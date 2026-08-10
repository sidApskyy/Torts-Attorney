'use client'

import { motion } from 'framer-motion'

export function Proof() {
  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="proof-heading">
      {/* Ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <h2 id="proof-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Measuring Performance
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              We track the metrics that determine campaign success. Here's how we measure performance across the acquisition pipeline.
            </p>
          </motion.div>

          {/* Measurement framework */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="glass-card p-10 md:p-14 relative overflow-hidden bg-[#F1F3F5]">
                {/* Gold gradient accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-8 relative gold-accent-line">
                  Performance Metrics We Track
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="content-card p-6">
                    <h4 className="font-medium text-[#C6A24A] mb-4 text-lg">Acquisition Metrics</h4>
                    <ul className="space-y-3 text-base text-[#4B5563]">
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per response by source</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Contact rate and speed to contact</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Qualification rate by campaign</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Document completion rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Retainer completion rate</span></li>
                    </ul>
                  </div>
                  <div className="content-card p-6">
                    <h4 className="font-medium text-[#C6A24A] mb-4 text-lg">Economic Metrics</h4>
                    <ul className="space-y-3 text-base text-[#4B5563]">
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per qualified opportunity</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per completed retainer</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Time to retainer completion</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Source ROI analysis</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Campaign lifetime value</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card p-10 md:p-14 relative overflow-hidden bg-[#F1F3F5]">
                {/* Gold gradient accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830]" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-8 relative gold-accent-line">
                  How We Report
                </h3>
                <div className="space-y-6 text-base text-[#4B5563] leading-[1.7]">
                  <p>
                    We provide regular reporting that includes real-time dashboards, weekly performance summaries, and monthly deep-dive analyses. All reports include attribution data, qualification metrics, and economic analysis.
                  </p>
                  <p>
                    Our reporting is designed to answer the questions that matter: Where are we losing value? What's working? What needs optimization?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Client verification note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="content-card-accent p-10 md:p-14 relative overflow-hidden">
                {/* Subtle gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />

                <div className="flex items-start gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#C6A24A]/10 flex items-center justify-center">
                    <span className="text-[#C6A24A] font-semibold text-lg">NOTE</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-3">
                      Client Verification Required
                    </h3>
                    <p className="text-base text-[#4B5563] leading-[1.7]">
                      Case studies, testimonials, and specific performance results will be added here as they are verified with client permission. We do not fabricate results or use unverified claims.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
