import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Logo.svg"
              alt="Packwright"
              className="h-8 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
            >
              about
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
            >
              services
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
            >
              contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                services
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
