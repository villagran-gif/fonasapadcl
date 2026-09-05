import React from 'react';
import { FONASA_YEAR, bariatricPad, formatCLP } from '../../data/fonasa2026';

const Pricing = () => {
  return (
    <section className="section bg-primary-900 py-16">
      <div className="container-custom max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-accent">
          Aranceles {FONASA_YEAR} FONASA PAD
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Valores del arancel MLE/PAD vigentes para los códigos de cirugía bariátrica indicados. Confirma siempre la vigencia antes de comprar el bono.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-600 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/bypass-icon.png"
                  alt="Ícono de bypass gástrico"
                  className="w-20 h-20 mr-3"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold uppercase">Bypass Gástrico</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Procedimiento que crea un reservorio gástrico pequeño y una derivación intestinal. La indicación depende de la evaluación clínica individual.
              </p>
              <p className="text-xs mt-3 opacity-90">Código PAD: {bariatricPad.bypass.code}</p>
            </div>
            <div className="mt-6 bg-pink-400/30 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold">Copago del paciente</div>
              <div className="text-3xl font-bold mt-2">{formatCLP(bariatricPad.bypass.copay)}</div>
              <div className="mt-1 text-sm font-medium">Arancel total: {formatCLP(bariatricPad.bypass.total)}</div>
            </div>
          </div>

          <div className="bg-pink-600 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/sleeve-icon.png"
                  alt="Ícono de manga gástrica"
                  className="w-20 h-20 mr-3"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold uppercase">Manga Gástrica</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Procedimiento que reduce el volumen gástrico mediante una resección longitudinal. La indicación depende de la evaluación clínica individual.
              </p>
              <p className="text-xs mt-3 opacity-90">Código PAD: {bariatricPad.sleeve.code}</p>
            </div>
            <div className="mt-6 bg-pink-400/30 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold">Copago del paciente</div>
              <div className="text-3xl font-bold mt-2">{formatCLP(bariatricPad.sleeve.copay)}</div>
              <div className="mt-1 text-sm font-medium">Arancel total: {formatCLP(bariatricPad.sleeve.total)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
