import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustedSection } from '@/components/TrustedSection'
import { ServicesSection } from '@/components/ServicesSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { WhoIsForSection } from '@/components/WhoIsForSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <WhoIsForSection />
    </div>
  )
}
