import React, { useState } from 'react';
import './Formulario.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Importa los componentes de React Bootstrap

function Preguntas() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    genero: '',
    comentarios: '',
    pregunta1: false,
    pregunta2: false,
    pregunta3: false,
    pregunta4: '',
    pregunta5: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>¿Reciclas regularmente tus desechos, como papel, cartón y plástico?</Form.Label>
            <Form.Check type="checkbox"
            id="pregunta1"
            name="pregunta1"
            checked={formData.pregunta1}
            onChange={handleChange} />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>¿Utilizas el transporte público o compartes vehículos para reducir la emisión de gases de efecto invernadero?</Form.Label>
            <Form.Check type="checkbox"
            id="pregunta2"
            name="pregunta2"
            checked={formData.pregunta2}
            onChange={handleChange} />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>¿Has reemplazado algunas de tus bombillas incandescentes por luces LED o CFL de mayor eficiencia energética?</Form.Label>
            <Form.Check type="checkbox"
            id="pregunta3"
            name="pregunta3"
            checked={formData.pregunta3}
            onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>¿Qué medidas has tomado en tu vida diaria para reducir tu consumo de energía y, por lo tanto, tu huella de carbono?</Form.Label>
            <Form.Control as="textarea"
            id="pregunta4"
            name="pregunta4"
            value={formData.pregunta4}
            onChange={handleChange} />
          </Form.Group>

          <Link to="/Home">
          <Button variant="primary" type="submit"> Siguiente </Button>
            </Link>
        </Form>
        </div>
        </div>
  );
}

export default Preguntas;
