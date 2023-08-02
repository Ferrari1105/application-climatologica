import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <Card className="cardd">
      <Card.Body>
        <Card.Title>Mensaje Para Pereira</Card.Title>
        <Card.Text>
           un mensajito para Peralta
        </Card.Text>
       <Button variant="primary" ><Link  to={"/Mensaje"}>Mostar</Link></Button> 
      </Card.Body>
    </Card>
  );
}

export default App