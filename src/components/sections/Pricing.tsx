import React from 'react';

const Pricing = () => {
  return (
    <section className="section bg-primary-900 py-16">
      <div className="container-custom max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-accent">
          Aranceles 2025 FONASA PAD
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bypass Card */}
          <div className="bg-pink-600 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/bypass-icon.png"
                  alt="Ícono Bypass Gástrico"
                  className="w-20 h-20 mr-3"
                />
                <h3 className="text-2xl font-bold uppercase">Bypass Gástrico</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Consiste en reducir el tamaño del estómago y modificar el intestino, de manera que los alimentos se “salten” aproximadamente 1,5 metros de este, y disminuya su capacidad de absorción.
              </p>
            </div>
            <div className="mt-6 bg-pink-400/30 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold">Valor a pagar por el paciente</div>
              <div className="text-3xl font-bold mt-2">$2.496.690</div>
              <div className="mt-1 text-sm font-medium">Valor Bono PAD</div>
            </div>
          </div>

          {/* Manga Card */}
          <div className="bg-pink-600 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/sleeve-icon.png"
                  alt="Ícono Manga Gástrica"
                  className="w-20 h-20 mr-3"
                />
                <h3 className="text-2xl font-bold uppercase">Manga Gástrica</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Consiste en sacar (resecar) aproximadamente un 80% del estómago y dejarlo de forma tubular, con una capacidad entre 100–200cc (una taza de té).
              </p>
            </div>
            <div className="mt-6 bg-pink-400/30 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold">Valor a pagar por el paciente</div>
              <div className="text-3xl font-bold mt-2">$2.333.850</div>
              <div className="mt-1 text-sm font-medium">Valor Bono PAD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
