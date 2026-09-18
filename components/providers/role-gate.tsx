'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoltenMetal } from '@/components/ui/molten-metal'
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
      {/* Same layered backdrop as the law-firm hero:
          image → molten shader → cream wash */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-background.png"
          alt=""
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

      {/* Text backdrop — guarantees readability over any shader state */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 45% 35% at center, rgba(248,248,246,0.72) 0%, rgba(248,248,246,0.3) 55%, transparent 100%)',
        }}
      />
      <div className="relative max-w-xl text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#202124] mb-6">
          Who are you?
        </h1>
        <p className="text-lg text-[#4B5563] mb-8">
          Select your audience to view the law firm resources or victim support area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => setRole('attorney')} size="lg">
            Law Firm
          </Button>
          <Button onClick={() => setRole('victim')} variant="outline" size="lg">
            Victim
          </Button>
        </div>
      </div>
    </div>
  )
}
