import {Card ,Button,}from 'react-bootstrap';
import {CiCirclePlus,CiCircleMinus} from 'react-icons/ci';
import {GrClose} from 'react-icons/gr';
import './MiniCard.css'; 
import { useEffect, useState } from 'react';
function MiniCard({urlImagen,nombre, precio ,descuento,montoDescuento,eliminarPedido,modificarTotal ,obtenerCantidadTotal }){
    const [cantidadMenu, setCantidadMenu] = useState(1) 
    const [precioDescuento,setPrecioDescuento] = useState(descuento?  precio - ( (precio * montoDescuento)  /100): 0)
    const aumentarCantidad =() =>{
        setCantidadMenu(cantidadMenu + 1); 
        if(descuento){
           return  modificarTotal(precioDescuento, nombre)
        }else{
           return modificarTotal(precio, nombre)
        }
    }
    const disminuirCantidad =() => {
        setCantidadMenu(cantidadMenu == 1 ? 1 : cantidadMenu - 1); 
        if(descuento && cantidadMenu > 1){
            console.log(precioDescuento);
             return modificarTotal(-precioDescuento, nombre)
        } 
        if(!descuento && cantidadMenu > 1){
            return modificarTotal(-precio, nombre)
        }
    }
    /*
    useEffect(()=>{
        obtenerCantidadTotal(descripcion, cantidadMenu)
    },[cantidadMenu, descripcion]);*/
    useEffect(()=>{
        setPrecioDescuento(descuento?  precio - ( (precio * montoDescuento)  /100) : 0)
    },[precioDescuento])
    return(
        <Card className='my-2'>
            <Card.Header className='header-pedido'> <Button  className='btnMenu' onClick={eliminarPedido} ><GrClose  className='iconEliminarMenu'/> </Button></Card.Header>
        <Card.Body className='card-body-pedido'>
            <div className='card-img'>
         <img  src= {urlImagen} />
           </div>
           <div className='texto-card'>
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
            <span>{cantidadMenu}</span>
            <Button className='btnMenu'onClick={()=>{aumentarCantidad()}}> <CiCirclePlus className='iconMasMenu'/> </Button>
           </div>
            </Card.Body>
      </Card>
    );
}
export default MiniCard;