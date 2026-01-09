export function WhyChooseUsSection() {
  const leftPoints = [
    {
      title: 'Direct manufacturer access',
      description:
        'We work directly with trusted manufacturers—no wholesalers or trading platforms',
    },
    {
      title: 'Vetted suppliers',
      description:
        'Factories screened for quality, capacity, and reliability',
    },
  ]

  const rightPoints = [
    {
      title: 'Transparent pricing',
      description: 'See quotes with no hidden charges',
    },
    {
      title: 'End-to-end coordination',
      description: 'From design to delivery: we manage the logistics',
    },
  ]

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Ecommerce Brands{' '}
            <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Our role is simple: protect your interests while helping you secure
            the right packaging partner.
          </p>
        </div>

        {/* Content Grid - Mobile: Stack, Desktop: 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Points - Desktop only on left, Mobile stacks first */}
          <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
            {leftPoints.map((point, index) => (
              <div key={index} className="text-center lg:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-sm">
              <img
                src="/images/chooseus.png"
                alt="Premium packaging box"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Points */}
          <div className="space-y-8 lg:space-y-12 order-3">
            {rightPoints.map((point, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle decorative blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none -z-0" />
    </section>
  )
}
