import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-primary-900 to-primary-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Accede a tu Cirugía con <span className="text-accent">FONASA PAD</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up">
            Información y orientación para acceder a prestaciones con Bono PAD, evaluación profesional y acompañamiento clínico
          </p>
          <p className="text-l md:text-2xl mb-10 animate-slide-up text-accent">
            Santiago - Antofagasta - Calama
          </p>
          <a 
  href="https://wa.me/56953386191?text=Hola+me+interesa+saber+más" 
  className="btn btn-primary text-lg px-8 py-4 shadow-lg animate-slide-up"
  target="_blank" 
  rel="noopener noreferrer"
>
  Solicita Información
</a>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-950 to-transparent"></div>
    </section>
  );
};

export default Hero;