import React from 'react';
import { Beer, Wine, Globe } from 'lucide-react';

const Wines = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-zinc-200 rounded-sm relative overflow-hidden mt-12">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium uppercase tracking-widest text-center p-4">
                  4:5 - Bottiglia di Birra Artigianale
                </div>
              </div>
              <div className="aspect-[4/5] bg-zinc-100 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium uppercase tracking-widest text-center p-4">
                  4:5 - Calice di Vino Locale
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              L'Arte della Fermentazione & <span className="italic">Vini del Territorio</span>
            </h2>
            
            <p className="text-xl text-zinc-600 font-light mb-12 leading-relaxed">
              Dalla nostra passione per i processi naturali nascono le birre artigianali di Fermenteria. 
              Selezioniamo inoltre i migliori vini della zona per accompagnare ogni vostro piatto.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Beer size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-foreground">Le Nostre Birre</h4>
                  <p className="text-zinc-600">
                    Fermentiamo orzo e mais biologici per creare birre uniche come la nostra 
                    <strong> RADICEE (IPA)</strong> o la <strong>YOU ❤ CORN</strong>, interamente senza glutine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Wine size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-foreground">Selezione di Vini</h4>
                  <p className="text-zinc-600">
                    Dal Prosecco DOC Brut al Merlot Veneto IGT, ogni etichetta è scelta per 
                    valorizzare gli ingredienti biologici della nostra cucina.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-foreground">Rete Locale</h4>
                  <p className="text-zinc-600">
                    Collaboriamo con piccoli produttori e vignaioli indipendenti che condividono 
                    la nostra visione di rispetto per la terra.
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

export default Wines;
