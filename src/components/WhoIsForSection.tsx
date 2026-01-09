export function WhoIsForSection() {
  const badges = [
    'Shopify & DTC brands',
    'Subscription box startups',
    'Amazon FBA sellers',
    'Kickstarter/crowdfunding campaigns',
    'B2B gifting companies',
  ]

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who This Service Is <span className="text-primary">For</span>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* First Row - 3 badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {badges.slice(0, 3).map((badge, index) => (
              <div
                key={index}
                className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* Second Row - 2 badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {badges.slice(3, 5).map((badge, index) => (
              <div
                key={index}
                className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
