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
        {/* Ambient live animations */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
          {/* Drifting ambient orbs */}
          <div
            className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] animate-orb-1"
            style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)' }}
          />
          <div
            className="absolute top-[50%] right-[10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[140px] animate-orb-2"
            style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
          />
          <div
            className="absolute bottom-[15%] left-[30%] w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] rounded-full blur-[80px] sm:blur-[100px] animate-orb-1"
            style={{ background: 'radial-gradient(circle, rgba(107, 143, 214, 0.03), transparent 70%)', animationDelay: '5s' }}
          />
          {/* Floating gold particles */}
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
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
