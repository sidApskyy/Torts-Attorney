'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif text-8xl md:text-9xl font-bold text-[#C6A24A]/15 leading-none mb-4 tabular-nums">
          500
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C6A24A]" />
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
            Something Went Wrong
          </p>
          <div className="h-px w-8 bg-[#C6A24A]" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]">
          <span className="text-gradient-gold">
            An unexpected error occurred.
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-10 max-w-lg mx-auto">
          We apologize for the inconvenience. Please try again, or return to the homepage to continue browsing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6A24A] text-white text-sm font-semibold hover:bg-[#9B7830] transition-colors duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E4E1D8] text-[#202124] text-sm font-semibold hover:border-[#C6A24A]/50 hover:text-[#9B7830] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
