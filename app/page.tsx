import HeroSection from "@/components/hero-section"
import CertificationSection from "@/components/certification-section"
import StackSection from "@/components/stack-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <CertificationSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
