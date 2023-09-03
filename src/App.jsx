import React from 'react';
import { Link } from 'react-router-dom';

const App= () => {
  return (
    <div className="App">
      <div className="centered-content">
        <h1>Bienvenido</h1>
        <Link to="/Formulario">
        <button>Comenzar formulario</button>
      </Link>
      </div>
    </div>
  );
};

export default App