'use client'

import { useState } from 'react'
import { ACQUISITION_LIFECYCLE } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface AcquisitionLifecycleProps {
  variant?: 'hero' | 'full' | 'dashboard'
  interactive?: boolean
}

export function AcquisitionLifecycle({ variant = 'hero', interactive = true }: AcquisitionLifecycleProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  
  const visibleStages = variant === 'hero' 
    ? ACQUISITION_LIFECYCLE.slice(0, 7) 
    : ACQUISITION_LIFECYCLE

  // Primary stages get more visual emphasis
  const isPrimaryStage = (index: number) => index === 0 || index === 3 || index === 6

  return (
    <div className="relative">
      <div className="relative">
        {/* Desktop: Horizontal connected system */}
        <div className="hidden md:flex items-center justify-between gap-1">
          {visibleStages.map((stage, index) => (
            <div
              key={stage.id}
              className={cn(
                "flex-1 text-center cursor-pointer transition-all duration-300 relative",
                interactive && "hover:scale-105"
              )}
              onMouseEnter={() => interactive && setActiveStage(stage.id)}
              onMouseLeave={() => interactive && setActiveStage(null)}
            >
              {/* Stage node with visual hierarchy */}
              <div
                className={cn(
                  "relative mx-auto flex items-center justify-center transition-all duration-300",
                  isPrimaryStage(index) ? "w-20 h-20" : "w-14 h-14"
                )}
              >
                {/* Outer ring for active state */}
                {activeStage === stage.id && (
                  <div className="absolute inset-0 rounded-full border border-[#9B7830]/30 animate-pulse" />
                )}
                
                {/* Main node */}
                <div
                  className={cn(
                    "rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    activeStage === stage.id
                      ? isPrimaryStage(index)
                        ? "bg-[#9B7830] border-[#9B7830] scale-110"
                        : "bg-[#9B7830]/20 border-[#9B7830] scale-105"
                      : isPrimaryStage(index)
                        ? "bg-[#F5F7FA] border-[#C6A24A]"
                        : "bg-[#F8F8F6] border-[rgba(255, 255, 255,0.35)]"
                  )}
                >
                  <span 
                    className={cn(
                      "font-semibold transition-colors",
                      isPrimaryStage(index) ? "text-sm" : "text-xs",
                      activeStage === stage.id ? "text-white" : "text-[#FFFFFF]"
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Stage name with hierarchy */}
              <p 
                className={cn(
                  "mt-3 font-medium transition-colors",
                  isPrimaryStage(index) ? "text-sm" : "text-xs",
                  activeStage === stage.id ? "text-[#9B7830]" : "text-[#4B5563]/80"
                )}
              >
                {stage.name}
              </p>
              
              {/* Tooltip - contextual information */}
              {activeStage === stage.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-[#F5F7FA] border border-[rgba(255, 255, 255,0.35)] rounded-lg text-xs text-[#FFFFFF] whitespace-nowrap z-10 shadow-lg">
                  {stage.description}
                </div>
              )}
              
              {/* Connector line with data flow indication */}
              {index < visibleStages.length - 1 && (
                <div 
                  className={cn(
                    "absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2 transition-all duration-300",
                    activeStage === stage.id || activeStage === visibleStages[index + 1].id
                      ? "bg-gradient-to-r from-[#9B7830] to-[#C6A24A]"
                      : "bg-gradient-to-r from-[rgba(255, 255, 255,0.35)] to-[rgba(255, 255, 255,0.35)]"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Progressive vertical journey */}
        <div className="md:hidden space-y-3">
          {visibleStages.map((stage, index) => (
            <div
              key={stage.id}
              className={cn(
                "flex items-center gap-4 cursor-pointer transition-all duration-300 relative",
                interactive && "active:scale-[0.98]"
              )}
              onClick={() => interactive && setActiveStage(activeStage === stage.id ? null : stage.id)}
            >
              {/* Stage node */}
              <div
                className={cn(
                  "flex items-center justify-center flex-shrink-0 transition-all duration-300",
                  isPrimaryStage(index) ? "w-14 h-14" : "w-10 h-10"
                )}
              >
                <div
                  className={cn(
                    "rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    activeStage === stage.id
                      ? isPrimaryStage(index)
                        ? "bg-[#9B7830] border-[#9B7830]"
                        : "bg-[#9B7830]/20 border-[#9B7830]"
                      : isPrimaryStage(index)
                        ? "bg-[#F5F7FA] border-[#C6A24A]"
                        : "bg-[#F8F8F6] border-[rgba(255, 255, 255,0.35)]"
                  )}
                >
                  <span 
                    className={cn(
                      "font-semibold",
                      isPrimaryStage(index) ? "text-xs" : "text-[10px]",
                      activeStage === stage.id ? "text-white" : "text-[#FFFFFF]"
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Stage info with accordion-style expansion */}
              <div className="flex-1">
                <p 
                  className={cn(
                    "font-medium transition-colors",
                    isPrimaryStage(index) ? "text-sm" : "text-xs",
                    activeStage === stage.id ? "text-[#9B7830]" : "text-[#4B5563]"
                  )}
                >
                  {stage.name}
                </p>
                {activeStage === stage.id && (
                  <p className="mt-1 text-xs text-[#4B5563]/70 leading-relaxed">
                    {stage.description}
                  </p>
                )}
              </div>
              
              {/* Connector line */}
              {index < visibleStages.length - 1 && (
                <div 
                  className={cn(
                    "absolute left-5 top-12 w-0.5 h-3 transition-all duration-300",
                    activeStage === stage.id || activeStage === visibleStages[index + 1].id
                      ? "bg-gradient-to-b from-[#9B7830] to-[#C6A24A]"
                      : "bg-[rgba(255, 255, 255,0.35)]"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
