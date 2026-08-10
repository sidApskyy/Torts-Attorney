'use client'

import { motion } from 'framer-motion'

export function WhyUs() {
  const differentiators = [
    {
      title: 'Campaign-Specific Operating Plans',
      description: 'Every campaign has a unique operating plan aligned to your firm\'s capacity, target markets, and acquisition goals—not a generic template.',
    },
    {
      title: 'Transparent Dispositioning',
      description: 'Clear visibility into why leads qualify or don\'t qualify, with documented reasons and audit trails for every decision.',
    },
    {
      title: 'Capacity-Aware Scaling',
      description: 'We scale campaigns based on your firm\'s actual intake capacity, ensuring quality doesn\'t suffer as volume increases.',
    },
    {
      title: 'Downstream Optimization',
      description: 'We optimize the entire pipeline—from response through retainer—not just lead generation at the top of the funnel.',
    },
    {
      title: 'Flexible Delivery',
      description: 'Delivery options tailored to your systems: API, webhooks, SFTP, or CRM integration with custom field mapping.',
    },
    {
      title: 'Human Accountability',
      description: 'Real people accountable for campaign performance, with dedicated support and clear escalation paths when issues arise.',
    },
  ]

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="why-us-heading">
      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <h2 id="why-us-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Why <span className="text-[#C6A24A] italic">The Torts Attorney</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              We build and operate acquisition systems rather than simply generating leads. These principles guide our approach.
            </p>
          </motion.div>

          {/* Differentiators - alternating slide-in with border-draw hover */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="content-card-accent pl-8 pr-6 py-6"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[#C6A24A] font-serif text-3xl font-bold shrink-0 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-[#202124] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
