import { Download, Leaf, Heart } from 'lucide-react';

export const metadata = {
  title: "Menu | Fermenteria",
  description: "Scopri il menu di Fermenteria: cucina artigianale biologica 100% gluten-free a Bassano del Grappa.",
};

// Sample menu data - this would typically come from a JSON file or CMS
const menuSections = [
  {
    name: "Antipasti",
    description: "Per iniziare il viaggio dei sapori",
    items: [
      {
        name: "Selezione di Formaggi Biologici",
        description: "Formaggi del territorio con miele locale e noci",
        price: "€18",
        dietary: ["bio", "gluten-free"]
      },
      {
        name: "Antipasto della Terra",
        description: "Verdure grigliate, hummus di ceci e pane fatto in casa",
        price: "€14",
        dietary: ["bio", "gluten-free", "vegetarian"]
      }
    ]
  },
  {
    name: "Primi Piatti",
    description: "Pasta fresca e risotti della tradizione",
    items: [
      {
        name: "Bigoli con Ragù di Anatra",
        description: "Pasta trafilata al bronzo con ragù lento di anatra biologica",
        price: "€22",
        dietary: ["bio", "gluten-free"]
      },
      {
        name: "Risotto all'Amarone",
        description: "Riso Carnaroli con Amarone DOCG e Gorgonzola DOP",
        price: "€20",
        dietary: ["bio", "gluten-free", "vegetarian"]
      }
    ]
  },
  {
    name: "Secondi Piatti",
    description: "Carni e pesce con ingredienti di stagione",
    items: [
      {
        name: "Branzino in Crosta di Sale",
        description: "Branzino dell'Adriatico con erbe aromatiche e verdure",
        price: "€26",
        dietary: ["bio", "gluten-free"]
      },
      {
        name: "Agnello alle Erbe",
        description: "Cosciotto d'agnello biologico con rosmarino e timo",
        price: "€28",
        dietary: ["bio", "gluten-free"]
      }
    ]
  }
];

const DietaryBadge = ({ type }: { type: string }) => {
  const badges = {
    "bio": { label: "Bio", color: "bg-green-100 text-green-800" },
    "gluten-free": { label: "Senza Glutine", color: "bg-primary/20 text-primary" },
    "vegetarian": { label: "Vegetariano", color: "bg-blue-100 text-blue-800" }
  };

  const badge = badges[type as keyof typeof badges];
  if (!badge) return null;

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${badge.color}`}>
      {badge.label}
    </span>
  );
};

const MenuItem = ({ item }: { item: any }) => (
  <div className="border-b border-zinc-200 last:border-b-0 py-6">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-serif text-foreground">{item.name}</h3>
      <span className="text-xl font-medium text-primary ml-4">{item.price}</span>
    </div>
    <p className="text-zinc-600 mb-3 leading-relaxed">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.dietary.map((diet: string, index: number) => (
        <DietaryBadge key={index} type={diet} />
      ))}
    </div>
  </div>
);

const MenuSection = ({ section }: { section: any }) => (
  <div className="mb-16">
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-serif mb-3 text-foreground">
        {section.name}
      </h2>
      <p className="text-lg text-zinc-600 font-light">{section.description}</p>
    </div>
    <div className="space-y-0">
      {section.items.map((item: any, index: number) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default function MenuPage() {
  return (
    <div className="pt-20 min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              Il Nostro Menu
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light mb-8">
              Cucina artigianale biologica, naturalmente senza glutine.
              Ogni piatto racconta la storia del nostro territorio.
            </p>

            {/* Menu Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <Leaf className="text-primary" size={24} />
                <span className="font-medium">100% Biologico</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <Heart className="text-primary" size={24} />
                <span className="font-medium">Gluten-Free</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <Download className="text-primary" size={24} />
                <span className="font-medium">Menu PDF</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/menu-completo.pdf" // Placeholder
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                <Download size={20} />
                Menu Completo
              </a>
              <a
                href="/carta-vini.pdf" // Placeholder
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                <Download size={20} />
                Carta dei Vini
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-lg text-zinc-600 leading-relaxed">
                <strong className="text-foreground">Nota importante:</strong> Tutto il nostro menu è
                naturalmente privo di glutine. Non utilizziamo farine contenenti glutine nella
                nostra cucina, garantendo un ambiente sicuro per tutti i nostri ospiti.
              </p>
            </div>

            {menuSections.map((section, index) => (
              <MenuSection key={index} section={section} />
            ))}

            {/* Footer Note */}
            <div className="mt-16 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-serif mb-3">Allergeni e Informazioni</h3>
              <p className="text-zinc-600 mb-4">
                I nostri piatti possono contenere allergeni. Comunica eventuali allergie
                al personale di sala. Tutti gli ingredienti sono biologici e di provenienza
                certificata.
              </p>
              <p className="text-sm text-zinc-500">
                Menu soggetto a variazioni stagionali. Prezzi aggiornati a Febbraio 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}