'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ACQUISITION_LIFECYCLE } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface LifecycleSystemProps {
  variant?: 'hero' | 'full'
  interactive?: boolean
}

const FLOW_PARTICLE_COUNT = 5
const AUTO_CYCLE_INTERVAL = 2200
const PULSE_INTERVAL = 1800

export function LifecycleSystem({ variant = 'hero', interactive = true }: LifecycleSystemProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const [introductionComplete, setIntroductionComplete] = useState(false)
  const [autoCycleStage, setAutoCycleStage] = useState(0)
  const [pulseStage, setPulseStage] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const userInteractedRef = useRef(false)
  const autoCycleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const visibleStages = variant === 'hero' ? ACQUISITION_LIFECYCLE.slice(0, 7) : ACQUISITION_LIFECYCLE

  // Primary stages get more visual emphasis
  const isPrimaryStage = (index: number) => index === 0 || index === 3 || index === 6 || index === 9

  // Auto-cycle through stages to draw attention
  useEffect(() => {
    if (prefersReducedMotion || !introductionComplete) return

    const cycle = () => {
      if (!userInteractedRef.current) {
        setAutoCycleStage((prev) => (prev + 1) % visibleStages.length)
      }
      autoCycleTimerRef.current = setTimeout(cycle, AUTO_CYCLE_INTERVAL)
    }

    autoCycleTimerRef.current = setTimeout(cycle, AUTO_CYCLE_INTERVAL)

    return () => {
      if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current)
    }
  }, [introductionComplete, prefersReducedMotion, visibleStages.length])

  // Pulse ring travels along stages
  useEffect(() => {
    if (prefersReducedMotion || !introductionComplete) return

    const pulseInterval = setInterval(() => {
      setPulseStage((prev) => (prev + 1) % visibleStages.length)
    }, PULSE_INTERVAL)

    return () => clearInterval(pulseInterval)
  }, [introductionComplete, prefersReducedMotion, visibleStages.length])

  // Introduction animation sequence
  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroductionComplete(true)
      return
    }

    const runIntroduction = async () => {
      for (let i = 0; i < visibleStages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 120))
      }
      setIntroductionComplete(true)
    }

    runIntroduction()
  }, [visibleStages.length, prefersReducedMotion])

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  const handleStageHover = (stageId: string) => {
    if (!interactive) return
    userInteractedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    setActiveStage(stageId)
  }

  const handleStageLeave = () => {
    if (!interactive) return
    setActiveStage(null)
    // Resume auto-cycle after a delay
    resumeTimerRef.current = setTimeout(() => {
      userInteractedRef.current = false
    }, 3000)
  }

  const handleStageClick = (stageId: string) => {
    if (!interactive) return
    userInteractedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    setActiveStage(activeStage === stageId ? null : stageId)
  }

  const isStageActive = (stageId: string, index: number) =>
    activeStage === stageId || (!userInteractedRef.current && autoCycleStage === index)

  return (
    <div className="relative">
      {/* Desktop: Horizontal continuous path */}
      <div className="hidden md:block">
        <div className="relative py-12">
          {/* Main path line - architectural */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[rgba(255, 255, 255,0.28)] via-[rgba(255, 255, 255,0.28)] to-[rgba(255, 255, 255,0.28)]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Animated gradient overlay on the path */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: introductionComplete ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#C6A24A]/40 to-transparent"
              animate={{ x: ['-33%', '300%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Flowing particles along the path — pure CSS animation, zero React re-renders */}
          {introductionComplete && Array.from({ length: FLOW_PARTICLE_COUNT }, (_, i) => (
            <div
              key={`flow-${i}`}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full pointer-events-none z-[5] lifecycle-flow-particle"
              style={{
                background: 'radial-gradient(circle, rgba(198, 162, 74, 0.9) 0%, rgba(198, 162, 74, 0.3) 60%, transparent 100%)',
                boxShadow: '0 0 8px rgba(198, 162, 74, 0.6)',
                animationDelay: `${(i / FLOW_PARTICLE_COUNT) * 4}s`,
              }}
            />
          ))}

          {/* Stage markers along the path */}
          <div className="relative flex items-center justify-between">
            {visibleStages.map((stage, index) => {
            const isActive = isStageActive(stage.id, index)
            const isPulsing = pulseStage === index && introductionComplete
            return (
              <motion.div
                key={stage.id}
                className="relative cursor-pointer group"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleStageHover(stage.id)}
                onMouseLeave={() => handleStageLeave()}
                onClick={() => handleStageClick(stage.id)}
              >
                {/* Pulse ring - expands outward when this stage is the pulse target */}
                {isPulsing && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                    style={{
                      width: isPrimaryStage(index) ? 48 : 36,
                      height: isPrimaryStage(index) ? 48 : 36,
                      border: '1.5px solid rgba(198, 162, 74, 0.6)',
                    }}
                    initial={{ scale: 0.5, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                )}

                {/* Glow halo for active/primary stages */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    width: isPrimaryStage(index) ? 32 : 24,
                    height: isPrimaryStage(index) ? 32 : 24,
                    background: 'radial-gradient(circle, rgba(198, 162, 74, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: isActive ? [1, 1.3, 1] : 1,
                    opacity: isActive ? [0.6, 1, 0.6] : isPrimaryStage(index) ? 0.3 : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />

                {/* Stage marker - architectural vertical line */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 transition-all duration-300",
                    isPrimaryStage(index) ? "h-14" : "h-10",
                    isActive ? "bg-[#C6A24A]" : "bg-[rgba(255, 255, 255,0.28)]",
                    "group-hover:bg-[#C6A24A]/60"
                  )}
                  animate={{
                    scaleY: isActive ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />

                {/* Stage label */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-300",
                    isPrimaryStage(index) ? "-translate-y-18" : "-translate-y-16"
                  )}
                  animate={{
                    y: isActive ? [0, -4, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                >
                  <p
                    className={cn(
                      "font-medium text-center transition-colors duration-300",
                      isPrimaryStage(index) ? "text-sm md:text-lg" : "text-[10px] md:text-sm",
                      isActive ? "text-[#C6A24A]" : "text-[#4B5563]",
                      "group-hover:text-[#C6A24A]"
                    )}
                  >
                    {stage.name}
                  </p>
                </motion.div>

                {/* Stage number */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-300",
                    isPrimaryStage(index) ? "translate-y-12" : "translate-y-10"
                  )}
                  animate={{
                    opacity: isActive ? [0.6, 1, 0.6] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                >
                  <p
                    className={cn(
                      "font-serif text-center transition-colors duration-300",
                      isPrimaryStage(index) ? "text-sm" : "text-xs",
                      isActive ? "text-[#C6A24A]" : "text-[#6B7280]",
                      "group-hover:text-[#C6A24A]/70"
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </p>
                </motion.div>

                {/* Tooltip - contextual information */}
                <AnimatePresence>
                  {activeStage === stage.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-8 px-4 py-3 md:px-6 md:py-4 glass-card text-xs md:text-sm text-[#FFFFFF] z-10 max-w-[200px] sm:max-w-[280px] md:max-w-none"
                    >
                      {stage.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
            })}
          </div>

          {/* Optimization loop (return path) */}
          {variant === 'full' && (
            <motion.div
              className="absolute top-1/2 right-0 w-24 h-24 border-t border-r border-dashed border-[#C6A24A]/30 rounded-tr-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: 1 }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>

      {/* Mobile: Vertical continuous path */}
      <div className="md:hidden">
        <div className="relative space-y-6 py-4">
          {visibleStages.map((stage, index) => {
          const isActive = isStageActive(stage.id, index)
          const isPulsing = pulseStage === index && introductionComplete
          return (
            <motion.div
              key={stage.id}
              className="relative cursor-pointer group min-h-[52px]"
              initial={{ opacity: 0, x: -15, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleStageClick(stage.id)}
            >
              {/* Vertical path line */}
              {index < visibleStages.length - 1 && (
                <motion.div
                  className={cn(
                    "absolute left-4 top-10 w-0.5 transition-colors duration-300",
                    isActive || isStageActive(visibleStages[index + 1].id, index + 1)
                      ? "bg-gradient-to-b from-[#C6A24A] to-[#9B7830]"
                      : "bg-[rgba(255, 255, 255,0.28)]"
                  )}
                  style={{ height: '40px' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.08 + 0.15, duration: 0.3 }}
                />
              )}

              {/* Pulse ring for mobile */}
              {isPulsing && (
                <motion.div
                  className="absolute left-4 top-4 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    width: 28,
                    height: 28,
                    border: '1.5px solid rgba(198, 162, 74, 0.6)',
                  }}
                  initial={{ scale: 0.5, opacity: 0.8 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              )}

              {/* Stage marker */}
              <div className="flex items-start gap-6">
                {/* Vertical marker line */}
                <motion.div
                  className={cn(
                    "w-0.5 transition-all duration-300",
                    isPrimaryStage(index) ? "h-10" : "h-8",
                    isActive ? "bg-[#C6A24A]" : "bg-[rgba(255, 255, 255,0.28)]",
                    "group-hover:bg-[#C6A24A]/60"
                  )}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                />

                {/* Stage info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <motion.p
                      className={cn(
                        "font-medium transition-colors",
                        isPrimaryStage(index) ? "text-base" : "text-sm",
                        isActive ? "text-[#C6A24A]" : "text-[#FFFFFF]",
                        "group-hover:text-[#C6A24A]"
                      )}
                      animate={{
                        x: isActive ? [0, 4, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                    >
                      {stage.name}
                    </motion.p>
                    <p
                      className={cn(
                        "font-serif transition-colors",
                        isPrimaryStage(index) ? "text-sm" : "text-xs",
                        isActive ? "text-[#C6A24A]" : "text-[#6B7280]",
                        "group-hover:text-[#C6A24A]/70"
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>

                  <AnimatePresence>
                    {activeStage === stage.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 text-sm text-[#4B5563] leading-[1.7]"
                      >
                        {stage.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
          })}

          {/* Optimization loop for mobile */}
          {variant === 'full' && (
            <motion.div
              className="flex items-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-0.5 h-12 border-l border-dashed border-[rgba(255, 255, 255,0.28)]" />
              <p className="text-sm text-[#6B7280]">↺ Optimization feeds back to Strategy</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
