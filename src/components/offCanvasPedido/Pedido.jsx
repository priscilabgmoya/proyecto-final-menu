import { useState ,useEffect} from 'react';
import {Offcanvas, Button}from 'react-bootstrap';
import {AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
import Modal from "react-bootstrap/Modal"
import Resumen from "../FormularioPago/Resumen"

function Pedido({pedidos,eliminarPedido , total , modificarTotal, totalPedido,handleClosePedidos,showPedidos}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [pedido, setPedidos] = useState(pedidos); 
    const [totalCompra, setTotalCompra] = useState(total);

    useEffect(()=>{
      setPedidos(pedidos);
      setTotalCompra(total);
    },[pedidos, total])

    const eliminarCardPedido = (id) =>{
      eliminarPedido(id); 
    }

    const verPedido = (usuario, pedido, total) =>{
      console.log({
        "usuario": usuario,
        "pedido": pedido, 
        "total": total,
        "estado": "pendiente"
      });
    }
    return(
        <>

      <Offcanvas show={showPedidos} onHide={handleClosePedidos} placement='end' backdrop="static" name='end'>
        <Offcanvas.Header closeButton onClick={handleClosePedidos}>
          <Offcanvas.Title>Pedidos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
          <div className='contenedorBotones'>
            <Button onClick={handleShow} className='btnInciarSesion' >Iniciar Comprar</Button>
          </div>
        <Modal className='modal-detalle' show={show} onHide={handleClose}>
        <Resumen/>
        </Modal>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    ); 
}
export default Pedido;