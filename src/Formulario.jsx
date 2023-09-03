import React, { useState } from 'react';
import './Formulario.css';
import { Form, Link } from 'react-router-dom';
function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    genero: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor.
    console.log(formData);
  };

  return (
    <div className="Formulario">
      <h1>Formulario Interactivo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Género:</label>
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="Masculino"
            onChange={handleChange}
          />
          <label htmlFor="masculino">Masculino</label>
          <input
            type="radio"
            id="femenino"
            name="genero"
            value="Femenino"
            onChange={handleChange}
          />
          <label htmlFor="femenino">Femenino</label>
          <input
            type="radio"
            id="otro"
            name="genero"
            value="Otro"
            onChange={handleChange}
          />
          <label htmlFor="otro">Otro</label>
        </div>

        <Link to="/Preguntas">
        <button type='submit'>Siguiente</button>
      </Link>
      </form>
    </div>
  );
}

export default Formulario;
