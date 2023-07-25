import React from "react";
import './navbar.css';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const NavBars = () => {
   // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
      //if (user==true) {
       // document.getElementById('administracion','pedidos').style.display='flex'
      //}
  return (
    <>
     
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand className="text-light" href="#home">Fricky Sangucheria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#features">Pedidos</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Menus</Nav.Link>
            <NavDropdown  title="" id="collasible-nav-dropdown">
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
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}
export default NavBars;