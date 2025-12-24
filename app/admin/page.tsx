'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'dashboard' | 'galleries' | 'packages' | 'testimonials' | 'enquiries';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your portfolio, packages, testimonials, and enquiries
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-wrap border-b border-gray-200">
            {[
              { id: 'dashboard' as Tab, label: 'Dashboard', icon: '📊' },
              { id: 'galleries' as Tab, label: 'Galleries', icon: '🖼️' },
              { id: 'packages' as Tab, label: 'Packages', icon: '💼' },
              { id: 'testimonials' as Tab, label: 'Testimonials', icon: '⭐' },
              { id: 'enquiries' as Tab, label: 'Enquiries', icon: '📧' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-accent-rose text-accent-rose'
                    : 'border-transparent text-gray-600 hover:text-foreground'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'dashboard' && <DashboardTab />}
            {activeTab === 'galleries' && <GalleriesTab />}
            {activeTab === 'packages' && <PackagesTab />}
            {activeTab === 'testimonials' && <TestimonialsTab />}
            {activeTab === 'enquiries' && <EnquiriesTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardTab() {
  const stats = [
    { label: 'Total Galleries', value: '12', change: '+2 this month' },
    { label: 'Active Packages', value: '3', change: 'All active' },
    { label: 'Pending Testimonials', value: '5', change: '2 pending approval' },
    { label: 'New Enquiries', value: '8', change: 'This week' },
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="font-serif text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Quick Start Guide</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Upload new wedding galleries to showcase your work</li>
          <li>• Update package pricing and features as needed</li>
          <li>• Review and approve client testimonials</li>
          <li>• Respond to booking enquiries promptly</li>
        </ul>
      </div>
    </div>
  );
}

function GalleriesTab() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Photo Galleries</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="px-6 py-2 bg-accent-rose text-white rounded-md hover:bg-accent-rose/90 transition-colors font-medium"
        >
          + Add New Gallery
        </button>
      </div>

      {isAdding ? (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-foreground mb-4">Add New Gallery</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gallery Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none"
                placeholder="Elegant Garden Wedding"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme/Category
              </label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none">
                <option>Garden</option>
                <option>Beach</option>
                <option>Vintage</option>
                <option>Modern</option>
                <option>Rustic</option>
                <option>Luxury</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-accent-rose focus:outline-none"
                placeholder="2024"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400">PNG, JPG up to 10MB each</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-accent-rose text-white rounded-md hover:bg-accent-rose/90 transition-colors font-medium"
              >
                Save Gallery
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-6 py-2 border-2 border-gray-200 rounded-md hover:border-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-4">
          {[
            { title: 'Elegant Garden Wedding', theme: 'Garden', year: '2024', images: 45 },
            { title: 'Beachside Celebration', theme: 'Beach', year: '2024', images: 52 },
            { title: 'Vintage Estate Wedding', theme: 'Vintage', year: '2023', images: 38 },
          ].map((gallery, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground mb-1">{gallery.title}</h3>
                <p className="text-sm text-gray-600">{gallery.theme} • {gallery.year} • {gallery.images} images</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm border-2 border-gray-200 rounded-md hover:border-gray-300 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PackagesTab() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Packages</h2>
        <button className="px-6 py-2 bg-accent-rose text-white rounded-md hover:bg-accent-rose/90 transition-colors font-medium">
          + Add New Package
        </button>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Essential', price: 2500, features: 4 },
          { name: 'Classic', price: 4500, features: 6, popular: true },
          { name: 'Luxury', price: 7500, features: 8 },
        ].map((pkg, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground text-lg">{pkg.name}</h3>
                  {pkg.popular && (
                    <span className="px-2 py-1 bg-accent-rose text-white text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-accent-rose">${pkg.price.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm border-2 border-gray-200 rounded-md hover:border-gray-300 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600">{pkg.features} features included</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsTab() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Testimonials</h2>
        <button className="px-6 py-2 bg-accent-rose text-white rounded-md hover:bg-accent-rose/90 transition-colors font-medium">
          + Add New Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {[
          { author: 'Sarah & Michael', quote: 'Absolutely stunning work!', status: 'approved', featured: true },
          { author: 'Emma & James', quote: 'Professional and artistic...', status: 'approved', featured: true },
          { author: 'New Client', quote: 'Great experience!', status: 'pending', featured: false },
        ].map((testimonial, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{testimonial.author}</h3>
                  {testimonial.status === 'pending' && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Pending
                    </span>
                  )}
                  {testimonial.featured && (
                    <span className="px-2 py-1 bg-accent-rose text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
              </div>
              <div className="flex gap-2">
                {testimonial.status === 'pending' && (
                  <button className="px-4 py-2 text-sm bg-green-50 text-green-600 rounded-md hover:bg-green-100 transition-colors">
                    Approve
                  </button>
                )}
                <button className="px-4 py-2 text-sm border-2 border-gray-200 rounded-md hover:border-gray-300 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnquiriesTab() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Booking Enquiries</h2>

      <div className="space-y-4">
        {[
          { name: 'John & Jane Doe', email: 'john@example.com', date: '2024-06-15', package: 'Classic', status: 'new' },
          { name: 'Alice & Bob Smith', email: 'alice@example.com', date: '2024-07-20', package: 'Luxury', status: 'contacted' },
          { name: 'Charlie & Diana', email: 'charlie@example.com', date: '2024-08-10', package: 'Essential', status: 'new' },
        ].map((enquiry, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">{enquiry.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{enquiry.email}</p>
                <p className="text-sm text-gray-500">Wedding Date: {enquiry.date} • Package: {enquiry.package}</p>
              </div>
              <div className="flex gap-2">
                {enquiry.status === 'new' && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    New
                  </span>
                )}
                <button className="px-4 py-2 text-sm border-2 border-gray-200 rounded-md hover:border-gray-300 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


