import './nosotros.css'
import { Container, Card, Col, Row } from 'react-bootstrap';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import avatarP from "../nosotros/myAvatar_pri.png"
import avatarJM from "../nosotros/JMAvatar.svg"
import avatarE from "../nosotros/myAvatarEmiliano.png"
import avatarM from "../nosotros/myAvatar.png"

function Anosotros() {
    return (

        <Container className='Cont'>
            <Row className='contendorCardsNosotros'>
                <Card className='contenedorFrase'>
                    <Card.Title className='tituloSobreNosotros'>
                        Friky Sangucheria
                    </Card.Title>
                    <Card.Text className='contenedorFrase'>
                        Somos un apasionado grupo de estudiantes de RollinCode School en la emocionante etapa final de nuestro viaje educativo.
                        Con determinación y conocimientos recién adquiridos, estamos abordando nuestro último proyecto con entusiasmo. 
                        Desde líneas de código hasta la implementación de ideas innovadoras, estamos dando vida a soluciones tecnológicas que reflejan nuestro compromiso con el aprendizaje constante y la excelencia. 
                        ¡Únete a nosotros mientras fusionamos creatividad y destrezas técnicas en este emocionante capítulo de nuestras vidas como futuros profesionales de la programación!
                    </Card.Text>
                </Card>
                <Col xs={3} md={3} sm={3} lg={3}>
                    <Card  className='text-center'>
                        <Card.Img variant="top" alt='avatar de priscila'  src={avatarP}/>
                        <Card.Body>
                            <Card.Title>Priscila Garcia Moya</Card.Title>
                            <Card.Text>
                                Estudiante de la Comision 48i de RollingCode.
                            </Card.Text>
                            Contacto
                            <Card.Text>
                                <Link to={'/error404'}><AiFillLinkedin className='iconLinkedin'></AiFillLinkedin></Link>
                                <Link to={'/error404'}><AiFillFacebook className='iconFacebook'></AiFillFacebook></Link>
                                <Link to={'/error404'}><AiFillGithub className='iconGithub'></AiFillGithub></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3} md={3} sm={3} lg={3}>
                    <Card  className='text-center'>
                        <Card.Img variant="top" alt='avatar de juan martin'  src={avatarJM}/>
                        <Card.Body>
                            <Card.Title>Juan Martin Raimondo</Card.Title>
                            <Card.Text>
                                Estudiante de la Comision 48i de RollingCode.
                            </Card.Text>
                            Contacto
                            <Card.Text>
                                <Link to={'/error404'}><AiFillLinkedin className='iconLinkedin'></AiFillLinkedin></Link>
                                <Link to={'/error404'}><AiFillFacebook className='iconFacebook'></AiFillFacebook></Link>
                                <Link to={'/error404'}><AiFillGithub className='iconGithub'></AiFillGithub></Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={3} md={3} sm={3} lg={3}>
                    <Card  className='text-center'>
                        <Card.Img variant="top" alt='avatar de emiliano'  src={avatarE} />
                        <Card.Body>
                            <Card.Title>Emiliano Acosta</Card.Title>
                            <Card.Text>
                                Estudiante de la Comision 48i de RollingCode.
                            </Card.Text>
                            Contacto
                            <Card.Text>
                                <Link to={'/error404'}><AiFillLinkedin className='iconLinkedin'></AiFillLinkedin></Link>
                                <Link to={'/error404'}><AiFillFacebook className='iconFacebook'></AiFillFacebook></Link>
                                <Link to={'/error404'}><AiFillGithub className='iconGithub'></AiFillGithub></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={3} md={3} sm={3} lg={3}>
                    <Card  className='text-center'>
                        <Card.Img variant="top" alt='avatar de martin' src={avatarM}/>
                        <Card.Body>
                            <Card.Title>Martin Rey</Card.Title>
                            <Card.Text>
                                Estudiante de la Comision 48i de RollingCode.
                            </Card.Text>
                            Contacto
                            <Card.Text>
                                <Link to={'/error404'}><AiFillLinkedin className='iconLinkedin'></AiFillLinkedin></Link>
                                <Link to={'/error404'}><AiFillFacebook className='iconFacebook'></AiFillFacebook></Link>
                                <Link to={'/error404'}><AiFillGithub className='iconGithub'></AiFillGithub></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3} md={3} sm={3} lg={3}>
                    <Card  className='text-center'>
                        <Card.Img variant="top" alt='avatar de joaquin'  src={avatarE}/>
                        <Card.Body>
                            <Card.Title>Joaquin Navarro  </Card.Title>
                            <Card.Text>
                                Estudiante de la Comision 48i de RollingCode.
                            </Card.Text>
                                Contacto
                            <Card.Text>
                                <Link to={'/error404'}><AiFillLinkedin className='iconLinkedin'></AiFillLinkedin></Link>
                                <Link to={'/error404'}><AiFillFacebook className='iconFacebook'></AiFillFacebook></Link>
                                <Link to={'/error404'}><AiFillGithub className='iconGithub'></AiFillGithub></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Anosotros;