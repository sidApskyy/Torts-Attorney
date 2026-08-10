'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function FinalCTA() {
  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="final-cta-heading">
      {/* Subtle glow orbs */}
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
      />
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)' }}
      />

      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10 content-card p-12 md:p-16"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent rounded-t-xl" />
          {/* Headline */}
          <h2 id="final-cta-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-8 leading-[0.95] tracking-[-0.02em]">
            Let's Find Where Your Campaign Is <span className="text-[#C6A24A] italic">Losing Value</span>
          </h2>
          
          {/* Supporting copy */}
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-12 leading-[1.7]">
            Most campaigns lose value in the stages after the lead arrives. We help you identify where—and build systems to recover it.
          </p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="red" size="lg" className="w-full sm:w-auto text-base">
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
              Request a Campaign Review
            </Button>
          </motion.div>
          
          {/* Disclosure */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-sm text-[#6B7280]"
          >
            The Torts Attorney provides legal marketing and case-acquisition services to law firms. It is not a law firm and does not provide legal advice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
