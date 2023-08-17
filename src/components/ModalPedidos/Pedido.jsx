import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
import React from 'react';
import Resumen from "../FormularioPago/Resumen"
import { useLogin } from '../../context/LoginContext';
import { nuevoPedido } from '../../api/adminPedidos';
function Pedido({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, handleClosePedidos, showPedidos }) {
  const [show, setShow] = useState(false);
  const {user} = useLogin()
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
const agregarNuevoPedido = async (pedido) =>{
  await nuevoPedido(pedido)
}
  const verPedido = () => {
    handleShow()
    let nuevoPedido = {
      "usuario": user.usuario.id,
      "menu": totalPedido,
      "precio": "" + total ,
      "estado": "64d96e3ae9674438c0579d08"
    }
    agregarNuevoPedido(nuevoPedido)
  }

  {

    return (
      <>
        <Modal show={showPedidos} onHide={handleClosePedidos} className="contenedorPerfil">
            <Modal.Header closeButton onClick={handleClosePedidos}>
            <Modal.Title className='tituloPedidos' > Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="scrollable-content"  >
          <div className='content'>
            {
              pedido.map((item, index) => {
                return  <MiniCard key={index} 
                urlImagen={item.urlImagen} 
                nombre={item.nombre} 
                precio={item.precio} 
                descuento={item.descuento} 
                montoDescuento={item.porcentaje}
                eliminarPedido={()=>{eliminarCardPedido(item._id)}}
                modificarTotal={modificarTotal}
                pedidoHome={totalPedido}
                />
              })
            }
              </div>
            </div>
            <div className='contendorTotal'>
              <p className='total'><strong>Total:</strong> <span className='totalFinal'>$ {totalCompra}</span> </p>
            </div>
          </Modal.Body>
          <Modal.Footer className='contenedorFooter'>
            <Button className='btn-resumen' onClick={verPedido} disabled={totalPedido.length !== 0 ? false : true }>Ir a Pagar</Button>
          </Modal.Footer>  
        </Modal>

          <Modal className='modal-detalle' show={show} onHide={handleClose} >
        <Resumen pedidos={totalPedido} total ={totalCompra} />
        </Modal>
      </>
    );
  }
}
  export default Pedido;