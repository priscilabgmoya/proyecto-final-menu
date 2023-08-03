import { useState ,useEffect} from 'react';
import {Offcanvas, Button}from 'react-bootstrap';
import {AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
function Pedido({pedidos,eliminarPedido , total , modificarTotal, totalPedido}){
    const [showPedidos, setShowPedidos] = useState(false);
    const [pedido, setPedidos] = useState(pedidos); 
    const [totalCompra, setTotalCompra] = useState(total);
    const handleClosePedidos = () => setShowPedidos(false);
    const handleShowPedidos = () => setShowPedidos(true);
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
    <Button variant="primary" onClick={handleShowPedidos} className=" btnShop" >
    <span  className="badge rounded-circle shopNum">{pedido?.length}</span>
        <AiOutlineShoppingCart className='iconShop'/>
      </Button>
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
            <Button className='btnInciarSesion' onClick={()=> {verPedido({"name": "priscila"}, totalPedido, totalCompra)}}>Iniciar Comprar</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    ); 
}
export default Pedido;