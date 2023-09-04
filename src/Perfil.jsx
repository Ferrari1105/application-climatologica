import React from 'react';
import './Perfil.css';
import Navbar from '../Components/Navbar';

function Perfil() {
  return (
    <div className="Home">
      <Navbar />
      <div className="content">
        {/* Tu contenido de la página de inicio va aquí */}
        <h1>Perfil</h1>
      </div>
    </div>
  );
}

export default Perfil;