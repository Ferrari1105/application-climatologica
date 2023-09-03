import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mi Sitio</div>
        <div className="create-profile-button">
        <Link to="/Perfil">
        <button>Ver Perfil</button>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
