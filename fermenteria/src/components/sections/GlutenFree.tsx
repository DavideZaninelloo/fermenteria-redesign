import React from 'react';
import { ShieldCheck, Heart, UtensilsCrossed } from 'lucide-react';

const GlutenFree = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            100% Gluten-Free.<br />
            <span className="italic text-secondary">Zero Differenze.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light mb-16 text-zinc-100 leading-relaxed">
            A Fermenteria, il Senza Glutine non è una dieta speciale. È il nostro standard. 
            Tutto ciò che esce dalla nostra cucina è sicuro, artigianale e incredibilmente buono. 
            Per tutti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <ShieldCheck size={32} className="text-secondary" />
              </div>
              <h4 className="text-xl font-serif mb-3">Sicurezza Totale</h4>
              <p className="text-zinc-200 text-sm">
                Ambiente controllato e processi certificati per garantirti la massima serenità.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <UtensilsCrossed size={32} className="text-secondary" />
              </div>
              <h4 className="text-xl font-serif mb-3">Gusto Senza Filtri</h4>
              <p className="text-zinc-200 text-sm">
                Usiamo farine naturali e tecniche artigianali. Non noterai alcuna differenza.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <Heart size={32} className="text-secondary" />
              </div>
              <h4 className="text-xl font-serif mb-3">Tutti allo Stesso Tavolo</h4>
              <p className="text-zinc-200 text-sm">
                Un'esperienza inclusiva dove nessuno deve rinunciare a nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlutenFree;
