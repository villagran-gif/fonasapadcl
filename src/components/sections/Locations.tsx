import React from 'react';
import LocationCard from '../ui/LocationCard';

const Locations = () => {
  const locations = [
    {
      city: "Santiago",
      address: "Guardia Vieja 255, Providencia",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.888281411337!2d-70.60983492432755!3d-33.42513079959277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf40a4c7d0e7%3A0x9a8c7d5e12e8d613!2sGuardia%20Vieja%20255%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1708482183044!5m2!1ses!2scl"
    },
    {
      city: "Antofagasta",
      address: "Manuel Antonio Matta 1868, piso 2",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8965435880387!2d-70.39742492458168!3d-23.537999179480387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd5305c5b1eb3%3A0x4c7a7d7e1986b9d2!2sManuel%20Antonio%20Matta%201868%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1708482245461!5m2!1ses!2scl"
    },
    {
      city: "Calama",
      address: "Av. Balmaceda 1750, Torre Cobre, of. 904",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.001547514046!2d-68.93045392461435!3d-22.063735679999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac0812e1544957%3A0x7d6b3c0d76e5b5e8!2sAv.%20Jos%C3%A9%20Manuel%20Balmaceda%201750%2C%20Calama%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1708482301461!5m2!1ses!2scl"
    }
  ];

  return (
    <section id="locations" className="section bg-primary-950">
      <div className="container-custom">
        <h2 className="section-title">Nuestras Ubicaciones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              city={location.city}
              address={location.address}
              mapUrl={location.mapUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations