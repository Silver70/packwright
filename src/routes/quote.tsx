import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { QuoteForm } from '@/components/QuoteForm'

export const Route = createFileRoute('/quote')({ component: QuotePage })

function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <QuoteForm />
    </div>
  )
}
