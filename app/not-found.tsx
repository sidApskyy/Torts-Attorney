'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#F8F8F6] flex items-center justify-center relative overflow-hidden px-4">
      {/* Ambient accents */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '5s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(32, 33, 36, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 33, 36, 0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 404 */}
          <p className="font-serif text-8xl md:text-9xl font-bold text-[#C6A24A]/15 leading-none mb-4 tabular-nums">
            404
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C6A24A]" />
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
              Page Not Found
            </p>
            <div className="h-px w-8 bg-[#C6A24A]" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]">
            <GradientText animationSpeed={5}>
              That page is not in the pipeline.
            </GradientText>
          </h1>

          <p className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-10 max-w-lg mx-auto">
            The page you are looking for may have been moved, renamed, or is no longer available. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6A24A] text-white text-sm font-semibold hover:bg-[#9B7830] transition-colors duration-300"
            >
              Back to Home
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E4E1D8] text-[#202124] text-sm font-semibold hover:border-[#C6A24A]/50 hover:text-[#9B7830] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
