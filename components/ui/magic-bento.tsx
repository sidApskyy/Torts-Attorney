'use client'

import { useRef, useEffect, useCallback, useState, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import './magic-bento.css'

const DEFAULT_PARTICLE_COUNT = 12
const DEFAULT_SPOTLIGHT_RADIUS = 300
const DEFAULT_GLOW_COLOR = '239, 208, 155'
const MOBILE_BREAKPOINT = 768

export interface MagicBentoCardData {
  color?: string
  title: string
  description: string
  label: string
  featured?: boolean
  span?: 'wide' | 'normal'
}

interface MagicBentoProps {
  cards: MagicBentoCardData[]
  textAutoHide?: boolean
  enableStars?: boolean
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  disableAnimations?: boolean
  spotlightRadius?: number
  particleCount?: number
  enableTilt?: boolean
  glowColor?: string
  clickEffect?: boolean
  enableMagnetism?: boolean
}

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div')
  el.className = 'particle'
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `
  return el
}

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
})

interface ParticleCardProps {
  children: ReactNode
  className?: string
  disableAnimations?: boolean
  style?: CSSProperties
  particleCount?: number
  glowColor?: string
  enableTilt?: boolean
  clickEffect?: boolean
  enableMagnetism?: boolean
}

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}: ParticleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLElement[]>([])
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isHoveredRef = useRef(false)
  const memoizedParticles = useRef<HTMLElement[]>([])
  const particlesInitialized = useRef(false)

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return

    const { width, height } = cardRef.current.getBoundingClientRect()
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    )
    particlesInitialized.current = true
  }, [particleCount, glowColor])

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle)
        },
      })
    })
    particlesRef.current = []
  }, [])

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return

    if (!particlesInitialized.current) {
      initializeParticles()
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return

        const clone = particle.cloneNode(true) as HTMLElement
        cardRef.current.appendChild(clone)
        particlesRef.current.push(clone)

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        })

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        })
      }, index * 100)

      timeoutsRef.current.push(timeoutId)
    })
  }, [initializeParticles])

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return

    const element = cardRef.current

    // Reusable quickTo tweens — no new tween objects per mousemove
    if (enableTilt) gsap.set(element, { transformPerspective: 1000 })
    const tiltXTo = enableTilt ? gsap.quickTo(element, 'rotateX', { duration: 0.3, ease: 'power2.out' }) : null
    const tiltYTo = enableTilt ? gsap.quickTo(element, 'rotateY', { duration: 0.3, ease: 'power2.out' }) : null
    const magnetXTo = enableMagnetism ? gsap.quickTo(element, 'x', { duration: 0.3, ease: 'power2.out' }) : null
    const magnetYTo = enableMagnetism ? gsap.quickTo(element, 'y', { duration: 0.3, ease: 'power2.out' }) : null

    let cachedRect: DOMRect | null = null
    let rafId = 0
    let lastMouseEvent: MouseEvent | null = null

    const handleMouseEnter = () => {
      isHoveredRef.current = true
      cachedRect = element.getBoundingClientRect()
      animateParticles()

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        })
      }
    }

    const handleMouseLeave = () => {
      isHoveredRef.current = false
      cachedRect = null
      clearAllParticles()

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const processMouseMove = () => {
      rafId = 0
      const e = lastMouseEvent
      if (!e || !cachedRect) return

      const x = e.clientX - cachedRect.left
      const y = e.clientY - cachedRect.top
      const centerX = cachedRect.width / 2
      const centerY = cachedRect.height / 2

      if (enableTilt && tiltXTo && tiltYTo) {
        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10
        tiltXTo(rotateX)
        tiltYTo(rotateY)
      }

      if (enableMagnetism && magnetXTo && magnetYTo) {
        const magnetX = (x - centerX) * 0.05
        const magnetY = (y - centerY) * 0.05
        magnetXTo(magnetX)
        magnetYTo(magnetY)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return
      lastMouseEvent = e
      if (rafId === 0) {
        rafId = requestAnimationFrame(processMouseMove)
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return

      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      )

      const ripple = document.createElement('div')
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `

      element.appendChild(ripple)

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      )
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('click', handleClick)

    return () => {
      isHoveredRef.current = false
      if (rafId) cancelAnimationFrame(rafId)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('click', handleClick)
      clearAllParticles()
    }
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor])

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  )
}

interface GlobalSpotlightProps {
  gridRef: React.RefObject<HTMLDivElement | null>
  disableAnimations?: boolean
  enabled?: boolean
  spotlightRadius?: number
  glowColor?: string
}

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}: GlobalSpotlightProps) => {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return

    const spotlight = document.createElement('div')
    spotlight.className = 'global-spotlight'
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `
    document.body.appendChild(spotlight)
    spotlightRef.current = spotlight

    // Reusable tweens — no new tween objects created per mousemove
    const spotlightXTo = gsap.quickTo(spotlight, 'left', { duration: 0.15, ease: 'power2.out' })
    const spotlightYTo = gsap.quickTo(spotlight, 'top', { duration: 0.15, ease: 'power2.out' })
    const spotlightOpacityTo = gsap.quickTo(spotlight, 'opacity', { duration: 0.2, ease: 'power2.out' })

    // Cached card positions — refreshed on scroll/resize, NOT on every mousemove
    let cachedCards: HTMLElement[] = []
    let cachedRects: DOMRect[] = []
    let cachedSectionRect: DOMRect | null = null

    const refreshCache = () => {
      if (!gridRef.current) return
      cachedCards = Array.from(gridRef.current.querySelectorAll('.magic-bento-card')) as HTMLElement[]
      const section = gridRef.current.closest('.bento-section')
      cachedSectionRect = section?.getBoundingClientRect() ?? null
      cachedRects = cachedCards.map((card) => card.getBoundingClientRect())
    }

    refreshCache()

    // Refresh on resize and when section enters viewport
    const ro = new ResizeObserver(refreshCache)
    if (gridRef.current) ro.observe(gridRef.current)

    const sectionIO = new IntersectionObserver(refreshCache, { threshold: 0 })
    const section = gridRef.current.closest('.bento-section')
    if (section) sectionIO.observe(section)

    let rafId = 0
    let lastMouseEvent: MouseEvent | null = null

    const processMouseMove = () => {
      rafId = 0
      const e = lastMouseEvent
      if (!e || !cachedSectionRect) return

      const mouseInside =
        e.clientX >= cachedSectionRect.left &&
        e.clientX <= cachedSectionRect.right &&
        e.clientY >= cachedSectionRect.top &&
        e.clientY <= cachedSectionRect.bottom

      if (!mouseInside) {
        spotlightOpacityTo(0)
        cachedCards.forEach((card) => {
          card.style.setProperty('--glow-intensity', '0')
        })
        return
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
      let minDistance = Infinity

      for (let i = 0; i < cachedCards.length; i++) {
        const cardRect = cachedRects[i]
        if (!cardRect) continue
        const centerX = cardRect.left + cardRect.width / 2
        const centerY = cardRect.top + cardRect.height / 2
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2
        const effectiveDistance = Math.max(0, distance)

        minDistance = Math.min(minDistance, effectiveDistance)

        let glowIntensity = 0
        if (effectiveDistance <= proximity) {
          glowIntensity = 1
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity)
        }

        // Only update CSS custom properties if intensity changed meaningfully
        const card = cachedCards[i]
        const currentIntensity = card.style.getPropertyValue('--glow-intensity')
        if (Math.abs(parseFloat(currentIntensity || '0') - glowIntensity) > 0.01) {
          const relativeX = ((e.clientX - cardRect.left) / cardRect.width) * 100
          const relativeY = ((e.clientY - cardRect.top) / cardRect.height) * 100
          card.style.setProperty('--glow-x', `${relativeX}%`)
          card.style.setProperty('--glow-y', `${relativeY}%`)
          card.style.setProperty('--glow-intensity', glowIntensity.toString())
        }
      }

      spotlightXTo(e.clientX)
      spotlightYTo(e.clientY)

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0

      spotlightOpacityTo(targetOpacity)
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseEvent = e
      if (rafId === 0) {
        rafId = requestAnimationFrame(processMouseMove)
      }
    }

    const handleMouseLeave = () => {
      lastMouseEvent = null
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
      }
      cachedCards.forEach((card) => {
        card.style.setProperty('--glow-intensity', '0')
      })
      spotlightOpacityTo(0)
    }

    // Refresh cache on scroll since card positions shift
    const handleScroll = () => {
      if (rafId === 0) {
        rafId = requestAnimationFrame(() => {
          rafId = 0
          refreshCache()
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      ro.disconnect()
      sectionIO.disconnect()
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
    }
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor])

  return null
}

const BentoCardGrid = ({ children, gridRef }: { children: ReactNode; gridRef: React.RefObject<HTMLDivElement | null> }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
)

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function MagicBento({
  cards,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobileDetection()
  const shouldDisableAnimations = disableAnimations || isMobile

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cards.map((card, index) => {
          const baseClassName = `magic-bento-card ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''} ${card.featured ? 'magic-bento-card--featured' : ''} ${card.span === 'wide' ? 'magic-bento-card--wide' : ''}`
          const cardStyle: CSSProperties = {
            backgroundColor: card.color || '#FFFFFF',
            ['--glow-color' as string]: glowColor,
          }

          const cardContent = (
            <>
              <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
                {card.featured && <div className="magic-bento-card__badge">Key Stage</div>}
              </div>
              <div className="magic-bento-card__content">
                <h2 className="magic-bento-card__title">{card.title}</h2>
                <p className="magic-bento-card__description">{card.description}</p>
              </div>
            </>
          )

          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                className={baseClassName}
                style={cardStyle}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
              >
                {cardContent}
              </ParticleCard>
            )
          }

          return (
            <div
              key={index}
              className={baseClassName}
              style={cardStyle}
              ref={(el) => {
                if (!el) return

                if (enableTilt) gsap.set(el, { transformPerspective: 1000 })
                const tiltXTo = enableTilt ? gsap.quickTo(el, 'rotateX', { duration: 0.3, ease: 'power2.out' }) : null
                const tiltYTo = enableTilt ? gsap.quickTo(el, 'rotateY', { duration: 0.3, ease: 'power2.out' }) : null
                const magnetXTo = enableMagnetism ? gsap.quickTo(el, 'x', { duration: 0.3, ease: 'power2.out' }) : null
                const magnetYTo = enableMagnetism ? gsap.quickTo(el, 'y', { duration: 0.3, ease: 'power2.out' }) : null

                let cachedRect: DOMRect | null = null
                let rafId = 0
                let lastMouseEvent: MouseEvent | null = null

                const processMouseMove = () => {
                  rafId = 0
                  const e = lastMouseEvent
                  if (!e || !cachedRect) return

                  const x = e.clientX - cachedRect.left
                  const y = e.clientY - cachedRect.top
                  const centerX = cachedRect.width / 2
                  const centerY = cachedRect.height / 2

                  if (enableTilt && tiltXTo && tiltYTo) {
                    tiltXTo(((y - centerY) / centerY) * -10)
                    tiltYTo(((x - centerX) / centerX) * 10)
                  }

                  if (enableMagnetism && magnetXTo && magnetYTo) {
                    magnetXTo((x - centerX) * 0.05)
                    magnetYTo((y - centerY) * 0.05)
                  }
                }

                const handleMouseMove = (e: MouseEvent) => {
                  if (shouldDisableAnimations) return
                  lastMouseEvent = e
                  if (rafId === 0) {
                    rafId = requestAnimationFrame(processMouseMove)
                  }
                }

                const handleMouseEnter = () => {
                  if (shouldDisableAnimations) return
                  cachedRect = el.getBoundingClientRect()
                }

                const handleMouseLeave = () => {
                  if (shouldDisableAnimations) return
                  cachedRect = null
                  if (rafId) {
                    cancelAnimationFrame(rafId)
                    rafId = 0
                  }

                  if (enableTilt) {
                    gsap.to(el, {
                      rotateX: 0,
                      rotateY: 0,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }

                  if (enableMagnetism) {
                    gsap.to(el, {
                      x: 0,
                      y: 0,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }
                }

                const handleClick = (e: MouseEvent) => {
                  if (!clickEffect || shouldDisableAnimations) return

                  const rect = el.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top

                  const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                  )

                  const ripple = document.createElement('div')
                  ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `

                  el.appendChild(ripple)

                  gsap.fromTo(
                    ripple,
                    { scale: 0, opacity: 1 },
                    {
                      scale: 1,
                      opacity: 0,
                      duration: 0.8,
                      ease: 'power2.out',
                      onComplete: () => ripple.remove(),
                    }
                  )
                }

                el.addEventListener('mouseenter', handleMouseEnter)
                el.addEventListener('mousemove', handleMouseMove)
                el.addEventListener('mouseleave', handleMouseLeave)
                el.addEventListener('click', handleClick)
              }}
            >
              {cardContent}
            </div>
          )
        })}
      </BentoCardGrid>
    </>
  )
}

export default MagicBento
