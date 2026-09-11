'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Role = 'attorney' | 'victim' | null

interface RoleContextValue {
  role: Role
  setRole: (role: Role) => void
}

const RoleContext = createContext<RoleContextValue | null>(null)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('torts-role') as Role
    if (stored === 'attorney' || stored === 'victim') {
      setRoleState(stored)
    }
  }, [])

  const setRole = (role: Role) => {
    setRoleState(role)
    if (typeof window === 'undefined') return
    if (role) {
      localStorage.setItem('torts-role', role)
    } else {
      localStorage.removeItem('torts-role')
    }
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRole must be used within RoleProvider')
  return ctx
}
