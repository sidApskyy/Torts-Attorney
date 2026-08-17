'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { GradientText } from '@/components/ui/gradient-text'

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
        className="absolute top-0 left-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
      />
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none"
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
          className="max-w-4xl mx-auto text-center relative z-10 content-card p-6 sm:p-12 md:p-16 overflow-hidden"
        >
          {/* Marble texture background at low opacity */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <Image
              src="/image 4.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent rounded-t-xl" />
          {/* Eyebrow */}
          <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-6">
            Where Is the Pipeline Losing Value?
          </p>
          {/* Headline */}
          <h2 id="final-cta-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[0.95] tracking-[-0.02em]">
            <GradientText animationSpeed={5}>
              Let's find the point where good opportunities are getting lost.
            </GradientText>
          </h2>
          
          {/* Supporting copy */}
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-12 leading-[1.7]">
            Bring us the campaign, acquisition problem, intake workflow or reporting challenge. We will map the current process, identify the gaps and determine whether there is a practical path to improve it.
          </p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <MagneticButton strength={0.25} className="rounded-full">
                <Button variant="red" size="lg" className="w-full sm:w-auto text-base">
                  Talk Through the Pipeline
                </Button>
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton strength={0.25} className="rounded-full">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  Send Us the Campaign
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>
          
          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-sm text-[#4B5563] max-w-xl mx-auto"
          >
            No inflated promises. No mystery metrics. Just a clearer view of the pipeline and what can be improved.
          </motion.p>
          
          {/* Disclosure */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-sm text-[#6B7280]"
          >
            The Torts Attorney provides legal marketing and case-acquisition services. We are not a law firm and do not provide legal advice or legal representation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
