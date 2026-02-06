import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: "Contatti | Fermenteria",
  description: "Contatta Fermenteria per prenotazioni e informazioni. Ristorante biologico a Bassano del Grappa.",
};

const ContactInfo = ({ icon: Icon, title, info }: {
  icon: any,
  title: string,
  info: string | string[]
}) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
    <div className="mt-1 p-3 bg-primary/10 rounded-full text-primary">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-serif mb-2 text-foreground">{title}</h3>
      {Array.isArray(info) ? (
        <div className="space-y-1">
          {info.map((line, index) => (
            <p key={index} className="text-zinc-600">{line}</p>
          ))}
        </div>
      ) : (
        <p className="text-zinc-600">{info}</p>
      )}
    </div>
  </div>
);

export default function ContattiPage() {
  return (
    <div className="pt-20 min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-zinc-600 font-light">
              Siamo qui per accoglierti. Prenota un tavolo o scrivici per informazioni
              sulla nostra cucina biologica e inclusiva.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ContactInfo
              icon={Phone}
              title="Telefono"
              info="+39 0424 522000" // Placeholder
            />

            <ContactInfo
              icon={Mail}
              title="Email"
              info="info@fermenteria.it" // Placeholder
            />

            <ContactInfo
              icon={MapPin}
              title="Indirizzo"
              info={[
                "Via Roma, 123", // Placeholder
                "36061 Bassano del Grappa (VI)",
                "Italia"
              ]}
            />

            <ContactInfo
              icon={Clock}
              title="Orari"
              info={[
                "Martedì - Domenica: 19:00 - 22:30",
                "Lunedì: Chiuso",
                "Prenota per il pranzo su richiesta"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Prenota ora il tuo tavolo</h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
            Vivi l'esperienza della cucina artigianale biologica.
            Contattaci per prenotazioni e richieste speciali.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/393273180556" // Placeholder
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium text-lg transition-all"
            >
              WhatsApp
            </a>
            <a
              href="tel:+390424522000" // Placeholder
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium text-lg transition-all"
            >
              Chiama Ora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}