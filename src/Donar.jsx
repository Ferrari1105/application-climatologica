import React from 'react';
import './PantallaDonar.css'; // Asegúrate de importar tus estilos CSS
import Navbar from '../Components/Navbar';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PantallaDonar = () => {
  return (
    <>
      <Navbar className="fixed-top"/>
    <div className='pantalla-donar-container'>
      <div className="pantalla-donar">
        <img className='img-banner' src="https://images.ctfassets.net/tcoigcjw85h2/4R9nkpFrDVB7VTN5mJ6Afp/4e585143661287a4eae1467d94078658/banner-huella-carbono-desk.png" alt="" />

        <div className="contenido">

          <h1 className="titulo">¡Haz una Donación!</h1>


          <p className="explicacion">
          El calentamiento global es una amenaza inminente que requiere acción inmediata. Tu donación desempeña un papel crucial en la lucha contra este fenómeno. Con cada contribución, estás respaldando proyectos para reducir emisiones, proteger ecosistemas y apoyar a comunidades afectadas. Tu generosidad marca la diferencia en la construcción de un futuro sostenible para todos. ¡Únete a la lucha y dona hoy!
          </p>

        </div>
      </div>
      <div className="formulario-donar">
        <div className='TituloDonacion'>
        <h2>Formulario de Donación</h2>
        </div>
        <Form>
      <Form.Group className="mb-3 campo">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name="nombre" placeholder="Nombre"required/>
      </Form.Group>

      <Form.Group className="mb-3 campo">
        <Form.Label>Correo Electrónico:</Form.Label>
        <Form.Control type="text" name="correo" placeholder="Correo" required/>
      </Form.Group>

      <Form.Group className="mb-3 campo">
        <Form.Label>Cantidad a Donar:</Form.Label>
        <Form.Control type="number" name="cantidad"  placeholder="EJ:666"required/>
      </Form.Group>

      <Link to="/Home">
      <Button variant="primary" type="submit"> Donar </Button>
        </Link>
    </Form>
      </div>
    </div></>
  );
};

export default PantallaDonar;