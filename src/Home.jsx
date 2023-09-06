import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
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
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '20%' }} >
      <Card.Img className='cardFoto' variant="top" src="https://s03.s3c.es/imag/_v0/1200x655/8/1/d/CO2-medioambiente.jpg" />
      <Card.Body>
        <Card.Title>Dejar De Contaminar</Card.Title>
        <Card.Text>
        Reduce el uso de plásticos desechables, como bolsas y botellas. Opta por productos reutilizables y evita tirar basura en lugares no apropiados...
        </Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card> <Card style={{ width: '20%' }}>
      <Card.Img className='cardFoto' variant="top" src="https://www.neuqueninforma.gob.ar/wp-content/uploads/2020/10/web-Eficiencia.jpg" />
      <Card.Body>
        <Card.Title>Ahorrar Energia</Card.Title>
        <Card.Text>
        Apaga luces y dispositivos cuando no los uses. Utiliza bombillas LED de bajo consumo y ajusta la temperatura de tu hogar para reducir el uso de calefacción y aire acondicionado...
        </Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </>
  );
}

export default Home;