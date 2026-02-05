import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
              FERMENTERIA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
              <Link href="/menu" className="hover:text-primary transition-colors font-medium">Menù</Link>
              <Link href="/chi-siamo" className="hover:text-primary transition-colors font-medium">Chi Siamo</Link>
              <Link href="/contatti" className="hover:text-primary transition-colors font-medium text-white bg-primary px-5 py-2 rounded-full">Prenota</Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <Link href="/contatti" className="text-white bg-primary px-4 py-2 rounded-full text-sm font-medium">
              Prenota
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
