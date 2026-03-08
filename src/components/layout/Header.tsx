import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950 shadow-lg py-3' : 'bg-primary-950/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="inline-block leading-none">
          <div className="text-white text-lg font-bold tracking-wide drop-shadow-sm">FONASA</div>
          <div className="flex items-center mt-[2px]">
            <div className="h-1 bg-pink-600 flex-1 mr-1.5 drop-shadow-sm"></div>
            <div className="text-white text-lg font-bold tracking-wide drop-shadow-sm">PAD</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="nav-link">Inicio</a>
          <a href="/cirugia-bariatrica" className="nav-link">Cirugía Bariátrica</a>
          <a href="/cirugia-metabolica" className="nav-link">Cirugía Abdominoplastía</a>
          <a href="/#about-pad" className="nav-link">Bono PAD</a>
          <a href="/#contact" className="nav-link">Contacto</a>
          <a href="/#locations" className="nav-link">Ubicación</a>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-900 shadow-xl animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <a 
              href="/" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="/cirugia-bariatrica" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cirugía Bariátrica
            </a>
            <a 
              href="/cirugia-metabolica" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cirugía Abdominoplastía
            </a>
            <a 
              href="/#about-pad" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bono PAD
            </a>
            <a 
              href="/#contact" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <a 
              href="/#locations" 
              className="block py-2 px-4 hover:bg-primary-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ubicación
            </a>
          </div>
        </div>
      )}
       {/* Back to Top Icon next to WhatsApp */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[90px] right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg p-3 transition-all duration-200"
          aria-label="Volver arriba"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </header>
  );
  
};

export default Header;
