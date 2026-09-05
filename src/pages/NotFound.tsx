import React from 'react';

const NotFound = () => (
  <section className="pt-40 pb-24 min-h-[70vh] bg-primary-900 text-white">
    <div className="container-custom max-w-3xl text-center">
      <p className="text-accent font-semibold mb-3">Error 404</p>
      <h1 className="text-4xl font-bold mb-5">Página no encontrada</h1>
      <p className="text-gray-300 mb-8">La dirección que ingresaste no existe o fue movida.</p>
      <a className="btn btn-primary" href="/">Volver al inicio</a>
    </div>
  </section>
);

export default NotFound;
