'use client'

import { motion } from 'framer-motion'

export function WhyUs() {
  const differentiators = [
    {
      title: 'Campaign-Specific Operating Plans',
      description: 'Every campaign has its own criteria, timing, exclusions, documentation and operational constraints.',
    },
    {
      title: 'Transparent Dispositioning',
      description: 'A useful system should show why a record advanced, stalled, fell out or requires review.',
    },
    {
      title: 'Capacity-Aware Scaling',
      description: 'Traffic should not outrun the intake team, documentation process or receiving firm\'s ability to work the opportunity.',
    },
    {
      title: 'Downstream Optimization',
      description: 'The cheapest lead is not automatically the best lead. When downstream outcomes are available, they should influence campaign decisions.',
    },
    {
      title: 'Flexible Delivery',
      description: 'Programs can be structured around lead delivery, qualified opportunity, document-complete workflow or signed-retainer workflow, depending on the engagement.',
    },
    {
      title: 'Human Accountability',
      description: 'Automation improves consistency and speed. People still handle judgment, exceptions and quality review.',
    },
  ]

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="why-us-heading">
      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
              Built Around Plaintiff-Side Reality
            </p>
            <h2 id="why-us-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Why <span className="text-[#C6A24A] italic">The Torts Attorney</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              Acquisition is only one part of the job. We build around what follows.
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
