import React from 'react';
import { Beer, Globe } from 'lucide-react';

const Fermentation = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="fermentazione">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-stone-200 rounded-lg relative overflow-hidden mt-12 shadow-card group">
                <img
                  src="/images/products/radicee.png"
                  alt="Radicée Beer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                  <span className="font-serif italic text-lg text-white font-medium">Radicée (IPA)</span>
                </div>
              </div>
              <div className="aspect-[4/5] bg-stone-100 rounded-lg relative overflow-hidden shadow-card group">
                <img
                  src="/images/products/corn.png"
                  alt="YOU ❤️ CORN Beer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                  <span className="font-serif italic text-lg text-white font-medium">YOU ❤️ CORN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow rounded-full mb-6 shadow-warm">
              <Beer size={16} className="text-stone-900" />
              <span className="text-sm font-bold text-stone-900">Il Nostro Micro-Birrificio</span>
            </div>

            <h2 className="text-display text-4xl md:text-5xl font-serif mb-8 leading-tight text-text-primary">
              L&apos;Arte della <span className="text-yellow italic">Fermentazione</span>
            </h2>

            <p className="text-lg text-text-secondary font-light mb-12 leading-relaxed">
              La fermentazione per noi è vita. Creiamo bevande vive, non pastorizzate,
              che raccontano il nostro territorio attraverso ingredienti inaspettati.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow/10 rounded-full flex items-center justify-center text-yellow-dark group-hover:bg-yellow group-hover:text-white transition-all duration-300">
                  <Beer size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-text-primary">Le Nostre Birre</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Sperimentiamo con coraggio.
                    <strong className="text-text-primary block mt-1">RADICÉE (IPA)</strong>
                    <span className="text-sm text-text-light">L'amaro nobile del radicchio tardivo.</span>
                    <strong className="text-text-primary block mt-1">YOU ❤️ CORN</strong>
                    <span className="text-sm text-text-light">La dolcezza del mais locale, naturalmente senza glutine.</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-light rounded-full flex items-center justify-center text-text-secondary group-hover:bg-yellow/20 group-hover:text-yellow-dark transition-all duration-300">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-text-primary">Vini Naturali & Locali</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Una cantina che parla veneto. Selezioniamo piccoli produttori che come noi
                    mettono la terra al primo posto. Nessuna chimica, solo uva e passione.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fermentation;
