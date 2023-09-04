import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="create-profile-button">
        <Link to="/Donar" className='Donar'>
          <button className='donar'>Donar</button>
        </Link>
      </div>

      <div className="logo">EcoQuest</div>

      <div className="create-profile-button">
        <Link to="/Perfil" className='Perfil'>
          <button className='profile-button'>Perfil</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
