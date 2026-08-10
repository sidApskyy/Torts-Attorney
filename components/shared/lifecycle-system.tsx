'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ACQUISITION_LIFECYCLE } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface LifecycleSystemProps {
  variant?: 'hero' | 'full'
  interactive?: boolean
}

export function LifecycleSystem({ variant = 'hero', interactive = true }: LifecycleSystemProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const [introductionComplete, setIntroductionComplete] = useState(false)
  const [dataFlowPosition, setDataFlowPosition] = useState(0)
  // const controls = useAnimation() // Reserved for future animation control
  const prefersReducedMotion = useReducedMotion()

  const visibleStages = variant === 'hero' ? ACQUISITION_LIFECYCLE.slice(0, 7) : ACQUISITION_LIFECYCLE

  // Primary stages get more visual emphasis
  const isPrimaryStage = (index: number) => index === 0 || index === 3 || index === 6 || index === 9

  // Data flow animation
  useEffect(() => {
    if (prefersReducedMotion || !introductionComplete) return

    const animateDataFlow = () => {
      setDataFlowPosition(0)
      const duration = 3000
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setDataFlowPosition(progress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }

    animateDataFlow()
    const interval = setInterval(animateDataFlow, 6000)
    return () => clearInterval(interval)
  }, [introductionComplete, prefersReducedMotion])

  // Introduction animation sequence
  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroductionComplete(true)
      return
    }

    const runIntroduction = async () => {
      // Staggered stage entrance
      for (let i = 0; i < visibleStages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150))
      }
      
      setIntroductionComplete(true)
    }

    runIntroduction()
  }, [visibleStages.length, prefersReducedMotion])

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
          
          {/* Active path segment (data flow) - red accent */}
          <motion.div
            className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#C6A24A]/30 via-[#C6A24A] to-[#C6A24A]/30"
            initial={{ width: '0%', left: '0%' }}
            animate={{ 
              width: '12%',
              left: `${dataFlowPosition * 88}%`,
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{ duration: 0.1 }}
            style={{ filter: 'blur(0.3px)' }}
          />

          {/* Stage markers along the path */}
          <div className="relative flex items-center justify-between">
            {visibleStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="relative cursor-pointer group"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => interactive && setActiveStage(stage.id)}
                onMouseLeave={() => interactive && setActiveStage(null)}
                onClick={() => interactive && setActiveStage(activeStage === stage.id ? null : stage.id)}
              >
                {/* Stage marker - architectural vertical line */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 transition-all duration-300",
                    isPrimaryStage(index) ? "h-14" : "h-10",
                    activeStage === stage.id ? "bg-[#C6A24A]" : "bg-[rgba(255, 255, 255,0.28)]",
                    "group-hover:bg-[#C6A24A]/60"
                  )}
                />

                {/* Stage label */}
                <motion.div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-300",
                    isPrimaryStage(index) ? "-translate-y-18" : "-translate-y-16"
                  )}
                >
                  <p
                    className={cn(
                      "font-medium text-center whitespace-nowrap transition-colors",
                      isPrimaryStage(index) ? "text-base md:text-lg" : "text-xs md:text-sm",
                      activeStage === stage.id ? "text-[#C6A24A]" : "text-[#4B5563]",
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
                >
                  <p
                    className={cn(
                      "font-serif text-center transition-colors",
                      isPrimaryStage(index) ? "text-sm" : "text-xs",
                      activeStage === stage.id ? "text-[#C6A24A]" : "text-[#6B7280]",
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-8 px-5 py-3 md:px-6 md:py-4 glass-card text-xs md:text-sm text-[#FFFFFF] whitespace-nowrap z-10 max-w-[220px] md:max-w-none"
                    >
                      {stage.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Optimization loop (return path) */}
          {variant === 'full' && (
            <motion.div
              className="absolute top-1/2 right-0 w-24 h-24 border-t border-r border-dashed border-[#C6A24A]/30 rounded-tr-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            />
          )}
        </div>
      </div>

      {/* Mobile: Vertical continuous path */}
      <div className="md:hidden">
        <div className="relative space-y-6 py-4">
          {visibleStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative cursor-pointer group min-h-[52px]"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => interactive && setActiveStage(activeStage === stage.id ? null : stage.id)}
            >
              {/* Vertical path line */}
              {index < visibleStages.length - 1 && (
                <motion.div
                  className={cn(
                    "absolute left-4 top-10 w-0.5 transition-colors duration-300",
                    activeStage === stage.id || activeStage === visibleStages[index + 1].id
                      ? "bg-gradient-to-b from-[#C6A24A] to-[#9B7830]"
                      : "bg-[rgba(255, 255, 255,0.28)]"
                  )}
                  style={{ height: '40px' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.08 + 0.15, duration: 0.3 }}
                />
              )}

              {/* Stage marker */}
              <div className="flex items-start gap-6">
                {/* Vertical marker line */}
                <motion.div
                  className={cn(
                    "w-0.5 transition-all duration-300",
                    isPrimaryStage(index) ? "h-10" : "h-8",
                    activeStage === stage.id ? "bg-[#C6A24A]" : "bg-[rgba(255, 255, 255,0.28)]",
                    "group-hover:bg-[#C6A24A]/60"
                  )}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                />

                {/* Stage info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <p
                      className={cn(
                        "font-medium transition-colors",
                        isPrimaryStage(index) ? "text-base" : "text-sm",
                        activeStage === stage.id ? "text-[#C6A24A]" : "text-[#FFFFFF]",
                        "group-hover:text-[#C6A24A]"
                      )}
                    >
                      {stage.name}
                    </p>
                    <p
                      className={cn(
                        "font-serif transition-colors",
                        isPrimaryStage(index) ? "text-sm" : "text-xs",
                        activeStage === stage.id ? "text-[#C6A24A]" : "text-[#6B7280]",
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
          ))}

          {/* Optimization loop for mobile */}
          {variant === 'full' && (
            <motion.div
              className="flex items-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 0.5 }}
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
