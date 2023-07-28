import React from "react";
import './navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBars = () => {
   // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
      //if (user==true) {
       // document.getElementById('administracion','pedidos').style.display='flex'
      //}
  return (
    <>
   
<Navbar expand="lg" className="header-nav">
        <Container className="d-flex align-items-center">
          <Link className="logo-nav" to="/">Friky Sangucheria</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basavbar-nav">
            <Nav className="m-auto">  
            <Link className="nav-link" to="/">Inicio</Link> 
              <Link className="nav-link" to="/">Menú</Link>
              <Link className="nav-link" to="/">Pedidos</Link>
              <Link className="nav-link" to="/quienesSomos">Sobre Nosotros</Link>
              <Link className="nav-link" to="/contactanos">Contactanos</Link>                                                 
            </Nav>
            <Link className="nav-link log" to="/login">Login</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </>
  )
}
export default NavBars;