import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';


function Mensaje() {
  return (
<>
<h1>Dale Peralta Labura</h1>
<Button variant="primary" ><Link  to={"/"}>Atras</Link></Button> 
</>
  );
}

export default Mensaje