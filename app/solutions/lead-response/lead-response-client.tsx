'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function LeadResponseClient() {
  return (
    <main>
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
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A] mb-4">Solution</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202124] leading-tight mb-6">Lead Response & Intake</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8">Rapid lead response management, structured intake operations, and campaign-specific qualification workflows.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}><Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">Discuss Intake Operations</Button></motion.div>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F7FA] py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6 gold-accent-line">The Challenge</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#4B5563] leading-relaxed">Response delays and unstructured intake operations destroy lead value. Speed and structure are critical to converting leads into qualified cases.</motion.p>
            </div>
          </div>
        </section>
        <section className="bg-[#F1F3F5] py-20 md:py-28 section-glow-gold">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 section-heading-glow">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-4">What We Do</h2>
                <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto">We implement rapid response systems and structured intake operations to maximize lead conversion.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Rapid Response', description: 'Implement rapid lead response systems to minimize response time.' },
                  { title: 'Intake Workflows', description: 'Design campaign-specific intake workflows and qualification logic.' },
                  { title: 'Response Management', description: 'Manage lead response across channels with tracking and attribution.' },
                  { title: 'Qualification Screening', description: 'Implement initial qualification screening during intake.' },
                  { title: 'CRM Integration', description: 'Integrate intake operations with your CRM and case management systems.' },
                  { title: 'Performance Tracking', description: 'Track intake performance, response times, and conversion metrics.' },
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="content-card-accent p-6">
                    <h3 className="font-serif text-lg font-semibold text-[#202124] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F8F8F6] py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6">Optimize Your Intake Operations</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-8">Let's discuss how we can optimize your lead response and intake operations.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}><Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">Schedule a Consultation</Button></motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
