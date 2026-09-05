import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import BmiCalculator from './components/sections/BmiCalculator';
import Pricing from './components/sections/Pricing';
import AboutPad from './components/sections/AboutPad';
import SurgeryTypes from './components/sections/SurgeryTypes';
import Locations from './components/sections/Locations';
import Team from './components/sections/Team';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import BariatricSurgery from './pages/BariatricSurgery';
import Abdominoplasty from './pages/Abdominoplasty';
import FAQ from './components/sections/FAQ';
import GoogleReviews from './components/sections/GoogleReviews';
import SeoHead from './components/seo/SeoHead';
import NotFound from './pages/NotFound';

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FONASAPAD.cl',
  url: 'https://fonasapad.cl/',
  inLanguage: 'es-CL',
  publisher: {
    '@type': 'Organization',
    name: 'Clínyco',
    url: 'https://clinyco.cl/',
  },
};

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    if (path === '/') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    }
  }, [path]);

  const isKnownRoute = ['/', '/cirugia-bariatrica', '/abdominoplastia-bono-pad'].includes(path);

  return (
    <div className="font-sans text-gray-100">
      {path === '/' && (
        <SeoHead
          title="Bono PAD Cirugía Bariátrica 2026 | FONASAPAD.cl"
          description="Información privada sobre Bono PAD 2026 para manga gástrica y bypass gástrico: requisitos, copagos, criterios de acceso y orientación clínica."
          canonicalPath="/"
          jsonLd={siteSchema}
        />
      )}

      {path === '/cirugia-bariatrica' && (
        <SeoHead
          title="Cirugía Bariátrica con Bono PAD 2026 | Manga y Bypass"
          description="Guía sobre cirugía bariátrica con Bono PAD 2026: manga gástrica, bypass gástrico, requisitos, copagos, seguimiento y criterios de acceso."
          canonicalPath="/cirugia-bariatrica"
          jsonLd={[
            siteSchema,
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalWebPage',
              name: 'Cirugía Bariátrica con Bono PAD 2026',
              url: 'https://fonasapad.cl/cirugia-bariatrica',
              inLanguage: 'es-CL',
              about: [
                { '@type': 'MedicalProcedure', name: 'Manga gástrica' },
                { '@type': 'MedicalProcedure', name: 'Bypass gástrico' },
              ],
              publisher: { '@type': 'Organization', name: 'Clínyco', url: 'https://clinyco.cl/' },
            },
          ]}
        />
      )}

      {path === '/abdominoplastia-bono-pad' && (
        <SeoHead
          title="Abdominoplastía con Bono PAD 2026 | Abdomen Flácido"
          description="Información sobre Bono PAD para abdomen flácido y abdominoplastía: requisitos, copago 2026, criterios de exclusión y orientación para pacientes Fonasa."
          canonicalPath="/abdominoplastia-bono-pad"
          jsonLd={[
            siteSchema,
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalWebPage',
              name: 'Abdominoplastía con Bono PAD 2026',
              url: 'https://fonasapad.cl/abdominoplastia-bono-pad',
              inLanguage: 'es-CL',
              about: { '@type': 'MedicalProcedure', name: 'Abdominoplastía' },
              publisher: { '@type': 'Organization', name: 'Clínyco', url: 'https://clinyco.cl/' },
            },
          ]}
        />
      )}

      {!isKnownRoute && (
        <SeoHead
          title="Página no encontrada | FONASAPAD.cl"
          description="La página solicitada no existe o fue movida."
          canonicalPath={path}
        />
      )}

      <Header />
      <main>
        {path === '/' && (
          <>
            <Hero />
            <Benefits />
            <BmiCalculator />
            <Pricing />
            <AboutPad />
            <SurgeryTypes />
            <Locations />
            <Team />
            <FAQ />
            <GoogleReviews />
          </>
        )}
        {path === '/cirugia-bariatrica' && <BariatricSurgery />}
        {path === '/abdominoplastia-bono-pad' && <Abdominoplasty />}
        {!isKnownRoute && <NotFound />}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
