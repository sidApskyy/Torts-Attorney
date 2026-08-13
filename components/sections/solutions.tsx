'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { GlareHover } from '@/components/ui/glare-hover'
import { GradientText } from '@/components/ui/gradient-text'

export function Solutions() {
  const solutions = [
    {
      title: 'Campaign Strategy & Media',
      problem: 'Start with the audience the campaign is actually trying to reach.',
      capability: 'Campaign selection, audience planning, creative direction, landing-page strategy, media deployment and ongoing budget decisions built around the campaign\'s actual criteria.',
      value: 'Higher-quality responses that match your firm\'s operational capability.',
      cta: 'Explore Media Strategy',
      featured: true,
    },
    {
      title: 'Intake & Qualification',
      problem: 'Give the intake team something they can work with.',
      capability: 'Campaign-specific questions, contact workflows, qualification logic, disposition standards, escalation paths and follow-up designed around what the receiving firm actually needs.',
      value: 'Faster qualification, better dispositioning, and improved conversion rates.',
      cta: 'Explore Intake Operations',
      featured: false,
    },
    {
      title: 'Retainer Workflow',
      problem: 'Don\'t let a qualified opportunity sit still.',
      capability: 'Document follow-up, e-signature routing, missing-information outreach and status tracking designed to reduce avoidable drop-off between qualification and completion.',
      value: 'Higher retainer completion rates and faster time-to-signature.',
      cta: 'Explore Retainer Operations',
      featured: false,
    },
    {
      title: 'Lead Nurturing & Reactivation',
      problem: 'Some people need another conversation.',
      capability: 'Structured follow-up for unreachable, incomplete, undecided or document-pending prospects — with different paths for different situations.',
      value: 'Recovery of qualified opportunities and improved campaign economics.',
      cta: 'Explore Nurturing',
      featured: false,
    },
    {
      title: 'Reporting & Analytics',
      problem: 'Know what happened after the lead came in.',
      capability: 'Track source, response, contact, qualification, completion, delivery and fallout wherever the agreed workflow provides the necessary downstream data.',
      value: 'Data-driven optimization and clear visibility into campaign performance.',
      cta: 'Explore Reporting',
      featured: false,
    },
    {
      title: 'CRM & Workflow Integration',
      problem: 'Fit the delivery to your team\'s workflow.',
      capability: 'Secure, structured delivery through agreed APIs, webhooks, SFTP, email or file-based workflows, subject to technical validation and access.',
      value: 'Faster delivery, reduced errors, and automated workflow triggers.',
      cta: 'Explore Integrations',
      featured: false,
    },
  ]

  return (
    <section className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="solutions-heading">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />
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
              <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                What We Do
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
            </motion.span>
            <h2 id="solutions-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]">
              <GradientText animationSpeed={5}>
                Solutions Built for the Full Pipeline
              </GradientText>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
            >
              We can support one operating need or build the connected workflow from acquisition through delivery.
            </motion.p>
          </div>

          {/* 4 Key Solution Cards - 2x2 grid, all equal size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {solutions.slice(0, 4).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,248,246,0.95))"
                  borderRadius="20px"
                  borderColor="rgba(198, 162, 74, 0.25)"
                  glareColor="#C6A24A"
                  glareOpacity={0.18}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  className="glass-card"
                  style={{ padding: '1.5rem', position: 'relative', boxSizing: 'border-box' }}
                >
                  <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-[#202124] mb-5">
                      {solution.title}
                    </h3>
                    <div className="space-y-5">
                      <div>
                        <p className="text-base text-[#4B5563] leading-[1.7]">
                          {solution.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2 text-[#C6A24A]">
                          Our Capability
                        </p>
                        <p className="text-base text-[#4B5563] leading-[1.7]">
                          {solution.capability}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(198, 162, 74,0.20)]">
                        <p className="text-base text-[#202124] leading-[1.5] font-medium">
                          {solution.value}
                        </p>
                        <p className="text-sm text-[#C6A24A] font-medium mt-3">
                          {solution.cta} →
                        </p>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

          {/* 2 Secondary Solution Cards - compact row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {solutions.slice(4).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,248,246,0.95))"
                  borderRadius="16px"
                  borderColor="rgba(198, 162, 74, 0.20)"
                  glareColor="#C6A24A"
                  glareOpacity={0.12}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  className="glass-card"
                  style={{ padding: '1.5rem', position: 'relative', boxSizing: 'border-box' }}
                >
                  <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-[#202124] mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-[1.6] mb-3">
                      {solution.capability}
                    </p>
                    <div className="pt-3 border-t border-[rgba(198, 162, 74,0.15)]">
                      <p className="text-sm text-[#202124] font-medium leading-[1.5]">
                        {solution.value}
                      </p>
                      <p className="text-sm text-[#C6A24A] font-medium mt-2">
                        {solution.cta} →
                      </p>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Button variant="red" size="lg" className="text-base">
              Talk Through a Campaign
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
