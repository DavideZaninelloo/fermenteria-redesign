'use client';

import React from 'react';
import { Utensils, Leaf, Sparkles, ArrowUpRight } from 'lucide-react';

const Pillar = ({
  icon: Icon,
  title,
  description,
  imageLabel = "Placeholder Image",
  imageSrc,
  index
}: {
  icon: React.ElementType,
  title: string,
  description: string,
  imageLabel?: string,
  imageSrc: string,
  index: number
}) => {
  return (
    <div
      className="group relative h-full perspective-1000"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-200 group-hover:border-[#FFC107] transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_40px_-10px_rgba(255,193,7,0.2)] group-hover:-translate-y-2 h-full flex flex-col overflow-hidden">

        {/* Card Background Noise (Subtle) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-xl group-hover:shadow-lg transition-all duration-500 shrink-0">
          <img
            src={imageSrc}
            alt={imageLabel}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
          />
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-yellow/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating Icon Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Icon size={20} className="text-[#FFC107]" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex flex-col flex-grow relative z-10">
          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl text-stone-900 group-hover:text-[#FFC107] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-stone-600 leading-relaxed text-lg font-serif flex-grow group-hover:text-stone-800 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Decorative Corner */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#FFC107]/10 rounded-full blur-2xl group-hover:bg-[#FFC107]/20 transition-all duration-500" />
      </div>
    </div>
  );
};

const Pillars = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white-warm">
      {/* Decorative Elements - Only Yellow (Restored) */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-yellow-light/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-stone-100/80 backdrop-blur-sm rounded-full border border-stone-200 mb-8 shadow-sm">
            <Sparkles size={14} className="text-[#FFC107]" />
            <span className="text-xs font-bold tracking-widest uppercase text-stone-600">I nostri valori</span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-stone-900 leading-[1.1]">
            L&apos;Essenza di<br />
            <span className="text-[#FFC107] italic font-serif">Fermenteria</span>
          </h2>

          <p className="text-xl md:text-2xl text-stone-600 font-serif max-w-3xl mx-auto leading-relaxed">
            Oltre la cucina, un impegno verso la terra, la tradizione e le persone.
            Ogni piatto racconta una storia di <span className="text-stone-900 font-medium border-b-2 border-[#FFC107]/30">rispetto e passione</span>.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 min-h-0">
          <Pillar
            icon={Utensils}
            title="Cucina Artigianale"
            description="Pasta fresca tirata a mano, lievitazioni lente e fermentazioni naturali. Riscopriamo i gesti della tradizione per un sapore autentico che parla al cuore."
            imageLabel="Mani al lavoro nella tradizione"
            imageSrc="/images/pillars/artisanal.png"
            index={0}
          />
          <Pillar
            icon={Leaf}
            title="Biologico & Locale"
            description="Ingredienti stagionali coltivati con cura da piccoli produttori del territorio. Sosteniamo la biodiversità e celebriamo il chilometro zero."
            imageLabel="Ingredienti freschi dal territorio"
            imageSrc="/images/pillars/organic.png"
            index={1}
          />
          <Pillar
            icon={Sparkles}
            title="100% Inclusivo"
            description="Tutto il nostro menu è naturalmente privo di glutine. Non è una dieta speciale, è la nostra scelta per accogliere tutti allo stesso tavolo."
            imageLabel="Atmosfera calorosa e inclusiva"
            imageSrc="/images/pillars/inclusive.png"
            index={2}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <a
            href="/chi-siamo"
            className="inline-flex items-center gap-4 px-8 py-4 bg-stone-900 text-white rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#FFC107] hover:text-stone-900 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span>Scopri la nostra storia</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
