import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="content">
        {/* Tu contenido de la página de inicio va aquí */}
        <h1>Bienvenido a Mi Sitio</h1>
      </div>
    </div>
  );
}

export default Home;