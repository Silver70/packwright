import { Palette, Tag, RefreshCw, Package, Leaf, Settings } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: 'Custom printed',
      subtitle: 'mailer boxes',
      icon: Palette,
    },
    {
      title: 'Branded shipping',
      subtitle: 'boxes with logo',
      icon: Tag,
    },
    {
      title: 'Subscription',
      subtitle: 'box mailers',
      icon: RefreshCw,
    },
    {
      title: 'Corrugated and kraft',
      subtitle: 'mailer boxes',
      icon: Package,
    },
    {
      title: 'Recycled & eco-friendly',
      subtitle: 'mailer boxes',
      icon: Leaf,
    },
    {
      title: 'Custom sizes, inserts,',
      subtitle: '& finishes',
      icon: Settings,
    },
  ]

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We <span className="text-primary">can</span> help you{' '}
            <span className="text-primary">get</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
