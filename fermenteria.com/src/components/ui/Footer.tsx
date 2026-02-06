import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-white tracking-tight mb-6 block">
              FERMENTERIA
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Cucina artigianale, biologica e inclusiva nel cuore di Bassano del Grappa. 
              Dal 2017, la nostra missione è farvi star bene.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/fermenteria" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/fermenteriabassano" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCk4wrAuZdKGiXJt80lv3srQ" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Link Rapidi</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menù</Link></li>
              <li><Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link href="/contatti" className="hover:text-white transition-colors">Prenota</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">A Casa Tua</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="https://www.foodracers.com/it/cities/Bassano%20del%20Grappa/restaurants/fermenteria-bassano" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  Consegna con FoodRacers <Send size={14} />
                </a>
              </li>
              <li>
                <span className="block mb-1">Take Away</span>
                <p className="text-xs text-zinc-500">Chiamaci e ritira i tuoi piatti preferiti in pochi minuti.</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} FERMENTERIA s.a.s. / P.IVA: 04065720247</p>
          <p>Created with passion for authentic taste.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
