"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Transition point: When user scrolls past 80% of the viewport height
      const threshold = window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Il Menù' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out will-change-transform ${isScrolled || isMobileMenuOpen
          ? 'bg-stone-50/95 backdrop-blur-xl shadow-md py-3 border-b border-stone-200/50 translate-y-0'
          : 'bg-transparent py-6 translate-y-0' // Changed from absolute to fixed to keep it valid in Hero
          }`}
        style={{
          // Optional: If we wanted to hide it during scroll, we could play with translate. 
          // For now, let's keep it simple: Pure transparent -> Pure White
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <div className="flex-shrink-0 z-50">
              <Link
                href="/"
                className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`p-2 rounded-full transition-all duration-500 ${isScrolled ? 'bg-yellow text-stone-900' : 'bg-white/10 backdrop-blur-md text-[#FFC107]'}`}>
                  <Sparkles size={20} className={isScrolled ? 'animate-none' : 'animate-pulse'} />
                </div>
                <div className="flex flex-col">
                  <span className={`font-display text-2xl font-bold tracking-wider leading-none transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-white drop-shadow-md'
                    }`}>
                    FERMENTERIA
                  </span>
                  <span className={`text-[0.65rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-stone-500' : 'text-stone-200 drop-shadow-sm'
                    }`}>
                    Bassano del Grappa
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 outline-none focus:outline-none ${isScrolled
                      ? (isActive(link.href) ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900')
                      : (isActive(link.href) ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107] drop-shadow-sm')
                      }`}
                  >
                    {link.label}
                    {/* Active State Indicator (Dot) */}
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFC107] transition-all duration-300 ${isActive(link.href) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`} />
                  </Link>
                ))}
              </div>

              {/* Call to Action */}
              <Link
                href="https://wa.me/393273180556"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-7 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 overflow-hidden outline-none focus:ring-2 focus:ring-yellow/50 focus:ring-offset-2 ${isScrolled
                  ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg'
                  : 'bg-[#FFC107] text-stone-900 hover:bg-white hover:text-stone-900 shadow-[0_0_15px_rgba(255,193,7,0.3)]'
                  }`}
              >
                <span className="relative z-10">Prenota Ora</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 transition-colors duration-300 outline-none ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'
                  }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-50/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="flex flex-col space-y-8 text-center relative z-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMobileMenu}
              className={`text-4xl font-serif font-medium text-stone-800 hover:text-stone-900 transition-all duration-300 transform outline-none ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <span className={`relative ${isActive(link.href) ? 'text-stone-900' : ''}`}>
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow" />
                )}
              </span>
            </Link>
          ))}

          <div
            className={`pt-8 transform transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
          >
            <Link
              href="https://wa.me/393273180556"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow text-stone-900 rounded-full font-bold text-lg shadow-warm hover:scale-105 transition-transform"
            >
              <span>Prenota un Tavolo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;