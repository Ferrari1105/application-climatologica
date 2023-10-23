import React from 'react';
import '../Css/Home.css';
import Navbar from '../Components/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  // Función para abrir el modal
  const handleShowModal1 = () => {
    setShowModal1(true);
  };
  const handleShowModal2 = () => {
    setShowModal2(true);
  }; const handleShowModal3 = () => {
    setShowModal3(true);
  };
  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
  };

  return (
    <>
    <Navbar />
      <div className="content">
        <div className='tituloHome'>
        <h1>Recomendaciones Personalizadas</h1>
        </div>
    <div className="Home">
        {/* Tu contenido de la página de inicio va aquí */}
        <Card style={{ width: '20%' }}>
      <Card.Img className='cardFoto' variant="top" src="https://fiorp.org/wp-content/uploads/2020/03/economia_circular.jpg" />
      <Card.Body>
        <Card.Title>Reciclar</Card.Title>
        <Card.Text>
        Separa tus desechos en contenedores de reciclaje adecuados. Reutiliza envases cuando sea posible y apoya la recogida selectiva en tu comunidad...
        </Card.Text>
        <Button variant="primary" onClick={handleShowModal1}>Ver Mas</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '20%' }} >
      <Card.Img className='cardFoto' variant="top" src="https://s03.s3c.es/imag/_v0/1200x655/8/1/d/CO2-medioambiente.jpg" />
      <Card.Body>
        <Card.Title>Dejar De Contaminar</Card.Title>
        <Card.Text>
        Reduce el uso de plásticos desechables, como bolsas y botellas. Opta por productos reutilizables y evita tirar basura en lugares no apropiados...
        </Card.Text>
        <Button variant="primary" onClick={handleShowModal2}>Ver Mas</Button>
      </Card.Body>
    </Card> <Card style={{ width: '20%' }}>
      <Card.Img className='cardFoto' variant="top" src="https://www.neuqueninforma.gob.ar/wp-content/uploads/2020/10/web-Eficiencia.jpg" />
      <Card.Body>
        <Card.Title>Ahorrar Energia</Card.Title>
        <Card.Text>
        Apaga luces y dispositivos cuando no los uses. Utiliza bombillas LED de bajo consumo y ajusta la temperatura de tu hogar para reducir el uso de calefacción y aire acondicionado...
        </Card.Text>
        <Button variant="primary" onClick={handleShowModal3}>Ver Mas</Button>
      </Card.Body>
    </Card>
    
      {/* Modal */}
      <Modal show={showModal1} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reciclar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar el contenido adicional que desees mostrar */}
          <p>Separa tus desechos en contenedores de reciclaje adecuados. Reutiliza envases cuando sea posible y apoya la recogida selectiva en tu comunidad</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal2} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Dejar De Contaminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar el contenido adicional que desees mostrar */}
          <p>Reduce el uso de plásticos desechables, como bolsas y botellas. Opta por productos reutilizables y evita tirar basura en lugares no apropiados</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal3} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ahorrar Energia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar el contenido adicional que desees mostrar */}
          <p>Apaga luces y dispositivos cuando no los uses. Utiliza bombillas LED de bajo consumo y ajusta la temperatura de tu hogar para reducir el uso de calefacción y aire acondicionado</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
    </>
  );
}

export default Home;