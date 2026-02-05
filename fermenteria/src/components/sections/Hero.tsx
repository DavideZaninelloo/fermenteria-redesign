import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Placeholder for Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
        <div className="w-full h-full bg-[url('/hero-placeholder.jpg')] bg-cover bg-center bg-zinc-800" />
        {/* Note: User will need to add hero-placeholder.jpg to public folder or replace URL */}
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
            Il Gusto della Terra,<br />
            <span className="italic text-accent">Senza Compromessi.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Cucina artigianale, ingredienti biologici e un'anima 100% Gluten-Free nel cuore di Bassano del Grappa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/393273180556"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              Prenota un Tavolo <ArrowRight size={20} />
            </a>
            
            <a 
              href="tel:+390424522000" // Placeholder phone
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Chiama Ora
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
