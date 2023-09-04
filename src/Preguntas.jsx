import React, { useState } from 'react';
import './Formulario.css';
import { Link } from 'react-router-dom';

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
    <div className="Formulario">
      <h1>Formulario Interactivo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pregunta1">¿Reciclas regularmente tus desechos, como papel, cartón y plástico?</label>
          <input
            type="checkbox"
            id="pregunta1"
            name="pregunta1"
            checked={formData.pregunta1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregunta2">¿Utilizas el transporte público o compartes vehículos para reducir la emisión de gases de efecto invernadero?</label>
          <input
            type="checkbox"
            id="pregunta2"
            name="pregunta2"
            checked={formData.pregunta2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregunta3">¿Has reemplazado algunas de tus bombillas incandescentes por luces LED o CFL de mayor eficiencia energética?</label>
          <input
            type="checkbox"
            id="pregunta3"
            name="pregunta3"
            checked={formData.pregunta3}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregunta4">¿Qué medidas has tomado en tu vida diaria para reducir tu consumo de energía y, por lo tanto, tu huella de carbono?</label>
          <textarea
            id="pregunta4"
            name="pregunta4"
            value={formData.pregunta4}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregunta5">¿Has considerado cambiar tu dieta o reducir el consumo de carne y productos lácteos para disminuir la huella de carbono asociada a la producción de alimentos?</label>
          <textarea
            id="pregunta5"
            name="pregunta5"
            value={formData.pregunta5}
            onChange={handleChange}
          />
        </div>
        <Link to="/Home">
          <button type='submit'>Siguiente</button>
        </Link>
      </form>
    </div>
  );
}

export default Preguntas;
