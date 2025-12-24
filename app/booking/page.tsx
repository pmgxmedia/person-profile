'use client';

import { useState } from 'react';

interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: '1',
    name: 'Essential',
    price: 2500,
    description: 'Perfect for intimate ceremonies',
    features: [
      '4 hours of coverage',
      '50 edited high-resolution images',
      'Online gallery',
      'Digital download'
    ]
  },
  {
    id: '2',
    name: 'Classic',
    price: 4500,
    description: 'Our most popular package',
    features: [
      '8 hours of coverage',
      '150 edited high-resolution images',
      'Online gallery',
      'Digital download',
      'Engagement session',
      'Photo album (20 pages)'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'Luxury',
    price: 7500,
    description: 'Complete wedding experience',
    features: [
      'Full day coverage (12 hours)',
      '300+ edited high-resolution images',
      'Online gallery',
      'Digital download',
      'Engagement session',
      'Premium photo album (40 pages)',
      'Second photographer',
      'Wedding highlights video'
    ]
  }
];

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        guestCount: '',
        message: ''
      });
      setSelectedPackage(null);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Booking & Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your special day and let's start planning together
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-lg shadow-lg border-2 p-8 transition-all hover:shadow-2xl ${
                pkg.popular
                  ? 'border-accent-rose scale-105'
                  : 'border-gray-200 hover:border-accent-rose'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-rose text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="font-serif text-4xl font-bold text-accent-rose">
                    ${pkg.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-rose mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-3 rounded-md font-medium transition-all ${
                  selectedPackage === pkg.id
                    ? 'bg-accent-rose text-white'
                    : pkg.popular
                    ? 'bg-accent-rose text-white hover:bg-accent-rose/90'
                    : 'border-2 border-accent-rose text-accent-rose hover:bg-accent-rose hover:text-white'
                }`}
              >
                {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
              </button>
            </div>
          ))}
        </div>

        {/* Availability Calendar Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Check Availability
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">
              Real-time availability calendar coming soon. For now, please select your preferred date in the form below.
            </p>
            <div className="grid grid-cols-7 gap-2 mt-6">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center rounded ${
                    i % 7 === 0 || i % 7 === 6
                      ? 'bg-gray-100 text-gray-400'
                      : i === 15
                      ? 'bg-accent-rose text-white font-semibold'
                      : 'bg-white border border-gray-200 hover:border-accent-rose cursor-pointer'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <span className="inline-block w-4 h-4 bg-accent-rose rounded mr-2"></span>
              Available dates highlighted
            </p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below to request a quote or book your consultation
          </p>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl font-bold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700">
                We've received your enquiry and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                    placeholder="John & Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    required
                    value={formData.weddingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                    Venue Location
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision, special requests, or any questions..."
                />
              </div>

              {selectedPackage && (
                <div className="bg-accent-rose/10 border-2 border-accent-rose rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Selected Package:</span>{' '}
                    {packages.find(p => p.id === selectedPackage)?.name} - $
                    {packages.find(p => p.id === selectedPackage)?.price.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-accent-rose text-white rounded-md hover:bg-accent-rose/90 transition-all font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <button
                  type="button"
                  className="px-8 py-4 border-2 border-accent-rose text-accent-rose rounded-md hover:bg-accent-rose hover:text-white transition-all font-medium text-lg"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}





