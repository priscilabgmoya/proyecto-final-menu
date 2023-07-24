import React from "react";
import './navbar.css';
import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap';

const NavBars = () => {
   // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
      //if (user==true) {
       // document.getElementById('administracion','pedidos').style.display='flex'
      //}
  return (
    <>
     
     <Container fluid className="navb"  >
        <Navbar fluid className='mg-5'
        >
          <h5>Ficky Sangucheria</h5>

          <Button id='administracion' variant="light" >Menus</Button>
          <Button id='pedidos' variant="light" >Pedidos</Button>
        </Navbar>
        
        <Container className='drop'>
          <NavDropdown 
            id="nav-dropdown-dark-example"
            title="Registro" 
            
            menuVariant="dark"
            className='text-primary'
           
          >

            <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Login
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Productos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Nosotros
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Container>


    </>
  )
}
export default NavBars;