import './Footer.css'; 
import { Row ,Container} from "react-bootstrap";
import {staticFooter} from '../../helpers/helpDB'; 
import { AiFillFacebook,AiFillInstagram, AiFillTwitterCircle ,AiOutlineWhatsApp} from "react-icons/ai";
import { Link } from 'react-router-dom';
import ListaFooter from '../ListaFooter/ListaFooter';
function Footer(){
    return(
        <footer>
            <Container fluid className="footer">
                <Row>
                    <ul className='listadoRedesSociales'>
                        <li><Link to={'/error404'} ><AiFillFacebook/></Link></li>
                        <li><Link to={'/error404'} ><AiFillInstagram className='iconInstagram'/></Link></li>
                        <li><Link to={'/error404'} ><AiFillTwitterCircle/></Link></li>
                        <li><Link to={'/error404'} ><AiOutlineWhatsApp className='iconWhatsapp'/></Link></li> 
                    </ul>
                </Row>
                <Row className='rowInfo'>
                    <ListaFooter staticFooter={staticFooter} />
                </Row>
                <Row>
                    <p className='h6 tituloCopy'>&copy;Todos los Derechos Reservados - Friky Sangucheria</p>
                </Row>
            </Container>
        </footer>
    ); 
}

export default Footer; 