'use client';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  wedding: string;
  location: string;
  rating: number;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Absolutely stunning work! Every photo captured the emotion and beauty of our special day. The attention to detail and ability to capture candid moments is truly remarkable. We couldn't be happier with our wedding photos.",
    author: 'Sarah & Michael',
    wedding: 'Summer Garden Wedding',
    location: 'Napa Valley, CA',
    rating: 5,
    featured: true
  },
  {
    id: '2',
    quote: "Professional, artistic, and so easy to work with. Our photos exceeded all expectations. The photographer made us feel completely at ease, and the results speak for themselves.",
    author: 'Emma & James',
    wedding: 'Beachside Celebration',
    location: 'Malibu, CA',
    rating: 5,
    featured: true
  },
  {
    id: '3',
    quote: "The attention to detail and ability to capture candid moments is truly remarkable. We received so many compliments on our photos, and we'll treasure them forever.",
    author: 'Olivia & David',
    wedding: 'Vintage Estate Wedding',
    location: 'Sonoma, CA',
    rating: 5,
    featured: true
  },
  {
    id: '4',
    quote: "From the engagement session to the wedding day, everything was perfect. The photographer understood our vision and brought it to life beautifully.",
    author: 'Sophia & Ryan',
    wedding: 'Modern City Hall',
    location: 'San Francisco, CA',
    rating: 5
  },
  {
    id: '5',
    quote: "We were blown away by the quality and artistry of our wedding photos. Every image tells a story, and we're so grateful to have these memories captured so beautifully.",
    author: 'Isabella & Matthew',
    wedding: 'Rustic Barn Wedding',
    location: 'Yosemite, CA',
    rating: 5
  },
  {
    id: '6',
    quote: "The photographer was professional, creative, and incredibly talented. Our wedding album is a work of art that we'll cherish for generations to come.",
    author: 'Amelia & Christopher',
    wedding: 'Luxury Hotel Ballroom',
    location: 'Los Angeles, CA',
    rating: 5
  },
];

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const allTestimonials = testimonials;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Client Testimonials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from couples who trusted us to capture their most precious moments
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <div className="flex text-accent-gold mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-foreground text-lg mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">{testimonial.wedding}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Testimonials */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            All Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div className="flex text-accent-gold mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-foreground mb-1">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.wedding}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-accent-rose to-accent-lavender rounded-lg p-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join our family of happy couples and let us capture your special day
          </p>
          <a
            href="/booking"
            className="inline-block px-10 py-5 bg-white text-accent-rose rounded-md hover:bg-gray-100 transition-all font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Your Wedding
          </a>
        </div>
      </div>
    </div>
  );
}





