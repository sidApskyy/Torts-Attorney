'use client'

import { motion } from 'framer-motion'

export function Proof() {
  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="proof-heading">
      {/* Ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
              Let the Numbers Show the Work
            </p>
            <h2 id="proof-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Reporting should answer <span className="text-[#C6A24A] italic">questions, not create more.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              We connect source, intake, qualification, completion and delivery wherever the agreed workflow provides those data points.
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
                  What We Measure
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="content-card p-6">
                    <h4 className="font-medium text-[#C6A24A] mb-4 text-lg">Acquisition Metrics</h4>
                    <ul className="space-y-3 text-base text-[#4B5563]">
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per response</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Speed to first contact</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Contact rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Qualification rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Document completion rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Retainer-sent rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Retainer completion rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Fallout by reason</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Source performance</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Intake-agent performance</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Time in status</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Duplicate rate</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Conflict/rejection rate</span></li>
                    </ul>
                  </div>
                  <div className="content-card p-6">
                    <h4 className="font-medium text-[#C6A24A] mb-4 text-lg">Economic Metrics</h4>
                    <ul className="space-y-3 text-base text-[#4B5563]">
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per qualified opportunity</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Cost per completed retainer</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#C6A24A] mt-1">•</span><span>Creative performance</span></li>
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
                    Only metrics that the agreed campaign workflow and receiving firm allow us to verify are displayed. Verified case studies will be published with client permission and clearly defined measurement periods.
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
                      Verified Case Studies
                    </h3>
                    <p className="text-base text-[#4B5563] leading-[1.7]">
                      Verified case studies are being added as client permissions and measurement periods are confirmed. We do not fabricate results or use unverified claims.
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
