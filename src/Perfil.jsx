import React from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css'
function Perfil() {
  return (
    <div>
      <h1>Página de Perfil</h1>
      <p>Aquí puedes mostrar la información del perfil del usuario.</p>
      <Link to="/Home">
        <button>Volver a la Home</button>
      </Link>
    </div>
  );
}

export default Perfil;
