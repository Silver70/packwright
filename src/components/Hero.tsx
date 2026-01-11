export function Hero() {
  const cards = [
    { img: '/images/mailer 0.png', bg: '#D4F1F4' },
    { img: '/images/mailer 1.png', bg: '#D4E4F7' },
    { img: '/images/mailer 2.png', bg: '#D4E4F7' },
    { img: '/images/mailer 3.png', bg: '#C7B8EA' },
  ]

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center" style={{ backgroundColor: '#FFFEF9' }}>
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 ">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
            <span className="text-secondary">Custom Mailer Boxes for</span>
            <br />
            <span className="text-secondary">Ecommerce & DTC Brands</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            We help growing ecommerce brands design, produce, and ship
            branded packaging without middlemen.
          </p>

          {/* CTA Button */}
          <div>
            <button className="bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors text-base">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Hero Cards Ticker - Full Width */}
      <div className="relative w-screen overflow-hidden mt-8 md:mt-12">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="flex animate-scroll">
          {/* Duplicate the cards array twice for seamless loop */}
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 shrink-0 mx-3"
              style={{ backgroundColor: card.bg, width: '280px', height: '280px' }}
            >
              <div className="w-full h-full p-6 flex items-center justify-center">
                <img
                  src={card.img}
                  alt="Custom mailer box"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
