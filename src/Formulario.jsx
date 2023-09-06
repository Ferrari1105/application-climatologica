import React, { useState } from 'react';
import './Formulario.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Importa los componentes de React Bootstrap

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    genero: '', // Cambiamos el valor por defecto a una cadena vacía
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
    <div className='form-container'>
<div className="Formulario">
      <h1>Formulario Interactivo</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Link to="/Preguntas">
      <Button variant="primary" type="submit"> Siguiente </Button>
        </Link>
    </Form>
    </div>
    </div>
  );
}

export default Formulario;