import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const dishes = [
  {
    name: "Tartare di Manzo Biologico",
    description: "Servita alla classica maniera con 6 salse, uovo in camicia e panbrioche fatto in casa.",
    price: "€25,00",
    category: "Le Tartare"
  },
  {
    name: "Tagliatelle al Ragù di Ossobuco",
    description: "Mantecate con burro alle erbe e spezie affumicate. Un classico rivisitato.",
    price: "€15,80",
    category: "Pasta & Co."
  },
  {
    name: "Bigoli all'Anatra",
    description: "L'essenza della tradizione veneta, preparata con pasta fresca fatta in casa.",
    price: "€15,60",
    category: "Pasta & Co."
  },
  {
    name: "Gnocchi di Patate e Mais",
    description: "Crema di rapa rossa, nocciole tostate, fichi secchi e fonduta di gorgonzola.",
    price: "€17,00",
    category: "Pasta & Co."
  },
  {
    name: "Cotoletta di Tonnetto",
    description: "Tonnetto del Mediterraneo, zucca arrostita, gel di limone e zenzero, cumino.",
    price: "€24,90",
    category: "Pesce"
  },
  {
    name: "Tiramisù Fermenteria",
    description: "Con savoiardi fatti in casa. La nostra ricetta originale dal 2017.",
    price: "€8,00",
    category: "Dessert"
  }
];

const MenuPreview = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Dalla Nostra Cucina</h2>
            <p className="text-xl text-zinc-600 font-light">
              Una selezione dei nostri piatti più amati. Ingredienti biologici, 
              preparazioni artigianali e una passione infinita per il gusto.
            </p>
          </div>
          <Link 
            href="/menu" 
            className="flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group"
          >
            Vedi il Menu Completo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-square bg-zinc-200 relative overflow-hidden">
                {/* Placeholder for Dish Image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium uppercase tracking-widest p-4 text-center">
                  1:1 - {dish.name}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-2 block">
                  {dish.category}
                </span>
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-serif leading-tight">{dish.name}</h3>
                  <span className="text-primary font-medium">{dish.price}</span>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
