import React from "react";
import './navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link ,Outlet} from "react-router-dom";
import Pedido from "../offCanvasPedido/Pedido";

const NavBars = ({pedidos,eliminarPedido,total,modificarTotal,totalPedido}) => {
   // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
      //if (user==true) {
       // document.getElementById('administracion','pedidos').style.display='flex'
      //}
  return (
    <>
   
<Navbar expand="lg" className="header-nav navBarFriky" >
        <Container className="d-flex align-items-center">
          <Link className="logo-nav" to="/">Friky Sangucheria</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basavbar-nav">
            <Nav className="m-auto">  
            <Link className="nav-link" to="/">Inicio</Link> 
              <Link className="nav-link" to="/administracionMenu">Menú</Link>
              <Link className="nav-link" to="/administracionPedido">Pedidos</Link>
              <Link className="nav-link" to="/administracionUsuario">Usuarios</Link>
              <Link className="nav-link" to="/quienesSomos">Sobre Nosotros</Link>
              <Link className="nav-link" to="/contactanos">Contactanos</Link>    
              <Outlet />                                             
            </Nav>
            <Link className="nav-link log" to="/login">Login</Link>
            <Pedido pedidos={pedidos} eliminarPedido={eliminarPedido} total={total} modificarTotal={modificarTotal} totalPedido={totalPedido}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </>
  )
}
export default NavBars;