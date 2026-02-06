'use client';

import React from 'react';
import { Quote, Heart, ChefHat } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 bg-white-warm overflow-hidden" id="chi-siamo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side (Nicola/Kitchen) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
              {/* Placeholder for Nicola's photo */}
              <div className="absolute inset-0 flex items-center justify-center text-text-light font-serif italic">
                Foto Nicola / Cucina
              </div>
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-float rounded-xl max-w-xs hidden md:block">
              <p className="font-serif italic text-text-primary text-lg leading-relaxed">
                "La cucina è la mia casa da quando avevo 14 anni."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <ChefHat size={20} className="text-yellow" />
                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Nicola, Founder</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/10 rounded-full mb-8">
              <Heart size={16} className="text-yellow-dark" />
              <span className="text-sm font-semibold text-text-secondary">La Nostra Storia</span>
            </div>

            <h2 className="text-display text-5xl lg:text-6xl mb-8 text-text-primary leading-tight">
              Un Viaggio di<br />
              <span className="text-yellow italic">Passione e Ascolto</span>
            </h2>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
              <p>
                Mi chiamo <strong>Nicola</strong>, e da sempre ho una missione: far star bene le persone attraverso il cibo.
              </p>
              <p>
                Fermenteria non è solo un ristorante, è la sintesi del mio viaggio. Dopo anni passati nelle brigate di chef stellati e hotel di lusso, e dopo aver scoperto in Australia il valore della contaminazione culturale, ho deciso di tornare a casa, a Bassano.
              </p>
              <p>
                Nel 2017 è nata Fermenteria. Volevo un luogo che rispecchiasse la mia visione:
                una cucina <strong>artigianale, naturale e biologica</strong>. Ma soprattutto, un luogo nato dall'ascolto.
                Ho capito quanto fosse importante offrire un'esperienza inclusiva, e per questo ogni nostro piatto è naturalmente <strong>100% Gluten Free</strong>.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone">
              <blockquote className="flex gap-4">
                <Quote size={40} className="text-yellow/30 flex-shrink-0" />
                <p className="font-serif italic text-xl text-text-primary">
                  "Qui il tempo non si accelera, si dedica. Ogni impasto, ogni fermentazione ha i suoi ritmi, e noi li rispettiamo."
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
