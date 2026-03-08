import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-950 pt-16 pb-8">
      {/* CTA final */}
          <div className="text-center pt-4 pb-16">
            <a href="https://wa.me/56953386191?text=Hola+me+interesa+mas+informacion" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
              Contáctanos por WhatsApp
            </a>
          </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block leading-none">
            
  <div className="text-white text-lg font-bold tracking-wide drop-shadow-sm">FONASA</div>
  <div className="flex items-center mt-[2px]">
    <div className="h-1 bg-pink-600 flex-1 mr-1.5 drop-shadow-sm"></div>
    <div className="text-white text-lg font-bold tracking-wide drop-shadow-sm">PAD</div>
  </div>
</a>
            <p className="text-gray-300 mb-4">
              Soluciones en salud con cobertura total, respaldo profesional y humano.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/clinyco" 
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/clinyco.cl" 
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/cl%C3%ADnyco-saluD" 
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Teléfono: +56 2 2840 0740</li>
              <li>Email: contacto@clinyco.cl</li>
              <li>Horario: Lunes a Viernes 9:00 - 18:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#about-pad" className="text-gray-300 hover:text-accent transition-colors">Bono PAD</a></li>
              <li><a href="#surgery-types" className="text-gray-300 hover:text-accent transition-colors">Tipos de Cirugía</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-accent transition-colors">Ubicaciones</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Clínyco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;