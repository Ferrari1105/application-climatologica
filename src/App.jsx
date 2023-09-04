import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
const App= () => {
  return (
    <div className="App">
      <div className="texto">
        <h1>Bienvenido</h1>
        <Link to="/Formulario" className='boton'>
        <button>Comenzar formulario</button>
      </Link>
      </div>
    </div>
  );
};

export default App