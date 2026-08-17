'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Marquee } from '@/components/ui/marquee'

export function TrustStrip() {
  const capabilities = [
    {
      title: "Campaign-Specific Intake",
      description: "Tailored intake operations for each campaign's unique requirements"
    },
    {
      title: "Documented Source Tracking",
      description: "Complete attribution from initial response through delivery"
    },
    {
      title: "Consent-Aware Workflows",
      description: "Campaign workflows built around approved disclosures and documented consent"
    },
    {
      title: "CRM-Ready Delivery",
      description: "Structured delivery through agreed APIs, webhooks, SFTP or CRM integration"
    },
    {
      title: "Downstream Performance Visibility",
      description: "Track what happens after the lead arrives, not just the lead count"
    }
  ]

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none" />

      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#6B7280]"
        >
          Core Capabilities
        </motion.p>
      </div>

      <Marquee speed={25} className="py-2">
        {capabilities.map((capability, index) => (
          <MarqueeCard
            key={index}
            index={index}
            title={capability.title}
            description={capability.description}
          />
        ))}
      </Marquee>
    </section>
  )
}

function MarqueeCard({ index, title, description }: { index: number; title: string; description: string }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  return (
    <div
      className="relative h-44 w-72 shrink-0 cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-[24px] glass-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(198, 162, 74, 0.08), transparent 60%), rgba(255, 255, 255, 0.80)`,
          }}
        >
          <div className="w-11 h-11 mb-3 rounded-full bg-[#C6A24A]/15 flex items-center justify-center border border-[#C6A24A]/20">
            <span className="text-[#C6A24A] font-serif text-lg font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="font-serif text-base font-semibold text-[#202124] leading-snug">
            {title}
          </h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[24px] bg-[#F1F3F5] border border-[rgba(198, 162, 74,0.25)] p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_60px_rgba(32,33,36,0.22)]">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830] rounded-l-[24px]" />
          <p className="text-sm text-[#4B5563] leading-[1.7] relative">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
