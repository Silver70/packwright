import { useEffect, useState } from 'react'

interface PackageMockupProps {
  productType: string
  material: string
  designUrl: string | null
  printingType: string
}

export function PackageMockup({ productType, material, designUrl, printingType }: PackageMockupProps) {
  const [rotation, setRotation] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  // Get material color
  const getMaterialColor = () => {
    switch (material) {
      case 'kraft':
        return '#D4A574'
      case 'rigid':
        return '#FFFFFF'
      case 'eco-friendly':
        return '#C4B5A0'
      case 'premium':
        return '#F8F8F8'
      default:
        return '#E8DCC8'
    }
  }

  // Get box shape based on type
  const getBoxDimensions = () => {
    switch (productType) {
      case 'mailer-box':
        return { width: 280, height: 240, depth: 180 }
      case 'shipping-box':
        return { width: 300, height: 260, depth: 200 }
      case 'product-box':
        return { width: 260, height: 220, depth: 160 }
      case 'gift-box':
        return { width: 240, height: 200, depth: 140 }
      case 'rigid-box':
        return { width: 260, height: 240, depth: 160 }
      default:
        return { width: 280, height: 240, depth: 180 }
    }
  }

  const dimensions = getBoxDimensions()
  const materialColor = getMaterialColor()
  const hasDesign = designUrl !== null
  const isPrinted = printingType !== 'no-printing'

  return (
    <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <div
        className="relative transition-transform duration-300 hover:scale-105 cursor-pointer"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          transformStyle: 'preserve-3d',
          transform: isHovered ? `rotateY(${rotation}deg)` : 'rotateY(-25deg) rotateX(10deg)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setRotation(0)
        }}
      >
        {/* Main Box Body */}
        <div
          className="absolute inset-0 rounded-lg shadow-2xl"
          style={{
            backgroundColor: materialColor,
            transform: `translateZ(${dimensions.depth / 2}px)`,
            backgroundImage: hasDesign && designUrl
              ? `url(${designUrl})`
              : isPrinted
                ? 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)'
                : 'none',
            backgroundSize: hasDesign ? 'cover' : 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Texture overlay for corrugated effect */}
          {material === 'corrugated' && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
              }}
            />
          )}

          {/* Box flaps detail */}
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-black/10" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-black/10" />

          {/* Brand placeholder if no design */}
          {!hasDesign && isPrinted && (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/30 rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Your Design Here</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div
          className="absolute inset-0 rounded-r-lg"
          style={{
            backgroundColor: materialColor,
            filter: 'brightness(0.85)',
            transform: `rotateY(90deg) translateZ(${dimensions.width - dimensions.depth / 2}px)`,
            width: dimensions.depth,
            transformOrigin: 'right',
          }}
        >
          {material === 'corrugated' && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
              }}
            />
          )}
        </div>

        {/* Top Side */}
        <div
          className="absolute inset-0 rounded-t-lg"
          style={{
            backgroundColor: materialColor,
            filter: 'brightness(0.95)',
            transform: `rotateX(90deg) translateZ(${dimensions.height - dimensions.depth / 2}px)`,
            height: dimensions.depth,
            transformOrigin: 'top',
          }}
        >
          {/* Top flap seam */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-black/10" />
        </div>
      </div>

      {/* Hover hint */}
      {!isHovered && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">
          Hover to rotate
        </div>
      )}
    </div>
  )
}
