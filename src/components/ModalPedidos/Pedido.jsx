import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
import React from 'react';
import Resumen from "../FormularioPago/Resumen"
function Pedido({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, handleClosePedidos, showPedidos }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pedido, setPedidos] = useState(pedidos);
  const [totalCompra, setTotalCompra] = useState(total);

  useEffect(() => {
    setPedidos(pedidos);
    setTotalCompra(total);
  }, [pedidos, total])

  const eliminarCardPedido = (id) => {
    eliminarPedido(id);
  }

  const verPedido = (usuario, pedido, total) => {
    console.log({
      "usuario": usuario,
      "pedido": pedido,
      "total": total,
      "estado": "pendiente"
    });
  }

  {

    return (
      <>
        <Modal show={showPedidos} onHide={handleClosePedidos}>
            <Modal.Header closeButton onClick={handleClosePedidos}>
            <Modal.Title className='tituloPedidos' > Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body className="contenedorPerfil">
            <div className="scrollable-content"  >
          <div className='content'>
            <Button className='btnInciarSesion' onClick={handleShow}>Ir a Pagar</Button>
            {
            pedido.map((item, index) => {
              return  <MiniCard key={index} 
              urlImagen={item.urlImagen} 
              nombre={item.nombre} 
              precio={item.precio} 
              descuento={item.descuento} 
              montoDescuento={item.porcentaje}
              eliminarPedido={()=>{eliminarCardPedido(item.codigo)}}
              modificarTotal={modificarTotal}
              pedidoHome={totalPedido}
              />
            })
              }
              </div>
            </div>
            <div className='contendorTotal'>
              <p className='total'><strong>Total:</strong> <span className='totalFinal'>$ {total}</span> </p>
            </div>
          </Modal.Body>
          <Modal.Footer className='contenedorFooter'>
            <div className='contenedorBotones'>
            </div>
          </Modal.Footer>  
        </Modal>
          <Modal className='modal-detalle' show={show} onHide={handleClose}>
        <Resumen/>
        </Modal>
      </>
    );
  }
}
  export default Pedido;