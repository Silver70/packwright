import { ClipboardCheck, FileSearch, CheckCircle, Truck } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Share your packaging requirements',
      description:
        'Tell us about your product, quantities, timeline, and customization preferences',
    },
    {
      icon: FileSearch,
      title: 'We source & quote',
      description:
        "We work with our vetted manufacturers and send you detailed quotes and samples for review",
    },
    {
      icon: CheckCircle,
      title: 'Sampling & approval',
      description:
        'You get physical samples (at cost or free depending on customization)',
    },
    {
      icon: Truck,
      title: 'Production & delivery',
      description:
        'We coordinate manufacturing, quality control, and shipment to your door',
    },
  ]

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How it <span className="text-primary">works</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left side - 2x2 grid of steps */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-slate-100 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right side - Large card with image */}
          <div className="lg:row-span-1 bg-primary rounded-xl overflow-hidden flex flex-col min-h-100 lg:min-h-full">
            <div className="p-8 md:p-10 flex items-center justify-center shrink-0">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                we got you
              </h3>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img
                src="/images/delivery-girl.png"
                alt="We got you covered"
                className="w-full max-w-md h-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
