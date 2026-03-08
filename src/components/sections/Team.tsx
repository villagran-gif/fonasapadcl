import React from 'react';
import TeamMember from '../ui/TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ramón Díaz",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Ramon Diaz.webp"
    },
    {
      name: "Dr. Emilio Morales",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Emilio Morales.webp"
    },
    {
      name: "Dr. Rodrigo Villagrán",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Rodrigo Villagran.webp"
    },
     {
      name: "Dr. Alberto Sirabo",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Alberto Sirabo.webp"
    },
    {
      name: "Dr. Cristobal Guixé",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Cristobal Guixe.webp"
    },
    {
      name: "Dr. Nasser Eluzen",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Nasser Eluzem.webp"
    },
    {
      name: "Dr. Andrés San Martín",
      role: "Cirujano Bariátrico",
      imageUrl: "../assets/Andres San Martin.webp"
    }
  ];

  return (
    <section className="section bg-primary-900">
      <div className="container-custom">
        <h2 className="section-title">Nuestro Equipo Médico</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Team