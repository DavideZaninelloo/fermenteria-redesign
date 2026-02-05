import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              La Nostra Storia: <span className="italic">Dalla Passione alla Realtà</span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
              <p>
                "Mi chiamo <strong>Nicola</strong>, sono cuoco e imprenditore, e da sempre ho un'unica missione: 
                far star bene le persone attraverso il cibo e l'accoglienza."
              </p>
              <p>
                Dopo anni di esperienza nei ristoranti e hotel più prestigiosi, in Italia e all'estero, 
                ho scelto di fondare <strong>Fermenteria</strong> nel 2017. Un ristorante che riflette la mia visione: 
                una cucina artigianale, naturale, biologica e genuina.
              </p>
              <p>
                La cucina è la mia casa da quando avevo 14 anni. In Australia ho scoperto il valore della 
                contaminazione culturale, portandolo con me come ingrediente prezioso. In Fermenteria, 
                ogni piatto nasce da zero, con cura artigianale e profondo rispetto per le materie prime.
              </p>
              <p>
                Qui il tempo non si accelera, si <strong>dedica</strong>.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-[1px] bg-accent" />
              <span className="font-serif italic text-xl text-primary">Nicola, Fondatore & Chef</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-zinc-200 rounded-sm relative overflow-hidden shadow-2xl z-10">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium uppercase tracking-widest text-center p-4">
                4:5 - Chef Nicola in cucina
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full -z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
