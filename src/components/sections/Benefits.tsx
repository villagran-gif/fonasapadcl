import React from 'react';
import { ShieldCheck, Users, Stethoscope } from 'lucide-react';
import BenefitCard from '../ui/BenefitCard';

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={48} className="text-accent" />,
      title: "Cobertura completa Fonasa",
      description: "Accede a tratamientos médicos de calidad con la cobertura que ofrece el programa PAD de Fonasa."
    },
    {
      icon: <Users size={48} className="text-accent" />,
      title: "Equipo médico multidisciplinario",
      description: "Nuestro equipo de especialistas trabaja en conjunto para ofrecerte la mejor atención personalizada."
    },
    {
      icon: <Stethoscope size={48} className="text-accent" />,
      title: "Seguimiento postoperatorio personalizado",
      description: "Te acompañamos durante todo el proceso con un seguimiento cuidadoso y adaptado a tus necesidades."
    }
  ];

  return (
    <section className="section bg-primary-900 mt-16">
      <div className="container-custom">
        <h2 className="section-title">Beneficios del programa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits