'use client'

import { Button } from '@/components/ui/button'
import { VictimLanding } from '@/components/victim-landing-v3'
import { useRole } from './role-provider'

export function RoleGate({ children }: { children: React.ReactNode }) {
  const { role, setRole } = useRole()

  if (role === 'attorney') return <>{children}</>

  if (role === 'victim') {
    return <VictimLanding />
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
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
