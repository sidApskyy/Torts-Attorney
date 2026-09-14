'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  attribution: string
  context: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0)

  const goNext = useCallback(() => {
    setDirection(1)
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }, [active])

  // Swipe support — the expected gesture on touch devices
  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      if (info.offset.x < -60 || info.velocity.x < -500) goNext()
      else if (info.offset.x > 60 || info.velocity.x > 500) goPrev()
    },
    [goNext, goPrev]
  )

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(goNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, goNext])

  const variants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? -25 : 25,
      opacity: 0,
      scale: 0.9,
      x: dir > 0 ? 80 : -80,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? 25 : -25,
      opacity: 0,
      scale: 0.9,
      x: dir > 0 ? -80 : 80,
    }),
  }

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div
        className="relative h-[340px] sm:h-[300px] flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute max-w-2xl w-full"
            style={{ transformStyle: 'preserve-3d' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C6A24A] to-transparent" />
              {/* Quote mark */}
              <div className="font-serif text-5xl text-[#C6A24A]/20 leading-none mb-4">&ldquo;</div>
              <p className="text-lg md:text-xl text-[#202124] leading-[1.7] mb-8 relative font-serif italic">
                {testimonials[active].quote}
              </p>
              <div className="pt-4 border-t border-[#E4E1D8]">
                <p className="text-sm font-semibold text-[#202124]">
                  {testimonials[active].attribution}
                </p>
                <p className="text-xs text-[#6B7280] mt-1">
                  {testimonials[active].context}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots — padded hit areas for touch */}
      <div className="flex items-center justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="p-3 rounded-full group"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === index
                  ? 'w-8 h-2 bg-[#C6A24A]'
                  : 'w-2 h-2 bg-[#C6A24A]/25 group-hover:bg-[#C6A24A]/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Arrow controls — hidden on mobile, swipe + dots handle it */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#E4E1D8] hidden sm:flex items-center justify-center text-[#6B7280] hover:text-[#C6A24A] hover:border-[#C6A24A]/30 transition-all duration-300 z-10 shadow-sm"
        aria-label="Previous testimonial"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#E4E1D8] hidden sm:flex items-center justify-center text-[#6B7280] hover:text-[#C6A24A] hover:border-[#C6A24A]/30 transition-all duration-300 z-10 shadow-sm"
        aria-label="Next testimonial"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
