'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { VictimLanding } from '@/components/victim-landing-v3'
import { useRole } from './role-provider'

export function RoleGate({ children }: { children: React.ReactNode }) {
  const { role, setRole } = useRole()
  const pathname = usePathname()

  // The role gate only controls the landing experience at '/'.
  // Every other route (legal pages, about, contact, …) must render
  // its own content regardless of the stored role — otherwise links
  // like the footer Privacy Policy are unreachable in victim mode.
  if (pathname !== '/') return <>{children}</>

  if (role === 'attorney') return <>{children}</>

  if (role === 'victim') {
    return <VictimLanding />
  }

  return (
    <div className="relative min-h-svh flex items-center justify-center px-4 overflow-hidden bg-[#F8F8F6]">
      {/* Marble texture backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/marble.png')" }}
      />
      {/* Animated gold/cream gradient orbs */}
      <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={24} />
      {/* Cream vignette so the copy stays readable over the texture */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(248,248,246,0.45) 30%, rgba(248,248,246,0.92) 100%)',
        }}
      />
      <div className="relative max-w-xl text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#202124] mb-6">
          Who are you?
        </h1>
        <p className="text-lg text-[#4B5563] mb-8">
          Select your audience to view the attorney resources or victim support area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => setRole('attorney')} size="lg">
            Attorney
          </Button>
          <Button onClick={() => setRole('victim')} variant="outline" size="lg">
            Victim
          </Button>
        </div>
      </div>
    </div>
  )
}
