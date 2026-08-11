'use client'

import { LifecycleSystem } from '@/components/shared/lifecycle-system'
import { motion } from 'framer-motion'
import { MagicBento, type MagicBentoCardData } from '@/components/ui/magic-bento'

const lifecycleCards: MagicBentoCardData[] = [
  {
    label: '01',
    title: 'Strategy',
    description: 'Campaign planning, audience planning, creative direction and operational design built around the campaign\'s actual criteria.',
    featured: true,
    span: 'wide',
  },
  {
    label: '02',
    title: 'Media',
    description: 'Media deployment, channel optimization and budget decisions across search, social and display.',
  },
  {
    label: '03',
    title: 'Response',
    description: 'Lead capture, initial response management and rapid connection to intake operations.',
  },
  {
    label: '04',
    title: 'Intake',
    description: 'Campaign-specific questions, contact workflows and qualification logic designed around what the receiving firm needs.',
    featured: true,
    span: 'wide',
  },
  {
    label: '05',
    title: 'Qualification',
    description: 'Campaign-specific screening, dispositioning and escalation based on firm-approved criteria.',
  },
  {
    label: '06',
    title: 'Documentation',
    description: 'Document collection, e-signature routing and missing-information outreach throughout the qualification process.',
  },
  {
    label: '07',
    title: 'Retainer',
    description: 'Retainer workflow, completion tracking and status monitoring designed to reduce avoidable drop-off.',
    featured: true,
  },
  {
    label: '08',
    title: 'Delivery',
    description: 'Secure, structured delivery through agreed APIs, webhooks, SFTP or file-based workflows.',
  },
  {
    label: '09',
    title: 'Reporting',
    description: 'Transparent reporting on source, status, qualification, completion and delivery wherever the workflow provides data.',
  },
  {
    label: '10',
    title: 'Optimization',
    description: 'Media, creative, qualification, follow-up and budget decisions refined using verified downstream outcomes.',
    featured: true,
  },
]

export function AcquisitionLifecycleDetail() {
  return (
    <section className="bg-[#F5F7FA] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold">
      {/* Floating background orbs */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />
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
                See the Whole Pipeline
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
              From the first response to the <span className="text-[#C6A24A] font-bold">firm's next decision.</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
            >
              You may need qualified leads. You may need intake. You may need help moving eligible prospects through documentation and retainer workflow. Or you may need the entire acquisition operation connected. We can build around the part of the pipeline that needs attention — without losing sight of what happens next.
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
