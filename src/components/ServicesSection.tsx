export function ServicesSection() {
  const services = [
    {
      title: 'Custom printed',
      subtitle: 'mailer boxes',
    },
    {
      title: 'Branded shipping',
      subtitle: 'boxes with logo',
    },
    {
      title: 'Subscription',
      subtitle: 'box mailers',
    },
    {
      title: 'Corrugated and kraft',
      subtitle: 'mailer boxes',
    },
    {
      title: 'Recycled & eco-friendly',
      subtitle: 'mailer boxes',
    },
    {
      title: 'Custom sizes, inserts,',
      subtitle: '& finishes',
    },
  ]

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We <span className="text-amber-400">can</span> help you{' '}
            <span className="text-amber-400">get</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-amber-400 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full flex items-center justify-center p-8 pt-10">
                <div className="w-24 h-24 sm:w-28 sm:h-28">
                  <img
                    src="/images/Mailer Boxes 1.png"
                    alt={`${service.title} ${service.subtitle}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="p-6 pt-4 flex-1 flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center leading-snug">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
