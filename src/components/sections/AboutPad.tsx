import React from 'react';
import { FileCheck, Clock, CreditCard, HeartPulse } from 'lucide-react';

const AboutPad = () => {
  return (
    <section id="about-pad" className="section bg-primary-950">
      <div className="container-custom">
        <h2 className="section-title">¿Qué es el Bono PAD?</h2>
        
        <div className="max-w-4xl mx-auto bg-primary-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-lg mb-8 leading-relaxed">
            El <strong>Pago Asociado a Diagnóstico (PAD)</strong> es un programa de FONASA que cubre un conjunto de prestaciones médicas asociadas a una patología o diagnóstico específico, como la cirugía bariátrica, por un valor fijo conocido previamente.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <FileCheck className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Cobertura integral</h4>
                <p className="text-gray-300">Incluye consultas, exámenes, procedimientos, cirugía y controles posteriores.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <Clock className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tiempo definido</h4>
                <p className="text-gray-300">La atención tiene un plazo definido desde el diagnóstico hasta la resolución.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <CreditCard className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Costo conocido</h4>
                <p className="text-gray-300">Sabes exactamente cuánto pagarás, sin sorpresas ni cobros adicionales.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <HeartPulse className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Calidad garantizada</h4>
                <p className="text-gray-300">Atención en centros acreditados con estándares de calidad y seguridad.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="https://wa.me/56953386191?text=Hola+me+interesa+conocer+mi+cobertura" className="btn btn-primary">
              Consulta por tu cobertura
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPad;