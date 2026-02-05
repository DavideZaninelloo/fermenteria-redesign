import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Un paradiso per chi mangia senza glutine. Non si sente minimamente la differenza e la qualità delle materie prime è eccezionale. Finalmente un posto dove tutti possono mangiare le stesse cose con lo stesso gusto.",
    author: "Marco R.",
    stars: 5
  },
  {
    text: "Atmosfera accogliente e piatti ricercati ma genuini. Le tagliatelle al ragù di ossobuco sono state un viaggio nei sapori di una volta. Nicola e il suo team sanno davvero come coccolare l'ospite.",
    author: "Elena V.",
    stars: 5
  },
  {
    text: "La passione si sente in ogni dettaglio, dal pane fatto in casa alla selezione dei vini. La birra YOU HEART CORN è stata una vera scoperta. Un'esperienza autentica nel cuore di Bassano.",
    author: "Giuseppe L.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Dicono di Noi</h2>
          <p className="text-xl text-zinc-600 font-light">
            La soddisfazione dei nostri ospiti è il ingrediente più importante. 
            Ecco cosa dicono della loro esperienza a Fermenteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-sm border border-zinc-100 bg-secondary/30 relative flex flex-col h-full">
              <Quote className="text-accent/20 absolute top-6 right-8" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-zinc-700 italic leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-zinc-100">
                <span className="font-serif text-lg text-foreground">{t.author}</span>
                <span className="text-zinc-400 text-sm block">Cliente Verificato</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=recensioni+fermenteria+bassano" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
          >
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
