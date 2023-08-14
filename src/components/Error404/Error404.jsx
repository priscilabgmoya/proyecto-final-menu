import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import './Error404.css'
function Error404(){
    return(
        <Container>
            <Row className="Error404">
                <img src="./csm_404-not-found-t_9dd01d0a24.webp" alt="Error 404 Not Found" />
            </Row>
            <Row className="contenedor-btn">
                <Col xxl={2} sm={2} md={2} lg={2} xl={2}> 
                <Link type="button"  className="btn btn-danger" to={'/'}>Ir al Inicio</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Error404; 