export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
            <span className="text-amber-400">Custom</span>{' '}
            <span className="text-gray-900">Mailer Boxes</span>{' '}
            <span className="text-gray-900">for</span>
            <br />
            <span className="text-gray-900">Ecommerce & DTC</span>{' '}
            <span className="text-amber-400">Brands</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            We help growing ecommerce brands design, produce, and deliver
            branded mailer boxes for custom orders online.
          </p>

          {/* CTA Button */}
          <div>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-base">
              Request Demo
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mt-8 md:mt-12">
            <img
              src="/images/main-hero-img.png"
              alt="Custom mailer boxes showcase"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-yellow-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-amber-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none" />
    </section>
  )
}
