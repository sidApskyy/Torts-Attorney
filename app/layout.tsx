import type { Metadata } from "next";
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
import { AnimatedFavicon } from "@/components/ui/animated-favicon";
import { SectionLabel } from "@/components/ui/section-label";
import { CursorSparkles } from "@/components/ui/cursor-sparkles";
import { VelocityOrbs } from "@/components/ui/velocity-orbs";

export const dynamic = "force-dynamic";

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

export const metadata: Metadata = {
  title: "The Torts Attorney | Smarter Case Acquisition Starts Here",
  description: "Build a Smarter Plaintiff Acquisition Pipeline. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting for plaintiff law firms.",
  openGraph: {
    title: "The Torts Attorney | Smarter Case Acquisition Starts Here",
    description: "Build a Smarter Plaintiff Acquisition Pipeline. Campaign strategy, intake operations, qualification workflows, retainer support, delivery, and transparent reporting for plaintiff law firms.",
    type: "website",
    locale: "en_US",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnimatedFavicon />
        <BackgroundTintShift />
        {/* Ambient live animations — scroll velocity parallax orbs */}
        <VelocityOrbs />
        {/* Floating gold particles */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
          <ParticleField count={12} />
        </div>
        <CursorGlow />
        <Preloader />
        <SmoothScroll>
          <ScrollProgress />
          <SectionRail />
          <Header />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
          <SectionLabel />
          <CursorSparkles />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
