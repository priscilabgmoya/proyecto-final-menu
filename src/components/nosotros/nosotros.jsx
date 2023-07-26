import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './nosotros.css'
import { Container } from 'react-bootstrap';

function Anosotros() {
    return (

        <Container className='Cont'>
            <Card fluid border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar_pri.png" />
                <Card.Body>
                    <Card.Title>Priscila Garcia Moya</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card fluid border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/JMAvatar.svg" />
                <Card.Body>
                    <Card.Title>Juan Martin Raimondo</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card fluid border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar.png" />
                <Card.Body>
                    <Card.Title>Emiliano Acosta</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card fluid border='danger' className='text-center'>
                <Card.Img variant="top" src='./src/img/myAvatar.png' />
                <Card.Body>
                    <Card.Title>Martin Rey</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card fluid border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar.png" />
                <Card.Body>
                    <Card.Title>Joaquin Navarro  </Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    );
}

export default Anosotros;