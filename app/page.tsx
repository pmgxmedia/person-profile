import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section - Moody & Edgy */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark background with texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Decorative line above */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-rust to-transparent"></div>
            <div className="mx-4 text-accent-rust text-sm tracking-widest">EST. 2020</div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-rust to-transparent"></div>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal text-[#e5e5e5] mb-6 leading-none tracking-wider">
            KERN
            <br />
            <span className="text-accent-rust">&</span>
            <br />
            INK
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4 font-light tracking-wide">
            MOODY • EDGY • RAW
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Capturing authentic moments through a lens of vintage rust and modern grit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/portfolio"
              className="group relative px-10 py-4 border-2 border-accent-rust text-[#e5e5e5] hover:bg-accent-rust transition-all duration-300 font-medium text-sm tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-accent-rust transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              href="/booking"
              className="px-10 py-4 bg-transparent border-2 border-[#e5e5e5]/30 text-[#e5e5e5] hover:border-[#e5e5e5] transition-all duration-300 font-medium text-sm tracking-widest uppercase"
            >
              Book Session
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-accent-rust to-transparent"></div>
        </div>
      </section>

      {/* About Section - Moody & Textured */}
      <section className="relative py-32 bg-[#0f0f0f] border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-accent-rust text-sm tracking-widest uppercase">About</span>
                <div className="h-px w-16 bg-accent-rust mt-2"></div>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-[#e5e5e5] mb-6 leading-tight">
                RAW STORYTELLING
                <br />
                <span className="text-accent-rust">MEETS ART</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                We don't just take photos—we craft visual narratives. Every frame tells a story, 
                every shadow holds emotion, every moment is captured with intention.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Specializing in moody, edgy, and authentic photography. From vintage rustic vibes 
                to dark academia aesthetics, we bring your vision to life through our unique lens.
              </p>
              <Link
                href="/portfolio"
                className="inline-block text-accent-rust hover:text-accent-amber transition-colors font-medium text-sm tracking-widest uppercase"
              >
                Explore Our Work →
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display text-accent-rust/30 mb-4">"</div>
                  <p className="text-gray-400 italic text-lg mb-4">
                    Photography is the art of making memories tangible
                  </p>
                  <div className="text-6xl font-display text-accent-rust/30 rotate-180">"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Moody Grid */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-accent-rust text-sm tracking-widest uppercase">Portfolio</span>
              <div className="h-px w-16 bg-accent-rust mt-2 mx-auto"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[#e5e5e5] mb-4">
              RECENT WORK
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A glimpse into our moody, artistic world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: 'Dark Academia', category: 'Portrait', year: '2024' },
              { title: 'Vintage Rustic', category: 'Wedding', year: '2024' },
              { title: 'Moody Streets', category: 'Urban', year: '2024' },
            ].map((project, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="group relative aspect-[4/5] overflow-hidden border border-[#1a1a1a] hover:border-accent-rust transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl font-display text-accent-rust/20 mb-4 group-hover:text-accent-rust/40 transition-colors">
                      {i + 1}
                    </div>
                    <div className="h-px w-12 bg-accent-rust/30 mx-auto mb-4"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-accent-rust text-xs tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="font-display text-2xl text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.year}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block px-10 py-4 border-2 border-accent-rust text-[#e5e5e5] hover:bg-accent-rust transition-all duration-300 font-medium text-sm tracking-widest uppercase"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark & Moody */}
      <section className="py-32 bg-[#0f0f0f] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-accent-rust text-sm tracking-widest uppercase">Testimonials</span>
              <div className="h-px w-16 bg-accent-rust mt-2 mx-auto"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[#e5e5e5] mb-4">
              CLIENT WORDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "Absolutely stunning work. The moody, artistic approach captured our essence perfectly.",
                author: "Sarah & Michael",
                project: "Dark Academia Session"
              },
              {
                quote: "Raw, authentic, and beautifully edgy. Every frame tells a story.",
                author: "Emma & James",
                project: "Vintage Rustic Wedding"
              },
              {
                quote: "They don't just take photos—they create art. Truly remarkable vision.",
                author: "Olivia & David",
                project: "Moody Portrait Series"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 hover:border-accent-rust/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex text-accent-rust mb-4 text-lg">
                    {'★★★★★'.split('').map((star, j) => (
                      <span key={j}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-[#1a1a1a] pt-4">
                  <p className="font-semibold text-[#e5e5e5] mb-1">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-block px-10 py-4 border-2 border-accent-rust text-[#e5e5e5] hover:bg-accent-rust transition-all duration-300 font-medium text-sm tracking-widest uppercase"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Moody & Bold */}
      <section className="relative py-32 bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="font-display text-5xl md:text-7xl text-[#e5e5e5] mb-6 leading-tight">
            READY TO CREATE
            <br />
            <span className="text-accent-rust">SOMETHING RAW?</span>
          </h2>
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let's craft your story through moody, authentic imagery that speaks to your soul.
          </p>
          <Link
            href="/booking"
            className="inline-block px-12 py-5 bg-accent-rust text-[#e5e5e5] hover:bg-accent-terracotta transition-all duration-300 font-medium text-sm tracking-widest uppercase shadow-lg hover:shadow-xl"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  );
}
