'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/booking', label: 'Booking' },
    { href: '/testimonials', label: 'Testimonials' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md border-b border-gray-200' 
        : 'bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <span className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent-rose transition-colors duration-300 tracking-tight">
                TVM-Media24
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-rose to-accent-lavender group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-accent-rose'
                    : 'text-gray-700 hover:text-accent-rose'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-rose to-accent-lavender"></span>
                )}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-rose transition-all duration-300 hover:left-0 hover:w-full -translate-x-1/2 hover:translate-x-0"></span>
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-gray-200">
              <Link
                href="/admin"
                className="px-5 py-2.5 bg-gradient-to-r from-accent-rose to-accent-lavender text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
              >
                Admin
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg text-foreground hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-accent-rose/10 text-accent-rose border-l-4 border-accent-rose'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-accent-rose'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-accent-rose to-accent-lavender text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium text-center"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

