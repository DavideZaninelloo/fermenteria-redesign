import { Heart, Users, Leaf } from 'lucide-react';

export const metadata = {
  title: "Chi Siamo | Fermenteria",
  description: "La storia di Fermenteria: passione per la cucina artigianale biologica e inclusiva a Bassano del Grappa.",
};

const StorySection = ({ title, children }: {
  title: string,
  children: React.ReactNode
}) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-4xl font-serif mb-6">{title}</h2>
    {children}
  </div>
);

const ValueCard = ({ icon: Icon, title, description }: {
  icon: any,
  title: string,
  description: string
}) => (
  <div className="text-center">
    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
      <Icon size={32} className="text-primary" />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </div>
);

export default function ChiSiamoPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-8">
              La Nostra Storia
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed">
              Fermenteria nasce dalla passione per la cucina autentica e l'inclusività.
              Nel cuore di Bassano del Grappa, creiamo esperienze culinarie che rispettano
              la terra e accolgono tutti allo stesso tavolo.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">

            <StorySection title="La Nostra Filosofia">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    Crediamo che il cibo sia molto più di semplice nutrimento. È cultura,
                    tradizione, condivisione e rispetto per la terra che ci sostiene.
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    La nostra cucina artigianale celebra i sapori autentici del territorio
                    veneto, utilizzando solo ingredienti biologici e a chilometro zero.
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Ogni piatto racconta una storia di passione, di rispetto per le tradizioni
                    e di apertura verso il futuro dell'alimentazione sostenibile.
                  </p>
                </div>
                <div className="relative aspect-[4/5] bg-zinc-200 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium uppercase tracking-wider">
                    4:5 - Chef al Lavoro
                  </div>
                </div>
              </div>
            </StorySection>

            <StorySection title="100% Inclusivo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative aspect-video bg-zinc-200 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium uppercase tracking-wider">
                      16:9 - Ambiente Inclusivo
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    L'inclusività è nel nostro DNA. Il nostro menu è naturalmente
                    privo di glutine, non per necessità medica, ma per scelta etica.
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    Crediamo che tutti debbano poter godere della stessa esperienza
                    culinaria, senza compromessi sul gusto o sulla qualità.
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Non è una "dieta speciale" - è il nostro modo di dire che
                    tutti sono i benvenuti alla tavola di Fermenteria.
                  </p>
                </div>
              </div>
            </StorySection>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">I Nostri Valori</h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Tre pilastri che guidano ogni nostra scelta, dal campo alla tavola.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ValueCard
                icon={Heart}
                title="Artigianalità"
                description="Ogni piatto è preparato a mano con tecniche tradizionali. Pasta fresca, lievitazioni lente e fermentazioni naturali per un sapore autentico."
              />

              <ValueCard
                icon={Leaf}
                title="Sostenibilità"
                description="Ingredienti biologici e a chilometro zero. Sosteniamo i piccoli produttori locali e rispettiamo i cicli naturali della terra."
              />

              <ValueCard
                icon={Users}
                title="Inclusività"
                description="Una cucina che accoglie tutti. Il nostro menu naturalmente gluten-free dimostra che l'inclusività può essere deliziosa per tutti."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Il Nostro Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] bg-zinc-200 overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium uppercase tracking-wider">
                  4:5 - Chef Portrait
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-serif mb-4">[Nome Chef]</h3>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  [Biografia del chef - esperienza, formazione, filosofia culinaria]
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  [Visione per Fermenteria e passione per la cucina biologica]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}