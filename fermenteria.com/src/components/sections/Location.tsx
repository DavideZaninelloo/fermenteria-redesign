import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-float border border-stone/50">

          {/* Contact Info - NOW YELLOW to answer user request */}
          <div className="w-full lg:w-2/5 p-12 lg:p-16 bg-yellow shadow-inner">
            <h2 className="text-4xl font-serif mb-8 text-stone-900 border-b-2 border-stone-900/10 pb-4">Vieni a Trovarci</h2>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-stone-900" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-stone-900">Indirizzo</h4>
                  <p className="text-stone-900/80 font-medium">Via Campo Marzio, 14<br />36061 Bassano del Grappa (VI)</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-stone-900" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-stone-900">Telefono</h4>
                  <p className="text-stone-900/80 font-medium hover:underline cursor-pointer">+39 320 340 7673</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-stone-900" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-stone-900">Orari</h4>
                  <p className="text-stone-900/80 font-medium">
                    Mar - Sab: 12:30 - 14:30, 19:30 - 22:30<br />
                    Dom: 12:30 - 15:00<br />
                    Lunedì: Chiuso
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-stone-900/10">
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-stone-900">Seguici</h4>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/fermenteriabassano" className="bg-white/20 p-3 rounded-full text-stone-900 hover:bg-white/40 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/fermenteria" className="bg-white/20 p-3 rounded-full text-stone-900 hover:bg-white/40 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section - Interactive Google Map */}
          <div className="w-full lg:w-3/5 h-[400px] lg:h-auto min-h-[400px] relative">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Fermenteria%20Via%20Campo%20Marzio%2014%20Bassano%20del%20Grappa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="Mappa Fermenteria"
              className="absolute inset-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay for better integration */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
