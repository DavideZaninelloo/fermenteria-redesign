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
      className="group relative h-full"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      {/* Yellow Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow/10 to-yellow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -m-4" />

      <div className="relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-border group-hover:border-yellow transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
        {/* Image Container - Fixed Aspect Ratio */}
        <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-xl group-hover:scale-105 transition-transform duration-500 shrink-0 shadow-inner">
          {/* Real Generated Image */}
          <img
            src={imageSrc}
            alt={imageLabel}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay Effect - Warm & Authentic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Label Overlay (Optional, usually better without text on image if image is good, but keeping label as alt text or subtle) */}
          {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {imageLabel}
          </div> */}

          {/* Floating Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 shadow-sm">
            <ArrowUpRight size={16} className="text-yellow" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex flex-col flex-grow">
          {/* Icon - SOLID YELLOW POP */}
          <div className="inline-flex p-4 bg-yellow rounded-2xl shadow-warm group-hover:scale-110 transition-transform duration-300 w-fit">
            <Icon size={24} className="text-stone-900" />
          </div>

          {/* Title */}
          <h3 className="text-display text-2xl lg:text-3xl text-text-primary group-hover:text-yellow-dark transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed text-lg font-light flex-grow">
            {description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
      </div>
    </div>
  );
};

const Pillars = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white-warm">
      {/* Decorative Elements - Only Yellow */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-yellow-light/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-glow/60 rounded-full border border-yellow/30 mb-8">
            <Sparkles size={16} className="text-yellow-dark animate-pulse" />
            <span className="text-sm font-semibold text-text-secondary">I nostri valori</span>
          </div>

          <h2 className="text-display text-5xl md:text-6xl lg:text-7xl mb-8 text-text-primary leading-tight">
            L&apos;Essenza di<br />
            <span className="text-yellow italic">Fermenteria</span>
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-3xl mx-auto leading-relaxed">
            Oltre la cucina, un impegno verso la terra, la tradizione e le persone.
            Ogni piatto racconta una storia di <span className="text-yellow-dark font-semibold">rispetto e passione</span>.
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
            className="inline-flex items-center gap-4 px-8 py-4 glass border border-yellow/40 hover:border-yellow hover:bg-yellow/10 rounded-full transition-all duration-300 hover:scale-105 group"
          >
            <span className="text-gray-text font-semibold group-hover:text-black-soft">Scopri la nostra storia</span>
            <ArrowUpRight size={20} className="text-yellow group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
