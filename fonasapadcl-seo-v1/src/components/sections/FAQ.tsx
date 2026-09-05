import React from 'react';
import { FONASA_YEAR, bariatricPad, formatCLP } from '../../data/fonasa2026';

const FAQ = () => {
  return (
    <section className="pt-16 pb-5 bg-primary-900 text-white">
      <div className="container-custom max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">Preguntas Frecuentes sobre Bono PAD</h2>
        <div className="space-y-4">
          <details className="bg-primary-800 rounded-lg p-5 shadow-md">
            <summary className="cursor-pointer font-semibold text-white">¿Cuánto cuesta el Bono PAD para cirugía bariátrica en {FONASA_YEAR}?</summary>
            <p className="mt-3 text-gray-300">
              El copago publicado para bypass gástrico (código {bariatricPad.bypass.code}) es {formatCLP(bariatricPad.bypass.copay)} y para manga gástrica (código {bariatricPad.sleeve.code}) es {formatCLP(bariatricPad.sleeve.copay)}. Verifica siempre el valor vigente antes de comprar el bono.
            </p>
          </details>
          <details className="bg-primary-800 rounded-lg p-5 shadow-md">
            <summary className="cursor-pointer font-semibold text-white">¿Cómo acceder al Bono PAD para cirugía bariátrica?</summary>
            <p className="mt-3 text-gray-300">Debes cumplir los criterios clínicos y administrativos de Fonasa, contar con la evaluación requerida y realizar la prestación con una institución habilitada para el PAD correspondiente.</p>
          </details>
          <details className="bg-primary-800 rounded-lg p-5 shadow-md">
            <summary className="cursor-pointer font-semibold text-white">¿Qué se necesita para comprar el Bono PAD de cirugía bariátrica?</summary>
            <p className="mt-3 text-gray-300">La documentación exigida puede incluir orden médica y antecedentes clínicos del programa bariátrico. Confirma los requisitos vigentes directamente con Fonasa y con el prestador antes de emitir el bono.</p>
          </details>
          <details className="bg-primary-800 rounded-lg p-5 shadow-md">
            <summary className="cursor-pointer font-semibold text-white">¿El Bono PAD de cirugía bariátrica se puede financiar?</summary>
            <p className="mt-3 text-gray-300">Fonasa contempla mecanismos de préstamo médico en determinadas condiciones. La elegibilidad, porcentaje financiado y modalidad de pago deben verificarse al momento de la solicitud.</p>
          </details>
        </div>

        <div className="text-center pt-12 pb-1">
          <a href="https://calendly.com/clinycosalud/evaluacion-nutricional-bariatrica-online" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
            Agenda evaluación nutricional
          </a>
        </div>
        <div className="text-center pt-6 pb-1">
          <a href="https://wa.me/56953386191?text=hola+me+interesa+saber+si+fonasa+pad+cubre+mi+cirugia+bariatrica" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
            Consultar por Bono PAD
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
