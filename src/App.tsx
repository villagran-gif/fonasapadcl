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
import MetabolicSurgery from './pages/Abdominoplasty';
import FAQ from './components/sections/FAQ';
import GoogleReviews from './components/sections/GoogleReviews';

function App() {
  const path = window.location.pathname;

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

  return (
    <div className="font-sans text-gray-100">
      <Header />
      <main>
        {path === '/' && (
          <>
            <Hero />
            <Benefits />
            <BmiCalculator />
            <Pricing />
            <AboutPad />
            <Locations />
            <Team />
            <FAQ />
            <GoogleReviews />
          </>
        )}
        {path === '/cirugia-bariatrica' && <BariatricSurgery />}
        {path === '/cirugia-metabolica' && <MetabolicSurgery />}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
