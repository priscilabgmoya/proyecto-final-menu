import { useState ,useEffect} from 'react';
import {Offcanvas, Button}from 'react-bootstrap';
import {AiOutlineShoppingCart } from "react-icons/ai";
import {pedidoInicial} from '../../helpers/helpDB';
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
function Pedido({pedidos,eliminarPedido , total , modificarTotal, totalPedido}){
    const [show, setShow] = useState(false);
    const [pedido, setPedidos] = useState(pedidos); 
    const [totalCompra, setTotalCompra] = useState(total);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    <Button variant="primary" onClick={handleShow} className=" btnShop">
    <span  className="badge rounded-circle shopNum">{pedido?.length}</span>
        <AiOutlineShoppingCart className='iconShop'/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
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
              montoDescuento={item.montoDescuento}
              eliminarPedido={()=>{eliminarCardPedido(item.codigo)}}
              modificarTotal={modificarTotal}
              />
            })
             }
          </div>
          </div>
          <div className='contendorTotal'>
            <p className='total'><strong>Total:</strong> <span className='totalFinal'>$ {total}</span> </p>
          </div> 
          <div className='contenedorBotones'>
            <Button className='btnInciarSesion' onClick={()=> {verPedido({"name": "priscila"}, totalPedido, totalCompra)}}>Iniciar Comprar</Button>
            <Button className='btnIrAlCarrito'>Ir al Carrito</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    ); 
}
export default Pedido;