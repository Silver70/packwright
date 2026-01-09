import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustedSection } from '@/components/TrustedSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedSection />
    </div>
  )
}
