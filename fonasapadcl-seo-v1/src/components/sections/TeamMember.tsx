import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="card hover:shadow-xl group">
      <div className="relative mb-4 overflow-hidden rounded-lg h-64 bg-white">
        <img
          src={imageUrl}
          alt={name}
          className="w-70 h-70 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-accent">{role}</p>
    </div>
  );
};

export default TeamMember