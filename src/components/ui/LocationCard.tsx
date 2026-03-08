import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface LocationCardProps {
  city: string;
  address: string;
  mapUrl: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ city, address, mapUrl }) => {
  return (
    <div className="card hover:shadow-lg overflow-hidden">
      <div className="h-48 w-full overflow-hidden mb-4">
        <iframe 
          src={mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${city}`}
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{city}</h3>
      
      <div className="flex items-start mb-3">
        <MapPin size={18} className="text-accent mr-2 mt-1" />
        <p>{address}</p>
      </div>
      
      <div className="flex items-center">
        <Phone size={18} className="text-accent mr-2" />
        <p>+56 2 2222 3333</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-primary-800">
        <a 
          href="#contact" 
          className="text-accent hover:underline flex justify-between items-center"
        >
          Agendar Consulta
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default LocationCard;