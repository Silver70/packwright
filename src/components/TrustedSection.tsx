export function TrustedSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Sourcing for <span className="text-amber-400">Growing Brands</span> 
            </h2>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl">
              Whether you're launching a new product or scaling your ecommerce
              operation, we help you source high-quality, custom mailer boxes
              that match your brand, budget, and timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
