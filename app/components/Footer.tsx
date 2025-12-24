import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Wedding Studio</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Capturing your most precious moments with elegance and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-accent-rose transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-accent-rose transition-colors text-sm">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-accent-rose transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>hello@weddingstudio.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wedding Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}





