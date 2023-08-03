import {Card ,Button,}from 'react-bootstrap';
import {CiCirclePlus,CiCircleMinus} from 'react-icons/ci';
import {GrClose} from 'react-icons/gr';
import './MiniCard.css'; 
import { useEffect, useState } from 'react';
function MiniCard({urlImagen,nombre, precio ,descuento,montoDescuento,eliminarPedido,modificarTotal  , pedidoHome}){
    const [cantidadP, setCantidad] = useState(pedidoHome); 
    const [precioDescuento,setPrecioDescuento] = useState(descuento?  precio - ( (precio * montoDescuento)  /100): 0)


    const aumentarCantidad =() =>{
        if(descuento){
           return  modificarTotal(1,precioDescuento, nombre)
        }else{
           return modificarTotal(1, precio, nombre)
        }
    }
    const disminuirCantidad =() => {
        if(descuento){
             return modificarTotal(-1,-precioDescuento, nombre)
        } else{
            return modificarTotal(-1,-precio, nombre)
        }
    }

    useEffect(()=>{
        setCantidad(pedidoHome)
        setPrecioDescuento(descuento?  precio - ( (precio * montoDescuento)  /100) : 0)
    },[precioDescuento,pedidoHome])
    return(
        <Card className='my-2'>
            <Card.Header className='header-pedido'> <Button  className='btnMenu' onClick={eliminarPedido} ><GrClose  className='iconEliminarMenu'/> </Button></Card.Header>
        <Card.Body className='card-body-pedido'>
            <div className='card-img'>
         <img  src= {urlImagen} />
           </div>
           <div className='texto-card'>
            {
                 
            }
            {
                `${nombre} `
            }
            <br />
            {
                descuento ? 
                <p className='contendorTexto '>
                    <span className='textoPrecio'> {`$${precio}`}</span>
                    <span className='textoPrecioNuevo'>{`$${precioDescuento}`}</span>
                </p>: 
                <p>{`$${precio}`}</p>
            }
           </div>
           <div className='contendorBtnMenu' >
            <Button className='btnMenu' onClick={()=>{disminuirCantidad()}}><CiCircleMinus className='iconMenosMenu'/>  </Button>
           {  
            cantidadP.map((pedido, index) => {
                if(pedido.menu == nombre){
                    return  <span key={index}>{pedido.cantidad }</span>
                }
            })
            }
            <Button className='btnMenu'onClick={()=>{aumentarCantidad()}}> <CiCirclePlus className='iconMasMenu'/> </Button>
           </div>
            </Card.Body>
      </Card>
    );
}
export default MiniCard;