'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Authentic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Warm Natural Gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
                var(--yellow-light) 0%,
                transparent 50%),
              linear-gradient(to bottom,
                var(--white-warm) 0%,
                var(--stone-light) 100%)
            `
          }}
        />

        {/* Hero Image with Warm Overlay - TO BE REPLACED WITH REAL PHOTO */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-30 transition-opacity duration-1000"
            style={{ backgroundImage: "url('/images/hero/bg-warm.png')" }}
          />
        </div>

        {/* Floating Organic Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow/20 rounded-full animate-float blur-[1px]"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Authentic Badge - YELLOW TOUCH */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-2 mb-8 bg-yellow/20 backdrop-blur-sm border border-yellow/40 rounded-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Sparkles size={16} className="text-yellow-dark fill-yellow-dark" />
            <span className="text-sm font-serif italic text-text-primary font-medium">Artigiani del gusto a Bassano dal 2017</span>
          </div>

          {/* Main Headline - AUTHENTIC & WARM */}
          <h1
            className={`text-display text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] transition-all duration-1200 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <span className="block text-text-primary">
              Il Gusto della Terra,
            </span>
            <span className="block text-yellow italic font-serif mt-2">
              Senza Compromessi.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl mb-12 font-serif text-text-light max-w-2xl mx-auto leading-relaxed transition-all duration-1200 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Cucina artigianale, ingredienti biologici e un'anima{' '}
            <span className="text-yellow-dark font-medium underline decoration-yellow/30 underline-offset-4">100% Gluten-Free</span>.
            <br className="hidden md:block" />
            Benvenuti a casa, nel cuore di Bassano del Grappa.
          </p>

          {/* CTA Buttons - Warm & Inviting */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1200 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <a
              href="https://wa.me/393273180556"
              className="group relative w-full sm:w-auto px-10 py-4 bg-[#e9ba3f] hover:bg-[#d4a017] text-stone-900 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-warm hover:shadow-float hover:-translate-y-1"
            >
              <span>Prenota un Tavolo</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+390424522000"
              className="group w-full sm:w-auto px-10 py-4 bg-white/60 hover:bg-white border border-stone text-text-primary rounded-full font-serif italic text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:border-yellow/50"
            >
              <Phone size={18} className="text-text-secondary group-hover:text-yellow-dark transition-colors" />
              <span>0424 522000</span>
            </a>
          </div>

          {/* Values - Authentic Tags */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-16 transition-all duration-1200 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {['Biologico Certificato', '100% Gluten-Free', 'Lievitazioni Naturali', 'Filiera Corta'].map((tag, index) => (
              <div
                key={tag}
                className="px-6 py-2 bg-stone-light/50 border border-stone-light rounded-full text-sm font-medium text-text-secondary hover:text-yellow-dark hover:border-yellow/30 transition-colors cursor-default"
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warm Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-serif italic tracking-widest text-text-light">
            La nostra storia
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-yellow to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
