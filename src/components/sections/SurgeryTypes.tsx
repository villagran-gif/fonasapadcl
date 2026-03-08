import React from 'react';
import SurgeryCard from '../ui/SurgeryCard';

const SurgeryTypes = () => {
  return (
    <section id="surgery-types" className="section bg-primary-900 relative overflow-hidden">
      <div className="container-custom">
        <h2 className="section-title">Tipos de Cirugía</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SurgeryCard
            title="Manga Gástrica"
            description="Procedimiento quirúrgico que reduce el tamaño del estómago, limitando la ingesta de alimentos y generando cambios hormonales que disminuyen el apetito."
            benefits={[
              "Pérdida de peso significativa y sostenida",
              "Mejora de condiciones médicas asociadas",
              "Recuperación relativamente rápida",
              "No altera la absorción de nutrientes"
            ]}
            iconType="manga"
          />
          
          <SurgeryCard
            title="Bypass Gástrico"
            description="Procedimiento que reduce el tamaño del estómago y altera el proceso digestivo, limitando la absorción de calorías y nutrientes."
            benefits={[
              "Mayor pérdida de peso a largo plazo",
              "Efectivo para diabetes tipo 2",
              "Menor probabilidad de recuperar peso",
              "Resultados duraderos con seguimiento adecuado"
            ]}
            iconType="bypass"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl mb-6">¿No sabes qué opción es mejor para ti?</h3>
          <a href="#contact" className="btn btn-primary">
            Agenda una evaluación
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurgeryTypes;