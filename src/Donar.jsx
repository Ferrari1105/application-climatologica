import React from 'react';
import './PantallaDonar.css'; // Asegúrate de importar tus estilos CSS
import Navbar from '../Components/Navbar';

const PantallaDonar = () => {
  return (
    <div className="pantalla-donar">
       <Navbar />
      {/* Banner de fondo */}
      <div className="banner"></div>
      
      {/* Contenedor principal */}
      <div className="contenido">
        {/* Título */}
        <h1 className="titulo">¡Haz una Donación!</h1>
        
        {/* Texto de explicación */}
        <p className="explicacion">
          Tu generosidad ayuda a mejorar el mundo. Con tu donación, podemos continuar haciendo un impacto positivo en la comunidad.
        </p>
        
        {/* Formulario para donar */}
        <div className="formulario-donar">
          <h2>Formulario de Donación</h2>
          <form>
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="campo">
              <label htmlFor="correo">Correo Electrónico:</label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="campo">
              <label htmlFor="cantidad">Cantidad a Donar:</label>
              <input type="number" id="cantidad" name="cantidad" required />
            </div>
            <button type="submit">Donar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PantallaDonar;
