export function TrustedSection() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <img
                src="/images/trusted.png"
                alt="Trusted packaging boxes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Trusted Packaging
              Sourcing for <span className="text-primary">Growing Brands</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl">
              Whether you're launching a new product or scaling your ecommerce
              operation, we help you source high-quality, custom mailer boxes
              that match your brand, budget, and timeline.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle decorative blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-15 pointer-events-none" />
    </section>
  )
}
