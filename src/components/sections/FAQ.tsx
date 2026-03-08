import React from 'react';

const FAQ = () => {
  return (
     <section className="pt-16 pb-5 min-h-screen bg-primary-900 text-white">
      <div className="container-custom max-w-5xl">
              <h3 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <details className="bg-primary-800 rounded-lg p-5 shadow-md">
                  <summary className="cursor-pointer font-semibold text-white">¿Cuánto cuesta o "sale" el bono PAD para cirugía bariátrica?</summary>
                  <p className="mt-3 text-gray-300">El valor del bono depende del procedimiento: Bypass gástrico cuesta $5.737.280 con copago de $2.868.640; la manga gástrica tiene un valor de $5.224.540 con copago de $2.612.270.</p>
                </details>
                <details className="bg-primary-800 rounded-lg p-5 shadow-md">
                  <summary className="cursor-pointer font-semibold text-white">¿Cómo acceder al bono PAD para cirugía bariátrica?</summary>
                  <p className="mt-3 text-gray-300">Requiere presentación de un informe médico que indique que cumples con los requisitos establecidos por Fonasa. Esto lo entrega el equipo multidisciplinario tras evaluación.</p>
                </details>
                <details className="bg-primary-800 rounded-lg p-5 shadow-md">
                  <summary className="cursor-pointer font-semibold text-white">¿Qué se necesita para comprar el bono PAD cirugía bariátrica?</summary>
                  <p className="mt-3 text-gray-300">Debes ir a una sucursal de Fonasa con tu orden médica, pagar el valor del bono y, si corresponde, solicitar el préstamo médico que cubre el 85% del copago.</p>
                </details>
                <details className="bg-primary-800 rounded-lg p-5 shadow-md">
                  <summary className="cursor-pointer font-semibold text-white">¿El bono PAD cirugía bariátrica se puede pagar en cuotas?</summary>
                  <p className="mt-3 text-gray-300">Sí, si solicitas el préstamo Fonasa. Este cubre el 85% del valor del bono y el 15% se paga al contado. El resto en cuotas que no superen el 10% de tus ingresos.</p>
                </details>
              </div>
              {/* CTA final */}
          <div className="text-center pt-16 pb-1">
            <a href="https://calendly.com/clinycosalud/evaluacion-nutricional-bariatrica-online" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
                  Agenda Evaluacion SIN COSTO de Nutricionista Bariátrica.</a>
          </div>
          <div className="text-center pt-16 pb-1">
            <a href="https://wa.me/56953386191?text=hola+me+interesa+saber+si+fonasa+pad+cubre+mi+cirugia+bariatrica+y+me+interesa+la+evaluacion+sin+costo+de+nutricionista" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
                  ¿FONASA PAD cubrirá mi cirugía?</a>
          </div>
            </div>
          </section>

  );
};

export default FAQ;