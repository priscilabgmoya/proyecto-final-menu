import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
import React from 'react';
import Resumen from "../FormularioPago/Resumen"
import { useLogin } from '../../context/LoginContext';
import { nuevoPedido } from '../../api/adminPedidos';
import { createPreference } from '../../api/mercadoPago';
import {initMercadoPago} from '@mercadopago/sdk-react'

function Pedido({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, handleClosePedidos, showPedidos }) {
  const [show, setShow] = useState(false);
  const {user , isAuthenticated} = useLogin()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cantidadPedidos, setCantidadPedido]  = useState(0)
  const [preferenceId , setPreferenceId] = useState(null); 
  const [pedido, setPedidos] = useState(pedidos);
  const [totalCompra, setTotalCompra] = useState(total);

  initMercadoPago("TEST-84f78fb2-a07d-40a7-9074-8b180c1cf9cb");

  useEffect(() => {
    setPedidos(pedidos);
    setTotalCompra(total);
    calcularCantidad(); 
  }, [pedidos, total])

  const eliminarCardPedido = (id, nombre) => {
    eliminarPedido(id, nombre);
  }
const agregarNuevoPedido = async (pedido) =>{
  await nuevoPedido(pedido)
}
const enviarMercadoPago = async (pedidoMp)  => {
  const data = await createPreference(pedidoMp); 
  return data; 
}
const calcularCantidad = () => {
  totalPedido.map(pedido => {
   return setCantidadPedido( cantidadPedidos + pedido.cantidad)
  })
}
  const verPedido = async () => {
    let nuevoPedido = {
      "usuario": user.usuario.id,
      "menu": totalPedido,
      "precio": "" + (total).toFixed(2) ,
      "estado": "64d96e3ae9674438c0579d08"
    }
   agregarNuevoPedido(nuevoPedido)

    const pedidoMP = {
      description: 'Pedidos Friky Sangucheria' , 
      price : totalCompra.toFixed(2), 
      quantity: cantidadPedidos,
      currency_id: "ARS"  
    }
    const res = await enviarMercadoPago(pedidoMP); 
    if(res){
      setPreferenceId(res); 
      handleShow(); 
    }
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
                eliminarPedido={()=>{eliminarCardPedido(item._id, item.nombre)}}
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
            {
              isAuthenticated ?  <Button className='btn-resumen' onClick={verPedido} disabled={pedidos.length !== 0 ? false : true }>Ir a Pagar</Button> :
              <div className='mensaje-error'> Para Realizar la compra, debe iniciar sesion </div>
            }
           
          </Modal.Footer>  
        </Modal>

          <Modal className='modal-detalle' show={show} onHide={handleClose} >
        <Resumen pedidos={totalPedido} total ={totalCompra} preferenceId={preferenceId} />
        </Modal>
      </>
    );
  }
}
  export default Pedido;