import React from 'react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>BiciAmigo</h1>
      <p>Bienvenido a BiciAmigo, ayudaremos con tu proxima carrera.</p>
      <img
        src="/assets/portada.jpg" // Ruta relativa desde la raíz del servidor
        alt="Portada de BiciAmigo" // Texto descriptivo
        style={{ maxWidth: '100%', height: 'auto' }}
      /> 
    </div>
  );
};

export default HomePage;
