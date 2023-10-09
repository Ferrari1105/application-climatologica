import React, { useState } from 'react';
import './Formulario.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Importa los componentes de React Bootstrap
import Navbar from '../Components/Navbar.jsx'
import { UsuarioContext } from './../Context/usuarioContext'
import { useContext } from 'react';

function Formulario() {
  const { usuarioG, setUsuarioG } = useContext(UsuarioContext);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    email: '',// Cambiamos el valor por defecto a una cadena vacía
    nivel: 0,
    descripcion:'Cosas sobre vos',
    actividadesRecientes: [{actividad:'actividad: A'},{actividad:'actividad: B'},{actividad:'actividad: C'},] 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setUsuarioG(formData)
    localStorage.setItem('usuario', JSON.stringify(formData))
  };

  return (
<>
      <Navbar className="fixed-top"/>
    <div className='form-container'>
<div className="Formulario">
      <div className='tituloForm'>
      <h1>Formulario Interactivo</h1>
      </div>
      <Form >
      <Form.Group className="mb-3">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name='nombre' placeholder="Nombre" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" name='apellido'placeholder="Apellido"onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Edad:</Form.Label>
        <Form.Control type="number" name='edad'placeholder="Edad"onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" name='email'placeholder="Email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Link to="/Preguntas" >
      <Button variant="primary" type="submit"onClick={handleSubmit}> Siguiente </Button>
        </Link>
    </Form>
    </div>
    </div>
</>
  );
}

export default Formulario;