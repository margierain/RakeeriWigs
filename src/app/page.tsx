import { HeroSection } from '@/components/HeroSection'
import { TrustBadges } from '@/components/TrustBadges'
import { SocialProof } from '@/components/SocialProof'
import { ProductShowcase } from '@/components/ProductShowcase'
import { ServicesSection } from '@/components/ServicesSection'
import { Testimonials } from '@/components/Testimonials'
import { LeadCapture } from '@/components/LeadCapture'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <TrustBadges />
        <SocialProof />
        <ProductShowcase />
        <ServicesSection />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}