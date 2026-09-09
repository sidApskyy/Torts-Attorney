'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { SectionNumber } from '@/components/ui/section-number'
import { GlareHover } from '@/components/ui/glare-hover'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { PageHero } from '@/components/layout/page-hero'

const metrics = [
  { label: 'Campaign Spend', value: '$125,000', change: '+12%', positive: true },
  { label: 'Leads Generated', value: '2,847', change: '+8%', positive: true },
  { label: 'Qualification Rate', value: '67%', change: '+5%', positive: true },
  { label: 'Retainer Conversion', value: '42%', change: '+3%', positive: true },
]

const campaigns = [
  { name: 'Mass Tort A', status: 'Active', leads: 847, qualified: 567, retained: 234 },
  { name: 'Mass Tort B', status: 'Active', leads: 623, qualified: 412, retained: 178 },
  { name: 'Personal Injury C', status: 'Limited', leads: 377, qualified: 268, retained: 98 },
]

const activeMassTortCampaigns = [
  { name: "Camp Lejeune", description: "Water contamination claims for veterans and families stationed at Camp Lejeune." },
  { name: "AFFF", description: "Firefighting foam exposure linked to cancer and serious health conditions." },
  { name: "Roundup", description: "Weedkiller exposure claims for non-Hodgkin lymphoma and related cancers." },
  { name: "Ozempic", description: "GLP-1 receptor agonist claims for gastroparesis and severe digestive injuries." },
  { name: "NEC", description: "Baby formula claims for necrotizing enterocolitis in premature infants." },
  { name: "Depo Provera", description: "Contraceptive injection claims linked to meningioma brain tumors." },
  { name: "PFAS", description: "Forever chemical contamination claims from drinking water and consumer products." },
  { name: "Suboxone", description: "Sublingual film claims for severe dental decay and tooth loss." },
  { name: "Bard PowerPort", description: "Implantable port catheter claims for device fracture and migration injuries." },
  { name: "Hair Relaxer", description: "Chemical hair straightener claims linked to uterine cancer and fibroids." },
  { name: "Oxbryta", description: "Sickle cell disease drug claims following market withdrawal for safety concerns." },
  { name: "Hernia Mesh", description: "Surgical mesh implant claims for chronic pain, infection, and mesh failure." },
  { name: "Zantac", description: "Heartburn medication claims for cancer caused by NDMA contamination." },
  { name: "Dacthal", description: "Pesticide exposure claims linked to thyroid damage and developmental harm." },
  { name: "Rideshare", description: "Assault and safety claims against rideshare companies for passenger injuries." },
  { name: "Risperdal", description: "Antipsychotic medication claims for gynecomastia and hormonal side effects." },
  { name: "Olympus Scope", description: "Duodenoscope and endoscope infection claims including CRE superbug outbreaks and the 2025 MAJ-891 recall." },
  { name: "Social Media Addiction", description: "MDL 3047 claims against Meta, TikTok, Snap, YouTube, and Discord for adolescent mental health harms — bellwether trials approaching." },
  { name: "Sports Betting Addiction", description: "Consumer protection claims against DraftKings, FanDuel, BetMGM, Caesars — predatory VIP targeting and self-exclusion failures." },
  { name: "Video Game Addiction", description: "Roblox, Fortnite, and loot-box claims — variable-reinforcement design defects and unauthorized child microtransactions." },
  { name: "Benzene Exposure", description: "Occupational and consumer-product benzene claims — AML, CML, NHL, MDS from refinery work or recalled sunscreens, antiperspirants, and dry shampoos." },
  { name: "Talcum Powder", description: "Johnson & Johnson talc claims linked to ovarian cancer and mesothelioma — MDL 2738, active in 2026." },
  { name: "Tepezza", description: "Thyroid eye disease infusion claims for permanent hearing loss and tinnitus — MDL 3079." },
  { name: "Taxotere", description: "Docetaxel chemotherapy claims for permanent hair loss and tear-duct eye injuries — MDL 2740/3023." },
  { name: "Silicosis", description: "Engineered-stone countertop worker claims for silicosis — 560+ confirmed CA cases, early-stage litigation with plaintiff verdicts." },
  { name: "Paraquat", description: "Herbicide exposure claims for Parkinson's disease — MDL 3004, ~6,600 federal plaintiffs, new claims still filed in 2026." },
  { name: "Paragard", description: "Copper IUD breakage claims for surgical retrieval and related injuries — MDL 2974, ~4,000 federal cases." },
  { name: "Wildfire", description: "Eaton and Palisades fire claims against Southern California Edison — SOL deadlines begin January 2027." },
  { name: "IVC Filter", description: "Retrievable vena cava filter claims for fracture, migration, and perforation — Cook MDL 2570, ~6,500 cases pending and still open." },
  { name: "Mesothelioma", description: "Asbestos exposure claims for mesothelioma and lung cancer — state court dockets plus 60+ bankruptcy trusts holding $30B+." },
  { name: "Allergan Breast Implant", description: "Recalled BIOCELL textured implant claims for BIA-ALCL and explant surgery — MDL 2921, first bellwether October 2026." },
  { name: "Valsartan", description: "NDMA-contaminated blood pressure medication claims for cancer — MDL 2875, personal injury track still in active litigation." },
  { name: "Exactech", description: "Recalled knee, hip, and ankle implant claims for revision surgery — MDL 3044, currently stayed by Chapter 11 bankruptcy." },
  { name: "Philips CPAP", description: "PE-PUR foam degradation claims from recalled sleep devices — MDL 3014, settlement registration closed January 2025." },
  { name: "Motor Vehicle Accidents", description: "Exclusive motor vehicle accident leads — live transfers, qualified forms, and data leads with TCPA and DPPA compliance baked in." },
  { name: "Transvaginal Mesh (TVM)", description: "Pelvic mesh erosion, chronic pain, and revision-surgery claims from POP and SUI implants." },
  { name: "Premises Liability", description: "Slip and fall, negligent security, and dangerous-condition claims against property owners." },
  { name: "CA Juvenile Detention Abuse", description: "Survivors of staff sexual abuse in California juvenile halls and probation camps, under the AB 218 revival window." },
  { name: "CA Women's Prison Abuse", description: "Women sexually abused by correctional staff in California state and federal women's facilities." },
]

export function CampaignIntelligenceClient() {
  return (
    <main>
        <PageHero
          eyebrow="Campaign Intelligence"
          title={
            <h1 id="intelligence-heading" className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.02em]">
              <GradientText animationSpeed={5}>
                Acquisition Command Center
              </GradientText>
            </h1>
          }
          subtitle="Campaign visibility, funnel monitoring, lead quality tracking, and operational intelligence for plaintiff acquisition."
          cta={
            <Link href="/contact">
              <MagneticButton strength={0.25} className="rounded-full">
                <Button variant="red" size="lg" className="text-base">
                  Start a Conversation
                </Button>
              </MagneticButton>
            </Link>
          }
        />

        <div className="section-divider-animated" />

        {/* Disclosure */}
        <section className="bg-[#F1F3F5] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base md:text-lg text-[#4B5563] text-center">
              Illustrative sample data — not actual company performance. This dashboard demonstrates the type of visibility and intelligence available.
            </p>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 section-glow-gold relative overflow-hidden" aria-labelledby="dashboard-heading">
          <SectionNumber number="01" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          <AnimatedGradientBackground colors={['#C6A24A', '#F1F3F5', '#E4E1D8']} speed={20} />
          {/* Ambient accents */}
          <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F8F8F6] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

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
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Dashboard
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="dashboard-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Campaign Intelligence Dashboard
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  Real-time visibility into campaign performance, funnel metrics, and acquisition economics.
                </motion.p>
              </div>

              {/* Top Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,248,246,0.95))"
                      borderRadius="16px"
                      borderColor="rgba(198, 162, 74, 0.25)"
                      glareColor="#C6A24A"
                      glareOpacity={0.15}
                      glareAngle={-30}
                      glareSize={250}
                      transitionDuration={800}
                      className="glass-card"
                      style={{ padding: '2rem', position: 'relative', boxSizing: 'border-box' }}
                    >
                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <p className="text-sm text-[#4B5563] mb-3">{metric.label}</p>
                        <p className="text-3xl font-bold text-[#202124] mb-3">{metric.value}</p>
                        <p className={`text-base font-medium ${metric.positive ? 'text-[#C6A24A]' : 'text-[#B85C5C]'}`}>
                          {metric.change}
                        </p>
                      </div>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>

              {/* Campaign Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card bg-[#F8F8F6] p-8 rounded-2xl relative overflow-hidden border border-[rgba(198, 162, 74, 0.15)]"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent" />
                <h3 className="font-serif text-xl font-bold text-[#202124] mb-8">Active Campaigns</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#C6A24A]/20">
                        <th className="text-left text-sm font-semibold text-[#4B5563] pb-4">Campaign</th>
                        <th className="text-left text-sm font-semibold text-[#4B5563] pb-4">Status</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Leads</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Qualified</th>
                        <th className="text-right text-sm font-semibold text-[#4B5563] pb-4">Retained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ delay: index * 0.08, duration: 0.5 }}
                          className="border-b border-[rgba(32, 33, 36,0.15)] last:border-0 hover:bg-[#C6A24A]/5 transition-colors"
                        >
                          <td className="py-4 text-sm text-[#202124] font-medium">{campaign.name}</td>
                          <td className="py-4">
                            <span className={`text-xs px-2 py-1 rounded ${
                              campaign.status === 'Active'
                                ? 'bg-[#C6A24A]/20 text-[#C6A24A]'
                                : 'bg-[#C6A24A]/20 text-[#C6A24A]'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.leads}</td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.qualified}</td>
                          <td className="py-4 text-right text-sm text-[#202124]">{campaign.retained}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Capabilities */}
        <section className="bg-[#F1F3F5] py-16 md:py-20 lg:py-24 section-glow-gold relative overflow-hidden" aria-labelledby="capabilities-heading">
          <SectionNumber number="02" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />
          {/* Ambient accents */}
          <div className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#F8F8F6] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

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
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Capabilities
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="capabilities-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Intelligence Capabilities
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  Comprehensive visibility across the entire acquisition funnel.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Campaign Visibility', description: 'Real-time campaign performance and spend tracking.' },
                  { title: 'Funnel Monitoring', description: 'Monitor conversion through every acquisition stage.' },
                  { title: 'Lead Quality Analysis', description: 'Track lead quality and qualification metrics.' },
                  { title: 'Intake Performance', description: 'Monitor intake response times and throughput.' },
                  { title: 'Qualification Tracking', description: 'Track qualification rates and disposition.' },
                  { title: 'Retainer Analytics', description: 'Monitor retainer conversion and drop-off points.' },
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,248,246,0.95))"
                      borderRadius="16px"
                      borderColor="rgba(198, 162, 74, 0.25)"
                      glareColor="#C6A24A"
                      glareOpacity={0.15}
                      glareAngle={-30}
                      glareSize={250}
                      transitionDuration={800}
                      className="glass-card"
                      style={{ padding: '1.5rem', position: 'relative', boxSizing: 'border-box' }}
                    >
                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-7 h-7 rounded-lg bg-[#C6A24A]/10 flex items-center justify-center border border-[#C6A24A]/20">
                            <span className="text-[#C6A24A] font-serif text-xs font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </span>
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-3">{capability.title}</h3>
                        <p className="text-base text-[#4B5563] leading-[1.7]">{capability.description}</p>
                      </div>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Active Mass Tort Campaigns */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="active-campaigns-heading">
          <SectionNumber number="03" className="top-10 right-4 text-[180px] md:text-[280px] lg:text-[340px] leading-none" />

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
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Active Campaigns
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 id="active-campaigns-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Mass Tort Campaigns We Support
                    </GradientText>
                  </TextReveal>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
                >
                  Plaintiff acquisition experience across the most active mass tort litigations today.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {activeMassTortCampaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.015, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <div className="content-card p-5 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C6A24A] to-transparent" />
                      <h3 className="font-serif text-lg font-bold text-[#202124] mb-2 leading-tight">
                        {campaign.name}
                      </h3>
                      <p className="text-sm text-[#4B5563] leading-[1.6]">
                        {campaign.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F8F6] py-16 md:py-20 lg:py-24 relative overflow-hidden section-glow-gold" aria-labelledby="intelligence-cta">
          {/* Ambient glow orbs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/20 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="content-card p-6 sm:p-12 md:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent rounded-t-xl" />
                <h2 id="intelligence-cta" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Implement Campaign Intelligence
                    </GradientText>
                  </TextReveal>
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 leading-[1.7]"
                >
                  Let's discuss how we can implement campaign intelligence for your acquisition operations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex justify-center"
                >
                  <Link href="/contact">
                    <MagneticButton strength={0.25} className="rounded-full">
                      <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base">
                        Start a Conversation
                      </Button>
                    </MagneticButton>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
