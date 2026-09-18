'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRole } from '@/components/providers/role-provider'
import { Button } from '@/components/ui/button'
import { MoltenMetal } from '@/components/ui/molten-metal'
import { GradientText } from '@/components/ui/gradient-text'
import {
  Flame,
  ArrowRight,
  Sparkles,
  Pill,
  Car,
  CarFront,
  Gamepad2,
  Building2,
} from 'lucide-react'

const TORTS = [
  {
    title: 'Talcum',
    description: 'Claims involving serious diagnoses linked to long-term talcum powder use.',
    icon: Sparkles,
  },
  {
    title: 'Depo',
    description: 'Injuries and brain tumor claims related to Depo-Provera injections.',
    icon: Pill,
  },
  {
    title: 'Rideshare',
    description: 'Accidents and injuries occurring in Uber, Lyft, and other rideshare trips.',
    icon: Car,
  },
  {
    title: 'Motor Vehicle',
    description: 'Crashes involving cars, trucks, motorcycles, and commercial vehicles.',
    icon: CarFront,
  },
  {
    title: 'Roblox',
    description: 'Concerns about extended platform use and reported physical or psychological harm.',
    icon: Gamepad2,
  },
  {
    title: 'WTC',
    description: 'Health conditions and VCF claims for 9/11 responders and survivors.',
    icon: Building2,
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { setRole } = useRole()

  const checkEligibility = () => {
    setRole('victim')
    if (typeof window !== 'undefined') {
      window.location.hash = 'victim-form'
    }
  }

  return (
    <section aria-labelledby="hero-heading" className="relative bg-[#F8F8F6]">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)' }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.08), transparent 70%)' }}
        />
      </div>

      {/* Architectural grid overlay */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(32, 33, 36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 33, 36,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Hero */}
      <div className="relative z-[2] min-h-svh flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Lady Justice with columns and law book"
            fill
            priority
            sizes="100vw"
            draggable={false}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <MoltenMetal
            color1="#F5F7FA"
            color2="#C6A24A"
            color3="#FFFFFF"
            speed={0.3}
            scale={5}
            detail={4}
            glow={2.2}
            coreSize={0.14}
            swirl={1.5}
            fold={-0.3}
            blackPoint={0.04}
            brightness={1.6}
            colorMode="molten"
            grain={true}
            grainIntensity={0.03}
            mouseInteraction={true}
            mouseStrength={0.35}
            opacity={0.85}
            className="molten-overlay absolute inset-0"
          />
          <div className="absolute inset-0 bg-[rgba(248,248,246,0.35)]" />
        </div>

        {/* Overlay — only the essential hero message */}
        <div className="relative max-w-2xl mx-auto px-4 sm:px-8 py-24" style={{ textShadow: '0 2px 24px rgba(32,33,36,0.5)' }}>
            {/* Dedicated text backdrop — guarantees readability over any shader state */}
            <div className="absolute inset-0 -mx-4 -my-6 sm:-mx-8 rounded-[24px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 40% at center, rgba(248,248,246,0.72) 0%, rgba(248,248,246,0.3) 55%, transparent 100%)',
              }}
            />
            <div className="relative">
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-[#202124] font-medium tracking-[0.2em] uppercase mb-4 sm:mb-5 lg:mb-7"
              style={{ opacity: 0.85 }}
            >
              PLAINTIFF ACQUISITION, BUILT AROUND THE WAY YOUR FIRM WORKS
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6 lg:mb-8"
            >
              <GradientText animationSpeed={5}>
                Bring More of the Right<br />
                Opportunities to Your Firm.
              </GradientText>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-[1.7] mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto"
              style={{ opacity: 0.92 }}
            >
              We help mass tort and personal injury firms plan, launch, qualify and track plaintiff-acquisition campaigns — from the first response through intake, retainer workflow and law-firm delivery.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="red" size="lg" className="text-base w-full sm:w-auto">
                  Talk Through a Campaign
                </Button>
              </Link>
              <Link href="/campaign-intelligence" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base w-full sm:w-auto border-[#E4E1D8] text-[#202124] hover:bg-[rgba(32,33,36,0.95)] hover:border-[#C6A24A]/50 hover:text-[#9B7830]">
                  See Current Campaigns
                </Button>
              </Link>
            </motion.div>
            </div>
          </div>
        </div>

      {/* ── Hot Torts campaign cards ── */}
      <div className="relative z-[3] bg-[#F8F8F6] border-t border-[#E4E1D8] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center"
            >
              <GradientText animationSpeed={5}>Hot Torts</GradientText>
            </motion.h2>
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-[#4B5563] text-center max-w-2xl mx-auto"
            >
              Active legal reviews and campaigns where injured people may be able to connect with plaintiff law firms.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TORTS.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#F8F8F6] to-[#F8F8F6] border border-[rgba(198,162,74,0.12)] p-6 shadow-[0_8px_32px_rgba(32,33,36,0.04)] transition-colors duration-300 hover:border-[rgba(198,162,74,0.35)] hover:shadow-[0_24px_60px_rgba(198,162,74,0.12)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A24A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A24A]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Shine sweep across the card on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                <Icon className="absolute -bottom-3 -right-3 w-24 h-24 text-[#C6A24A]/[0.05] rotate-12 group-hover:scale-110 group-hover:rotate-6 group-hover:text-[#C6A24A]/[0.08] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#C6A24A]/10 to-[#C6A24A]/5 text-[#C6A24A] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:from-[#C6A24A]/25 group-hover:to-[#C6A24A]/15 group-hover:shadow-[0_0_24px_rgba(198,162,74,0.35)]">
                      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[20deg]" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C6A24A]/10 text-[#C6A24A] text-[10px] font-bold uppercase tracking-wide transition-all duration-300 group-hover:bg-[#C6A24A] group-hover:text-white">
                      <Flame className="w-3 h-3 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                      Hot
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#202124] mb-2">{title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{description}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs border-[#E4E1D8] text-[#202124] hover:bg-[#202124] hover:border-[#C6A24A]/50 hover:text-[#C6A24A] group/btn"
                    onClick={checkEligibility}
                  >
                    See if this may fit
                    <ArrowRight className="w-3.5 h-3.5 ml-auto transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/campaign-intelligence">
              <Button variant="outline" size="lg" className="text-base border-[#E4E1D8] text-[#202124] hover:bg-[rgba(32,33,36,0.95)] hover:border-[#C6A24A]/50 hover:text-[#9B7830] group">
                See all campaigns
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
