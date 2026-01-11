import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { PackageMockup } from './PackageMockup'
import { Upload } from 'lucide-react'

interface QuoteFormData {
  fullName: string
  email: string
  phone: string
  companyName: string
  productType: string
  material: string
  length: string
  width: string
  height: string
  quantity: string
  printingRequirements: string
  deliveryCountry: string
  timeline: string
  designFile: File | null
}

export function QuoteForm() {
  const [uploadedDesign, setUploadedDesign] = useState<string | null>(null)
  const [previewDesignUrl, setPreviewDesignUrl] = useState<string | null>(null)

  const form = useForm<QuoteFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      productType: 'mailer-box',
      material: 'corrugated',
      length: '',
      width: '',
      height: '',
      quantity: '500-1000',
      printingRequirements: 'full-color',
      deliveryCountry: '',
      timeline: '4-6-weeks',
      designFile: null,
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value)
      // TODO: Handle form submission
      alert('Quote request submitted! We will contact you shortly.')
    },
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      form.setFieldValue('designFile', file)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setUploadedDesign(result)
        setPreviewDesignUrl(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Request Your Custom Quote
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and see your packaging come to life in real-time.
            We'll get back to you within 24 hours with a detailed quote.
          </p>
        </div>

        {/* Main Content - Form + Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
              }}
            >
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-primary">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <form.Field name="fullName">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="email">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="phone">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="companyName">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="Your Company Inc."
                          required
                        />
                      </div>
                    )}
                  </form.Field>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-primary">
                  Product Specifications
                </h2>
                <div className="space-y-4">
                  <form.Field name="productType">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Type *
                        </label>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          required
                        >
                          <option value="mailer-box">Mailer Box</option>
                          <option value="shipping-box">Shipping Box</option>
                          <option value="product-box">Product Box</option>
                          <option value="gift-box">Gift Box</option>
                          <option value="rigid-box">Rigid Box</option>
                        </select>
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="material">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Material *
                        </label>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          required
                        >
                          <option value="corrugated">Corrugated Cardboard</option>
                          <option value="kraft">Kraft Paper</option>
                          <option value="rigid">Rigid Cardboard</option>
                          <option value="eco-friendly">Eco-Friendly Material</option>
                          <option value="premium">Premium Cardstock</option>
                        </select>
                      </div>
                    )}
                  </form.Field>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions (L × W × H) *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <form.Field name="length">
                        {(field) => (
                          <input
                            type="number"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="L (in)"
                            required
                          />
                        )}
                      </form.Field>
                      <form.Field name="width">
                        {(field) => (
                          <input
                            type="number"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="W (in)"
                            required
                          />
                        )}
                      </form.Field>
                      <form.Field name="height">
                        {(field) => (
                          <input
                            type="number"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="H (in)"
                            required
                          />
                        )}
                      </form.Field>
                    </div>
                  </div>

                  <form.Field name="quantity">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity *
                        </label>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          required
                        >
                          <option value="100-500">100 - 500 units</option>
                          <option value="500-1000">500 - 1,000 units</option>
                          <option value="1000-5000">1,000 - 5,000 units</option>
                          <option value="5000+">5,000+ units</option>
                        </select>
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="printingRequirements">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Printing Requirements *
                        </label>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          required
                        >
                          <option value="full-color">Full Color CMYK</option>
                          <option value="1-2-colors">1-2 Colors</option>
                          <option value="black-white">Black & White</option>
                          <option value="no-printing">No Printing</option>
                        </select>
                      </div>
                    )}
                  </form.Field>
                </div>
              </div>

              {/* Delivery & Timeline */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-primary">
                  Delivery & Timeline
                </h2>
                <div className="space-y-4">
                  <form.Field name="deliveryCountry">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Target Delivery Country *
                        </label>
                        <input
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="United States"
                          required
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="timeline">
                    {(field) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline *
                        </label>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          required
                        >
                          <option value="2-3-weeks">Rush (2-3 weeks)</option>
                          <option value="4-6-weeks">Standard (4-6 weeks)</option>
                          <option value="6-8-weeks">Flexible (6-8 weeks)</option>
                          <option value="8+-weeks">No Rush (8+ weeks)</option>
                        </select>
                      </div>
                    )}
                  </form.Field>
                </div>
              </div>

              {/* Design Upload */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-primary">
                  Design Upload
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Your Design (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*,.pdf,.ai"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="design-upload"
                      />
                      <label htmlFor="design-upload" className="cursor-pointer">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                        <p className="text-gray-600 mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          PNG, JPG, PDF, or AI (MAX. 10MB)
                        </p>
                        {uploadedDesign && (
                          <p className="text-sm text-primary mt-2 font-medium">
                            Design uploaded successfully!
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Request Quote
              </button>
            </form>
          </div>

          {/* Mockup Preview Section */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-primary">
                Live Preview
              </h2>
              <PackageMockup
                productType={form.getFieldValue('productType')}
                material={form.getFieldValue('material')}
                designUrl={previewDesignUrl}
                printingType={form.getFieldValue('printingRequirements')}
              />
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Your Specifications:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <span className="font-medium">Type:</span>{' '}
                    {form.getFieldValue('productType').replace('-', ' ')}
                  </li>
                  <li>
                    <span className="font-medium">Material:</span>{' '}
                    {form.getFieldValue('material')}
                  </li>
                  {form.getFieldValue('length') && form.getFieldValue('width') && form.getFieldValue('height') && (
                    <li>
                      <span className="font-medium">Dimensions:</span>{' '}
                      {form.getFieldValue('length')} × {form.getFieldValue('width')} × {form.getFieldValue('height')} inches
                    </li>
                  )}
                  <li>
                    <span className="font-medium">Quantity:</span>{' '}
                    {form.getFieldValue('quantity')} units
                  </li>
                  <li>
                    <span className="font-medium">Timeline:</span>{' '}
                    {form.getFieldValue('timeline').replace('-', ' ')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
