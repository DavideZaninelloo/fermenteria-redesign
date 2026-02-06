'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs for direct DOM manipulation (High Performance)
  const heroRef = React.useRef<HTMLDivElement>(null);
  const bgRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const vignetteRef = React.useRef<HTMLDivElement>(null);

  // Physics state for smooth lighting (Lerp)
  const mouseRef = React.useRef({ x: 50, y: 50 }); // Target position
  const lightRef = React.useRef({ x: 50, y: 50 }); // Current interpolated position

  useEffect(() => {
    setIsLoaded(true);

    let requestID: number;
    let currentScroll = 0;

    // The Loop
    const animate = () => {
      // 1. Scroll Physics
      const scrollY = window.scrollY;

      // Only update if visible (Optimization)
      if (scrollY < window.innerHeight * 1.5) {
        currentScroll = scrollY;

        // Parallax Transforms
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${currentScroll * 0.4}px, 0) scale(1.1)`;
        }

        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${currentScroll * 0.15}px, 0)`;
          contentRef.current.style.opacity = `${Math.max(0, 1 - currentScroll / 700)}`;
        }

        // 2. Light Physics (Lerp)
        // Move current light position 10% towards target mouse position every frame
        // This creates the "weighty", professional lag effect
        lightRef.current.x += (mouseRef.current.x - lightRef.current.x) * 0.08;
        lightRef.current.y += (mouseRef.current.y - lightRef.current.y) * 0.08;

        if (vignetteRef.current) {
          vignetteRef.current.style.background = `
              radial-gradient(
                circle at ${lightRef.current.x}% ${lightRef.current.y}%, 
                rgba(255, 193, 7, 0.12) 0%, 
                transparent 25%
              ),
              linear-gradient(
                to bottom, 
                rgba(28, 25, 23, 0.4) 0%, 
                rgba(28, 25, 23, 0.5) 50%, 
                rgba(28, 25, 23, 0.9) 100%
              )
           `;
        }
      }

      requestID = requestAnimationFrame(animate);
    };

    // Start Loop
    requestID = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      // Just update target, no re-render
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* 1. Base Image with Parallax & Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform scale-110 blur-sm"
          style={{
            backgroundImage: "url('/images/hero/hero2.png')",
            // transform set by JS
          }}
        />
      </div>

      {/* 2. Film Grain / Noise Overlay (The "Artisanal" Texture) */}
      <div
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Cinematic Vignette & Dynamic Gradient */}
      <div className="absolute inset-0 z-[2]">
        <div
          ref={vignetteRef}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            // Initial State (Updated by JS)
            background: `
              radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 25%),
              linear-gradient(to bottom, rgba(28, 25, 23, 0.4) 0%, rgba(28, 25, 23, 0.8) 100%)
            `
          }}
        />
      </div>

      {/* 4. Floating Organic Particles (Subtler) */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow/30 rounded-full animate-float blur-[2px]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 4) * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-12">
        <div
          ref={contentRef}
          className="max-w-5xl mx-auto will-change-transform"
        // transform set by JS
        >

          {/* Authentic Badge */}
          <div
            className={`inline-flex items-center gap-3 px-6 py-2.5 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full transition-all duration-1000 group hover:bg-white/10 cursor-default ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Sparkles size={14} className="text-yellow animate-pulse" />
            <span className="text-sm font-serif tracking-wider text-stone-200 uppercase text-[0.7rem]">Bassano del Grappa, 2017</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05] transition-all duration-1000 delay-200 drop-shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <span className="block text-white font-medium tracking-tight">
              Il Gusto della Terra,
            </span>
            <span className="block text-[#FFC107] italic font-serif mt-2 pb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Senza Compromessi.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl mb-14 font-serif text-stone-100 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 drop-shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Cucina artigianale, ingredienti biologici e un'anima{' '}
            <span className="text-[#FFC107] font-medium relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#FFC107]/50">100% Gluten-Free</span>.
            <br className="hidden md:block" />
            Benvenuti a casa.
          </p>

          {/* CTA Buttons - Premium & Clean */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <a
              href="https://wa.me/393273180556"
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#FFC107] hover:bg-[#FFD740] text-stone-900 rounded-full font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(255,193,7,0.4)] hover:shadow-[0_0_30px_rgba(255,193,7,0.6)] overflow-hidden hover:scale-[1.05] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <div className="flex items-center justify-center gap-3 relative z-10">
                <span>Prenota un Tavolo</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="tel:+390424522000"
              className="group w-full sm:w-auto px-10 py-4.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full font-serif text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <Phone size={18} className="text-white/80 group-hover:text-yellow transition-colors" />
              <span>0424 522000</span>
            </a>
          </div>

          {/* Values - Minimalist Tags */}
          <div
            className={`flex flex-wrap justify-center gap-4 mt-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {['Biologico Certificato', '100% Gluten-Free', 'Lievitazioni Naturali', 'Filiera Corta'].map((tag, index) => (
              <div
                key={tag}
                className="px-5 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-stone-300 hover:text-white hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-[fadeIn_2s_ease-out_1.5s_forwards]">
        <div className="flex flex-col items-center gap-3 animate-float">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Scopri
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-yellow/80 to-transparent" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
