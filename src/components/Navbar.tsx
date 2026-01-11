import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-50">
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
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                about
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                services
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                contact
              </Link>
              <Link
                to="/quote"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 relative z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed inset-0 bg-black/25 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-8 pt-24">
          <Link
            to="/"
            className="text-white hover:text-gray-100 transition-colors font-medium text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            about
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-100 transition-colors font-medium text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            services
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-100 transition-colors font-medium text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            contact
          </Link>
          <Link
            to="/quote"
            className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  )
}
