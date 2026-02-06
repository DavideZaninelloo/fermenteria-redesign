import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Un paradiso per chi mangia senza glutine. Non si sente minimamente la differenza e la qualità delle materie prime è eccezionale. Finalmente un posto dove tutti possono mangiare le stesse cose con lo stesso gusto.",
    author: "Marco R.",
    stars: 5,
    avatar: "/images/avatars/male.png"
  },
  {
    text: "Atmosfera accogliente e piatti ricercati ma genuini. Le tagliatelle al ragù di ossobuco sono state un viaggio nei sapori di una volta. Nicola e il suo team sanno davvero come coccolare l'ospite.",
    author: "Elena V.",
    stars: 5,
    avatar: "/images/avatars/female.png"
  },
  {
    text: "La passione si sente in ogni dettaglio, dal pane fatto in casa alla selezione dei vini. La birra YOU HEART CORN è stata una vera scoperta. Un'esperienza autentica nel cuore di Bassano.",
    author: "Giuseppe L.",
    stars: 5,
    avatar: "/images/avatars/generic.png"
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
            <div key={i} className="p-8 rounded-lg border border-stone bg-stone-light/30 relative flex flex-col h-full shadow-card hover:shadow-float transition-all duration-300">
              <Quote className="text-yellow-dark/20 absolute top-6 right-8" size={48} />

              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow text-yellow" />
                ))}
              </div>

              <p className="text-text-secondary italic leading-relaxed mb-8 flex-grow font-serif text-lg">
                &quot;{t.text}&quot;
              </p>

              <div className="pt-6 border-t border-stone-200 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full border-2 border-yellow object-cover bg-yellow-light"
                />
                <div>
                  <span className="font-serif text-lg text-text-primary block leading-none mb-1">{t.author}</span>
                  <span className="text-text-light text-sm block leading-none">Cliente Verificato</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=recensioni+fermenteria+bassano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-light hover:text-yellow-dark transition-colors text-sm uppercase tracking-widest font-medium"
          >
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
