import React from 'react';
import { Utensils, Leaf, Sparkles } from 'lucide-react';

const Pillar = ({ 
  icon: Icon, 
  title, 
  description, 
  aspectRatio = "aspect-video",
  imageLabel = "Placeholder Image"
}: { 
  icon: any, 
  title: string, 
  description: string, 
  aspectRatio?: string,
  imageLabel?: string
}) => (
  <div className="flex flex-col group">
    <div className={`relative ${aspectRatio} bg-zinc-200 overflow-hidden mb-6 rounded-sm`}>
      {/* Placeholder for Photo-Ready strategy */}
      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium uppercase tracking-wider">
        {imageLabel}
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
    </div>
    <div className="flex items-start gap-4">
      <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-2xl font-serif mb-2 text-foreground">{title}</h3>
        <p className="text-zinc-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Pillars = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            L'Essenza di Fermenteria
          </h2>
          <p className="text-xl text-zinc-600 font-light">
            Oltre la cucina, un impegno verso la terra, la tradizione e le persone. 
            Ogni piatto racconta una storia di rispetto e passione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <Pillar 
            icon={Utensils}
            title="Cucina Artigianale"
            description="Pasta fresca tirata a mano, lievitazioni lente e fermentazioni naturali. Riscopriamo i gesti della tradizione per un sapore autentico."
            aspectRatio="aspect-[4/5]"
            imageLabel="4:5 - Mani al lavoro"
          />
          <Pillar 
            icon={Leaf}
            title="Biologico & Locale"
            description="Ingredienti stagionali coltivati con cura da piccoli produttori del territorio. Sosteniamo la biodiversità e il chilometro zero."
            aspectRatio="aspect-video"
            imageLabel="16:9 - Ingredienti Freschi"
          />
          <Pillar 
            icon={Sparkles}
            title="100% Inclusivo"
            description="Tutto il nostro menu è naturalmente privo di glutine. Non è una dieta speciale, è la nostra scelta per accogliere tutti allo stesso tavolo."
            aspectRatio="aspect-square"
            imageLabel="1:1 - Atmosfera Inclusiva"
          />
        </div>
      </div>
    </section>
  );
};

export default Pillars;
