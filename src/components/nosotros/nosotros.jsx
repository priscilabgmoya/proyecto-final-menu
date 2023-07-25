import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './nosotros.css'

function Anosotros() {
  return (
    <Card fluid border='danger' className='text-center'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Estudiante de la Comision 48i de RollingCode.
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Anosotros;