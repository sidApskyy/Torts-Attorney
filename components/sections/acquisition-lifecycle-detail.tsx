'use client'

import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'
import { MagicBento, type MagicBentoCardData } from '@/components/ui/magic-bento'

const lifecycleCards: MagicBentoCardData[] = [
  {
    label: '01',
    title: 'Strategy',
    description: 'Campaign planning, media strategy, and operational design tailored to your firm\'s capacity and goals.',
    featured: true,
    span: 'wide',
  },
  {
    label: '02',
    title: 'Media',
    description: 'Media buying, campaign deployment, and channel optimization across multiple platforms.',
  },
  {
    label: '03',
    title: 'Response',
    description: 'Lead capture, initial response management, and rapid connection to intake operations.',
  },
  {
    label: '04',
    title: 'Intake',
    description: 'Structured intake operations with campaign-specific workflows and qualification logic.',
    featured: true,
    span: 'wide',
  },
  {
    label: '05',
    title: 'Qualification',
    description: 'Lead qualification, screening, and dispositioning based on campaign criteria.',
  },
  {
    label: '06',
    title: 'Documentation',
    description: 'Document collection, review, and management throughout the qualification process.',
  },
  {
    label: '07',
    title: 'Retainer',
    description: 'Retainer workflow support, document completion tracking, and signature management.',
    featured: true,
  },
  {
    label: '08',
    title: 'Delivery',
    description: 'Qualified case delivery with complete documentation and attribution data.',
  },
  {
    label: '09',
    title: 'Reporting',
    description: 'Transparent performance reporting, metrics tracking, and operational visibility.',
  },
  {
    label: '10',
    title: 'Optimization',
    description: 'Campaign optimization, downstream analysis, and continuous improvement of acquisition economics.',
    featured: true,
  },
]

export function AcquisitionLifecycleDetail() {
  return (
    <section className="bg-[#F5F7FA] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20 section-heading-glow">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A]">
                The System
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
            </motion.span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              The Complete <span className="text-[#C6A24A] font-bold">Acquisition Lifecycle</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
            >
              We don&apos;t simply generate leads. We build and operate plaintiff acquisition systems that connect every stage from strategy through optimization.
            </motion.p>
          </div>

          {/* Full lifecycle visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-24"
          >
            <LifecycleSystem variant="full" interactive={true} />
          </motion.div>

          {/* Stage explanations - MagicBento grid */}
          <MagicBento
            cards={lifecycleCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={350}
            particleCount={10}
            glowColor="239, 208, 155"
          />
        </div>
      </div>
    </section>
  )
}
