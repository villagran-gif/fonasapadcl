import React from 'react';
import { FONASA_YEAR, bariatricPad, formatCLP } from '../data/fonasa2026';
interface ArancelCardProps {
  title: string;
  code: string;
  total: number;
  copago: number;
  prestamo: number;
  pie: number;
}
const ArancelCard = ({ title, code, total, copago, prestamo, pie }: ArancelCardProps) => {
  return (
    <div className="bg-primary-800 rounded-xl shadow-lg overflow-hidden">
      <div className="bg-accent text-white text-center p-5">
        <p className="text-xs tracking-wide uppercase font-medium">Valor pie inicial 15%</p>
        <p className="text-4xl font-extrabold tracking-tight mt-1">${pie.toLocaleString()}</p>
      </div>
      <div className="px-6 py-5 text-white text-sm space-y-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p><strong>Código:</strong> {code}</p>
        <p><strong>Total:</strong> ${total.toLocaleString()}</p>
        <p><strong>Copago Fonasa PAD:</strong> ${copago.toLocaleString()}</p>
        <p><strong>Préstamo (85%):</strong> ${prestamo.toLocaleString()}</p>
        <p><strong>Pie Inicial (15%):</strong> ${pie.toLocaleString()}</p>
      </div>
    </div>
  );
};

const BariatricSurgery = () => {
  return (
    <div className="pt-32 min-h-screen bg-primary-900 text-white">
      <div className="container-custom max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cirugía Bariátrica
        </h1>
        <h2 className="text-2xl text-gray-300 mb-12">
          Tratamiento integral para la obesidad severa
        </h2>

        <div className="space-y-16">

          {/* Qué es */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">¿Qué es la cirugía bariátrica?</h3>
            <p className="text-gray-300 leading-relaxed">
              Es una alternativa médica para personas con obesidad severa que no han logrado bajar de peso con otros métodos. En Clínyco, ofrecemos esta cirugía con respaldo multidisciplinario y cobertura Fonasa PAD.
            </p>
          </section>

          {/* Beneficios */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Beneficios principales</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span> Reducción significativa de peso</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span> Remisión o control de enfermedades como diabetes, hipertensión y apnea del sueño</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span> Mejora de autoestima, salud cardiovascular y calidad de vida</li>
            </ul>
          </section>

          {/* Motivaciones del paciente */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">¿Por qué considerar esta cirugía?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-primary-800 rounded-lg p-6">
                <p className="font-semibold">Luchas contra la obesidad</p>
                <p className="text-sm mt-2">Estás atrapado en dietas fallidas, sin lograr una solución sostenible.</p>
              </div>
              <div className="bg-primary-800 rounded-lg p-6">
                <p className="font-semibold">Autoestima afectada</p>
                <p className="text-sm mt-2">Tu peso limita tu confianza y autoimagen. Quieres sentirte cómodo/a contigo mismo/a.</p>
              </div>
              <div className="bg-primary-800 rounded-lg p-6">
                <p className="font-semibold">Problemas de salud crónicos</p>
                <p className="text-sm mt-2">Diabetes, hipertensión, hígado graso y más patologías derivadas del sobrepeso.</p>
              </div>
              <div className="bg-primary-800 rounded-lg p-6">
                <p className="font-semibold">Mejorar tu salud cardiovascular</p>
                <p className="text-sm mt-2">Te invitamos a trabajar juntos en estas metas.</p>
              </div>
            </div>
          </section>

          {/* Procedimientos disponibles */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Procedimientos disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white text-primary-900 rounded-lg p-4 shadow-md">
                <img src="../assets/Gastric-Sleeve-Turkey-3.webp" alt="Manga gástrica" className="w-full mb-4 rounded" />
                <h4 className="text-xl font-semibold mb-2">Manga gástrica</h4>
                <p>Reduce el tamaño del estómago en un 80%, limitando la cantidad de alimentos ingeridos.</p>
              </div>
              <div className="bg-white text-primary-900 rounded-lg p-4 shadow-md">
                <img src="../assets/Gastric-Bypass-Turkey-1.webp" alt="Bypass gástrico" className="w-full mb-4 rounded" />
                <h4 className="text-xl font-semibold mb-2">Bypass gástrico</h4>
                <p>Reducción del estómago y derivación del intestino para disminuir absorción de calorías.</p>
              </div>
               <div className="bg-white text-primary-900 rounded-lg p-4 shadow-md">
                <img src="../assets/Gastric-Balloon-Turkey-2.webp" alt="Manga gástrica" className="w-full mb-4 rounded" />
                <h4 className="text-xl font-semibold mb-2">Balón gástrico</h4>
                <p>Dispositivo temporal que se introduce en el estómago para generar sensación de saciedad y facilitar la pérdida de peso sin cirugía.</p>
              </div>
              <div className="bg-white text-primary-900 rounded-lg p-4 shadow-md">
                <img src="../assets/5bca81ac-5254-4c3f-8382-df5e5085946f-Copy.webp" alt="Bypass gástrico" className="w-full mb-4 rounded" />
                <h4 className="text-xl font-semibold mb-2">Cirugía Revisional</h4>
                <p>Intervención destinada a corregir o mejorar una cirugía bariátrica previa que no alcanzó los resultados esperados.</p>
              </div>
            </div>
          </section>

          {/* Requisitos detallados */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Cómo acceder al Bono PAD</h3>
            <div className="text-gray-300 space-y-4">
              <p>Para acceder al bono PAD de cirugía bariátrica debes contar con un informe médico emitido por un especialista que confirme que cumples con los requisitos para someterte a manga gástrica o bypass gástrico.</p>
              <p>Recomendamos ingresar a un programa contra la obesidad con equipo multidisciplinario (nutriólogo, nutricionista, psicólogo, kinesiólogo y cirujano). Ellos evaluarán tu caso y entregarán el pase médico.</p>
              <p>Luego, deberás verificar qué institución se encuentra habilitada para el PAD correspondiente y confirmar la documentación vigente. Los códigos son {bariatricPad.bypass.code} para bypass gástrico y {bariatricPad.sleeve.code} para manga gástrica.</p>
            </div>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Tabla de criterios IMC para acceder</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm bg-primary-800 text-white rounded-lg overflow-hidden">
                <thead className="bg-accent text-white">
                  <tr>
                    <th className="py-3 px-4">IMC</th>
                    <th className="py-3 px-4">Alternativa 1</th>
                    <th className="py-3 px-4">Alternativa 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-primary-700">
                    <td className="py-3 px-4">Sobre 40</td>
                    <td className="py-3 px-4">Sin condición</td>
                    <td className="py-3 px-4">Sin condición</td>
                  </tr>
                  <tr className="border-t border-primary-700">
                    <td className="py-3 px-4">Entre 35 y 40</td>
                    <td className="py-3 px-4">1 criterio mayor + 1 menor</td>
                    <td className="py-3 px-4">3 criterios menores</td>
                  </tr>
                  <tr className="border-t border-primary-700">
                    <td className="py-3 px-4">Entre 30 y 35</td>
                    <td className="py-3 px-4">Diabetes Mellitus tipo 2</td>
                    <td className="py-3 px-4">2 criterios mayores + 1 criterio menor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-16">
  <h3 className="text-2xl font-semibold mb-6">Criterios Fonasa PAD</h3>
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm bg-primary-800 text-white rounded-lg overflow-hidden">
      <thead className="bg-accent text-white">
        <tr>
          <th className="py-3 px-4">Criterio Mayor</th>
          <th className="py-3 px-4">Criterio Menor</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">Diabetes tipo 2</td>
          <td className="py-3 px-4">Prediabetes</td>
        </tr>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">Hipertensión arterial</td>
          <td className="py-3 px-4">Dislipidemia</td>
        </tr>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">SAHOS</td>
          <td className="py-3 px-4">Hígado graso</td>
        </tr>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">Trastorno musculoesquelético severo que requiere uso de prótesis u órtesis o requiere cirugía</td>
          <td className="py-3 px-4">Hiperuricemia</td>
        </tr>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">Síndrome Metabólico</td>
          <td className="py-3 px-4">Hipotiroidismo</td>
        </tr>
        <tr className="border-t border-primary-700">
          <td className="py-3 px-4">Insuficiencia renal</td>
          <td className="py-3 px-4">Reflujo gastroesofágico</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

          {/* Aranceles */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Aranceles {FONASA_YEAR} FONASA PAD</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ArancelCard
                title={bariatricPad.sleeve.name}
                code={bariatricPad.sleeve.code}
                total={bariatricPad.sleeve.total}
                copago={bariatricPad.sleeve.copay}
                prestamo={bariatricPad.sleeve.loan85}
                pie={bariatricPad.sleeve.downPayment15}
              />
              <ArancelCard
                title={bariatricPad.bypass.name}
                code={bariatricPad.bypass.code}
                total={bariatricPad.bypass.total}
                copago={bariatricPad.bypass.copay}
                prestamo={bariatricPad.bypass.loan85}
                pie={bariatricPad.bypass.downPayment15}
              />
            </div>
            <p className="text-xs text-gray-400 mt-4">Valores referenciales del arancel PAD/MLE {FONASA_YEAR}. Verifica la vigencia directamente con Fonasa y con la institución en convenio antes de emitir el bono.</p>
          </section>
          
          {/* Preguntas frecuentes */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h3>
            <div className="space-y-4">
              <details className="bg-primary-800 rounded p-4">
                <summary className="cursor-pointer font-semibold">¿Cuánto sale el bono PAD para cirugía bariátrica?</summary>
                <p className="mt-2 text-gray-300">En {FONASA_YEAR}, el copago publicado para bypass gástrico es {formatCLP(bariatricPad.bypass.copay)} y para manga gástrica es {formatCLP(bariatricPad.sleeve.copay)}. Confirma siempre el valor vigente antes de comprar el bono.</p>
              </details>
              <details className="bg-primary-800 rounded p-4">
                <summary className="cursor-pointer font-semibold">¿Cómo acceder al bono PAD para cirugía bariátrica?</summary>
                <p className="mt-2 text-gray-300">Debes cumplir los criterios clínicos y administrativos vigentes de Fonasa, contar con la evaluación requerida y realizar la prestación con un prestador habilitado para el PAD correspondiente.</p>
              </details>
              <details className="bg-primary-800 rounded p-4">
                <summary className="cursor-pointer font-semibold">¿Qué se necesita para comprar el bono PAD cirugía bariátrica?</summary>
                <p className="mt-2 text-gray-300">La documentación exigida puede incluir orden médica y antecedentes clínicos del programa bariátrico. Confirma la documentación vigente directamente con Fonasa y con el prestador.</p>
              </details>
              <details className="bg-primary-800 rounded p-4">
                <summary className="cursor-pointer font-semibold">¿El bono PAD cirugía bariátrica se puede pagar en cuotas?</summary>
                <p className="mt-2 text-gray-300">Fonasa contempla mecanismos de préstamo médico bajo determinadas condiciones. La elegibilidad, porcentaje financiado y modalidad de pago deben verificarse al momento de la solicitud.</p>
              </details>
            </div>
          </section>

          {/* CTA final */}
          <div className="text-center pt-4 pb-16">
            <a href="https://wa.me/56953386191?text=Hola%20me%20gustaría%20saber%20más%20sobre%20la%20cirugía%20bariátrica" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
              Agenda tu evaluación sin costo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BariatricSurgery;
