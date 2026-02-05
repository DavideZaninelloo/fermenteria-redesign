import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-sm overflow-hidden shadow-xl">
          
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 p-12 lg:p-16 bg-primary text-white">
            <h2 className="text-4xl font-serif mb-8">Vieni a Trovarci</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Indirizzo</h4>
                  <p className="text-zinc-200">Via Campo Marzio, 14<br />36061 Bassano del Grappa (VI)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Telefono</h4>
                  <p className="text-zinc-200">+39 320 340 7673</p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Orari</h4>
                  <p className="text-zinc-200">
                    Mar - Sab: 12:30 - 14:30, 19:30 - 22:30<br />
                    Dom: 12:30 - 15:00<br />
                    Lunedì: Chiuso
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <h4 className="font-medium mb-6 uppercase tracking-widest text-sm text-accent">Seguici</h4>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/fermenteriabassano" className="hover:text-accent transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/fermenteria" className="hover:text-accent transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full lg:w-3/5 min-h-[400px] relative bg-zinc-200">
            {/* Real Google Maps embed would go here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin size={48} className="text-zinc-400 mb-4" />
              <p className="text-zinc-500 font-medium">
                Google Maps Interactive Placeholder
              </p>
              <p className="text-zinc-400 text-sm mt-2 max-w-xs">
                A due passi dal Ponte degli Alpini, nel cuore del centro storico.
              </p>
              <a 
                href="https://maps.google.com/?q=Fermenteria+Bassano+del+Grappa" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2 border border-zinc-300 rounded-full text-zinc-600 hover:bg-zinc-100 transition-colors text-sm font-medium"
              >
                Apri in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
