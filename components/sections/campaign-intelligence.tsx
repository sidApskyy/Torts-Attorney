'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/status-badge'

const campaigns = [
  {
    name: 'Product Liability - Medical Device',
    category: 'Mass Tort',
    status: 'active' as const,
    lastReviewed: '2026-07-15',
    summary: 'Nationwide campaign targeting affected patients with documented medical device complications.',
  },
  {
    name: 'Pharmaceutical - Antidepressant',
    category: 'Mass Tort',
    status: 'limited' as const,
    lastReviewed: '2026-07-10',
    summary: 'Firm-specific campaign for qualified plaintiffs with documented adverse effects.',
  },
  {
    name: 'Personal Injury - Auto Accident',
    category: 'Personal Injury',
    status: 'active' as const,
    lastReviewed: '2026-07-18',
    summary: 'Regional campaign for auto accident victims with significant injuries.',
  },
]

export function CampaignIntelligence() {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <SectionNumber number="03" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 section-heading-glow">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">Dashboard</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="h-px bg-[#C6A24A]"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
            >
              <TextReveal as="span" delay={0.1}>
                <GradientText animationSpeed={5}>
                  Campaign Intelligence
                </GradientText>
              </TextReveal>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
            >
              Real-time visibility into campaign performance, qualification metrics, and acquisition economics. Track what matters across your entire portfolio.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlareHover
                  width="100%"
                  height="auto"
                  background="rgba(241, 243, 245, 0.90)"
                  borderColor="rgba(198, 162, 74, 0.20)"
                  glareColor="#C6A24A"
                  glareOpacity={0.08}
                  transitionDuration={700}
                  className="rounded-[20px]"
                >
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-[#202124] mb-1">{campaign.name}</h3>
                          <p className="text-xs text-[#6B7280]">{campaign.category}</p>
                        </div>
                        <StatusBadge status={campaign.status} />
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{campaign.summary}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-[rgba(32, 33, 36,0.28)]">
                        <p className="text-xs text-[#6B7280]">Last reviewed: {campaign.lastReviewed}</p>
                        <Button variant="gold-outline" size="sm" className="text-xs">View Details</Button>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-xs text-[#6B7280] italic">
              Sample campaigns for demonstration — not actual active campaigns
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <Link href="/campaign-intelligence">
              <MagneticButton strength={0.25} className="rounded-full">
                <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                  Explore Campaign Intelligence
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
