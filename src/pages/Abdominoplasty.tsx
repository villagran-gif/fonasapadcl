import React from 'react';

const Abdominoplasty = () => {
  return (
    <section className="section bg-primary-900 py-20">
      <div className="container-custom max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 py-20">
          <img src="/assets/abdomenicon.png" alt="Abdominoplastía"  className="w-24 h-24 md:w-32 md:h-32 filter brightness-0 invert" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
              ¿Qué es la Abdominoplastía con Bono PAD?
            </h2>
            <p className="text-gray-200 leading-relaxed">
              La <strong>abdominoplastía</strong> es una <strong>cirugía reconstructiva</strong> indicada para personas que presentan <strong>abdomen flácido</strong>, también conocido como <strong>“guatita de delantal”</strong>. Gracias al <span className="text-blue-400 font-semibold">Bono PAD de Fonasa</span>, este procedimiento está cubierto parcialmente y permite acceder a medicina privada a un <strong>precio fijo, preestablecido y sin sorpresas</strong>.
            </p>
          </div>
        </div>

        <section className="mb-12 bg-blue-950/50 rounded-xl">
          <p>
            Gracias al <strong>Bono PAD de Fonasa</strong>, este procedimiento está cubierto parcialmente, permitiendo acceder a medicina privada a un <strong>precio fijo, preestablecido y sin sorpresas</strong>.
          </p>
        </section>

        <section className="mb-12 bg-orange-950/30 p-6 rounded-xl">
  <div className="card hover:shadow-xl group max-w-xs mx-auto">
    <div className="relative overflow-hidden rounded-lg bg-white aspect-[3/4]">
      <img
        src="/assets/dr-francisco-bencina.png"
        alt="Francisco Bencina"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-xl font-semibold mt-4 text-center">Dr. Francisco Bencina</h3>
    <p className="text-accent text-center">Cirujano Plástico</p>
  </div>
</section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-accent mb-4">¿Qué es el "abdomen flácido"?</h3>
          <p className="mb-2">
            <strong>Código Fonasa: 2505950</strong><br />
            “Abdomen flácido” es una condición médica en la que se presenta un exceso de grasa y piel en la parte inferior del abdomen, lo que provoca que esta zona pierda su firmeza y elasticidad, colgando sobre el pubis de forma similar a un delantal.
          </p>
          <p className="mb-2">Esta situación puede deberse a diversos factores como:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Pérdida significativa de peso</li>
            <li>Embarazos múltiples</li>
            <li>Otras causas que afectan la tonicidad muscular o la piel</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-accent mb-4">Requisitos para acceder a Abdominoplastía Bono PAD</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Ser afiliado Fonasa en tramo B, C o D</li>
            <li>Tener indicación médica para cirugía reconstructiva</li>
            <li>IMC menor a 30 (menores de 55 años)</li>
            <li>IMC menor a 25 (entre 55 y 65 años)</li>
            <li>No estar embarazada ni lactando (mínimo 6 meses postparto)</li>
            <li>No fumar (mínimo 4 a 6 semanas antes y después)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-accent mb-4">Cobertura y beneficios</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Valor fijo y transparente: sin costos adicionales ni sorpresas</li>
            <li>Incluye hospitalización, medicamentos y controles postoperatorios por 15 días</li>
            <li>Cubre exámenes, insumos, equipo médico completo y pabellón</li>
            <li>Atención en clínicas privadas con convenio Fonasa</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-accent mb-4">Valores Fonasa PAD</h3>
          <p><strong>Total:</strong> $3.583.580</p>
          <p><strong>Copago:</strong> $1.791.790</p>
          <p><strong>Préstamo 85%:</strong> $1.523.020</p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-accent mb-4">Criterios de exclusión</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Embarazo</li>
            <li>Post parto antes de 6 meses y con lactancia detenida</li>
            <li>Enfermedad oncológica activa</li>
            <li>Enfermedad dermatológica activa en el área quirúrgica</li>
            <li>Enfermedad psiquiátrica descompensada</li>
            <li>IMC mayor a 30</li>
            <li>Tabaquismo activo menor a 120 días (mínimo 4 meses de suspensión)</li>
          </ol>
        </section>

        <div className="text-center pt-8">
          <a href="https://wa.me/56953386191?text=hola+me+interesa+la+cirugia+de+abdominoplastia+por+fonasa+pad" className="btn btn-primary">
            Me interesa cirugia de abdominoplastia por fonasa pad
          </a>
        </div>
      </div>
    </section>
  );
};

export default Abdominoplasty;
