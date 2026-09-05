import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  profileUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, profileUrl }) => {
  const content = (
    <>
      <div className="relative mb-4 overflow-hidden rounded-lg h-64 bg-white">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-accent">{role}</p>
      {profileUrl && <p className="text-sm text-gray-300 mt-2">Ver perfil profesional →</p>}
    </>
  );

  return profileUrl ? (
    <a href={profileUrl} className="card hover:shadow-xl group block" rel="author">
      {content}
    </a>
  ) : (
    <div className="card hover:shadow-xl group">{content}</div>
  );
};

export default TeamMember;
