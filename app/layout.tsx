import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { PageTransition } from "@/components/ui/page-transition";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ParticleField } from "@/components/ui/particle-field";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Preloader } from "@/components/ui/preloader";
import { SectionRail } from "@/components/ui/section-rail";
import { BackgroundTintShift } from "@/components/ui/background-tint-shift";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { RoleProvider } from "@/components/providers/role-provider";
import { RoleGate } from "@/components/providers/role-gate";
import { SectionLabel } from "@/components/ui/section-label";
import { CursorSparkles } from "@/components/ui/cursor-sparkles";
import { VelocityOrbs } from "@/components/ui/velocity-orbs";
import { Analytics } from "@/components/analytics/analytics";
import { JsonLd } from "@/components/seo/json-ld";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1F" },
  ],
  width: "device-width",
  initialScale: 1,
  // Required for env(safe-area-inset-*) to return non-zero on notched iPhones
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Torts Attorney | Smarter Case Acquisition Starts Here",
  description: "Build a Smarter Plaintiff Acquisition Pipeline. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting for plaintiff law firms.",
  openGraph: {
    title: "The Torts Attorney | Smarter Case Acquisition Starts Here",
    description: "Build a Smarter Plaintiff Acquisition Pipeline. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting for plaintiff law firms.",
    type: "website",
    locale: "en_US",
    siteName: "The Torts Attorney",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Torts Attorney | Smarter Case Acquisition Starts Here",
    description: "Build a Smarter Plaintiff Acquisition Pipeline. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting for plaintiff law firms.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    },
  },
  other: {
    'profile:sameAs': ['https://www.linkedin.com/company/the-torts-attorney', 'https://twitter.com/thetortsatty'].join(', '),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#C6A24A] focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <BackgroundTintShift />
        {/* Ambient live animations — scroll velocity parallax orbs */}
        <VelocityOrbs />
        {/* Floating gold particles */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
          <ParticleField count={12} />
        </div>
        <CursorGlow />
        <Preloader />
        <RoleProvider>
          <SmoothScroll>
            <ScrollProgress />
            <SectionRail />
            <Header />
            <main id="main-content" className="flex-1">
              <PageTransition>
                <RoleGate>{children}</RoleGate>
              </PageTransition>
            </main>
            <Footer />
            <ScrollToTop />
            <SectionLabel />
            <CursorSparkles />
            <CookieConsent />
          </SmoothScroll>
        </RoleProvider>
        <Analytics />
        <JsonLd />
      </body>
    </html>
  );
}
