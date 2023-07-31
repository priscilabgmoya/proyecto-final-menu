import './nosotros.css'
import { Container,Card ,Col, Row} from 'react-bootstrap';

function Anosotros() {
    return (

        <Container className='Cont'>
<Row className='contendorCardsNosotros'>
    <Col xs={3} md={3} sm={3} lg={3}>
    <Card  border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar_pri.png" />
                <Card.Body>
                    <Card.Title>Priscila Garcia Moya</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
    </Col>
    <Col xs={3} md={3} sm={3} lg={3}>
            <Card  border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/JMAvatar.svg" />
                <Card.Body>
                    <Card.Title>Juan Martin Raimondo</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>

    </Col>
    <Col xs={3} md={3} sm={3} lg={3}>
            <Card  border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar.png" />
                <Card.Body>
                    <Card.Title>Emiliano Acosta</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>

    </Col>
    <Col xs={3} md={3} sm={3} lg={3}>
            <Card  border='danger' className='text-center'>
                <Card.Img variant="top" src='./src/img/myAvatar.png' />
                <Card.Body>
                    <Card.Title>Martin Rey</Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
    </Col>
    <Col xs={3} md={3} sm={3} lg={3}>
            <Card  border='danger' className='text-center'>
                <Card.Img variant="top" src="./src/img/myAvatar.png" />
                <Card.Body>
                    <Card.Title>Joaquin Navarro  </Card.Title>
                    <Card.Text>
                        Estudiante de la Comision 48i de RollingCode.
                    </Card.Text>

                </Card.Body>
            </Card>
    </Col>
</Row>
    
        </Container>
    );
}

export default Anosotros;