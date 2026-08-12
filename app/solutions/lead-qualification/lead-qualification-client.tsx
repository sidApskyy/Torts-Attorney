'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function LeadQualificationClient() {
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
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202124] leading-tight mb-6">Lead Qualification</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8">Comprehensive lead qualification, screening, and dispositioning based on campaign criteria and firm requirements.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}><Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">Discuss Qualification</Button></motion.div>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F7FA] py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6 gold-accent-line">The Challenge</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#4B5563] leading-relaxed">Without systematic qualification, firms waste resources on unqualified leads. Effective qualification processes improve conversion and reduce acquisition costs.</motion.p>
            </div>
          </div>
        </section>
        <section className="bg-[#F1F3F5] py-20 md:py-28 section-glow-gold">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 section-heading-glow">
                <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#202124] mb-4">What We Do</h2>
                <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto">We implement systematic qualification processes to identify and prioritize qualified leads.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Qualification Criteria', description: 'Define qualification criteria aligned with campaign objectives and firm requirements.' },
                  { title: 'Screening Workflows', description: 'Implement systematic screening workflows with automated and manual review.' },
                  { title: 'Disposition Management', description: 'Track lead disposition and qualification status through the funnel.' },
                  { title: 'Quality Scoring', description: 'Implement lead quality scoring based on qualification factors.' },
                  { title: 'Feedback Loops', description: 'Create feedback loops between qualification and media optimization.' },
                  { title: 'Performance Analytics', description: 'Track qualification rates, conversion metrics, and acquisition economics.' },
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
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-6">Optimize Your Qualification Process</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto mb-8">Let's discuss how we can optimize your lead qualification process.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}><Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">Schedule a Consultation</Button></motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
