import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import TechStack from "@/components/TechStack"
import Workflow from "@/components/Workflow"
import Portfolio from "@/components/Portfolio"
import FAQ from "@/components/FAQ"
import ScrollProgress from "@/components/ScrollProgress"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--card-border)]/50">
        <div className="max-w-7xl mx-auto px-6">
          <Navbar />
        </div>
      </header>
      <main className="pt-0">
        <Hero />
        <TechStack />
        <div className="max-w-7xl mx-auto px-6">
          <Services />
        </div>
        <Workflow />
        <Portfolio />
        <Stats />
        <Testimonials />
        <FAQ />
        <div className="max-w-7xl mx-auto px-6">
          <CTA />
        </div>
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
