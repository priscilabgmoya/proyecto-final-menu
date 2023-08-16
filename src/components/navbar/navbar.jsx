import React, { useState } from "react";
import './navbar.css';
import { Container, Navbar, Nav, Button, ToastContainer, Toast, Dropdown } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Pedido from "../offCanvasPedido/Pedido";
import { GrLogin, GrLogout, GrEdit } from 'react-icons/gr';
import { HiUserCircle } from 'react-icons/hi';
import { useLogin } from '../../context/LoginContext';
const NavBars = ({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, cantidadPedido }) => {
  const [showPedidos, setShowPedidos] = useState(false);
  const handleClosePedidos = () => setShowPedidos(false);
  const handleShowPedidos = () => setShowPedidos(!showPedidos);
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const { login, user, isAuthenticated } = useLogin();

  return (
    <>

      <Navbar expand="lg" className="header-nav navBarFriky" >
        <Container fluid className="d-flex align-items-center">
          <Link className="logo-nav" to="/">Friky Sangucheria</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link className="nav-link" to="/">Inicio</Link>
              {
                isAuthenticated && user.usuario.rol["rol"] == "administrador" ?
                  <>
                    <Link className="nav-link" to="/administracionMenu">Menú</Link>
                    <Link className="nav-link" to="/administracionPedido">Pedidos</Link>
                    <Link className="nav-link" to="/administracionUsuario">Usuarios</Link>
                  </> : null
              }

              <Link className="nav-link" to="/quienesSomos">Sobre Nosotros</Link>
              <Link className="nav-link" to="/contactanos">Contactanos</Link>
              
              <Outlet />
            </Nav>
            {
              isAuthenticated ?

                <Link className="nav-link log" onClick={toggleShowA} > <HiUserCircle className="iconPerfil" /></Link>
                : <Link className="nav-link log" to="/login"> <GrLogin />Login</Link>
            }
            <Button variant="primary" onClick={handleShowPedidos} className=" btnShop" >
              <span className="badge rounded-circle shopNum">{totalPedido?.length}</span>
              <AiOutlineShoppingCart className='iconShop' />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Pedido
        pedidos={pedidos}
        eliminarPedido={eliminarPedido}
        total={total}
        modificarTotal={modificarTotal}
        totalPedido={totalPedido}
        cantidadPedido={cantidadPedido}
        handleClosePedidos={() => { handleClosePedidos() }}
        showPedidos={showPedidos}
      />

      <Toast show={showA} onClose={toggleShowA} className="configuracionToast" >
        <Toast.Header></Toast.Header>
        <Toast.Body className="contenedorPerfil">
          <Link to="/perfilUsuario" className="btnEditarPerfil" > <GrEdit /> Editar Perfil </Link>
          <Button className="btnLogOut"><GrLogout /> Cerrar Sesion </Button>
        </Toast.Body>
      </Toast>

    </>
  )
}
export default NavBars;