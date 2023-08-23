/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import {CiCirclePlus,CiCircleMinus} from 'react-icons/ci'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
const ProductCard = props => {
  const [quantity, setQuantity] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const { menu, agregarPedido } = props

  useEffect(() => {
    let precioFinal = menu.descuento ? menu.precio - ( (menu.precio * menu.porcentaje)  /100) : menu.precio;
    setFinalPrice(quantity *precioFinal)
  }, [quantity])



  const handleSubmit = (codigo,nombre) => {
    agregarPedido(nombre, codigo, quantity, finalPrice)
    setQuantity(0); 
  }
  
  const handleQuantity = operation => {
    if(operation === '+') {
      setQuantity(quantity + 1)
      return 
    }
    if(quantity > 0) {
      setQuantity(quantity - 1)
      return
    }
    return setQuantity(0)
    
  }

  return (
    <>
      <article 
        className="col-12 col-md-6 col-lg-4 p-2 mb-3 "
      >
        <div className='card card-producto-home'>
        <div className="card-body card-body-home">
            <div className='contenedor-texto-producto'>
                <span className={ menu.descuento ? 'descuento-menu' : null}>{  menu.descuento ? `${menu.porcentaje}% OFF` : null}</span>
                <h5 className="card-title ">{menu.nombre}</h5>
              <p className="card-text card-text-producto-home">
                <small className="text-body-secondary">{menu.detalle}</small>
                <br />
                {
                             menu.descuento ? 
                             <p className='contendorTexto '>
                                 <span className='textoPrecio'> {`$${menu.precio}`}</span>
                                 <span className='textoPrecioNuevo'>{`$${menu.precio - ( (menu.precio * menu.porcentaje)  /100)}`}</span>
                             </p>:
                                 <p className='precio-card-home'>${menu.precio}</p>
                }
              </p>
            </div>
            <div className='card-img cardImg-Menu'>
            <img src={menu.urlImagen} alt={menu.nombre} className="rounded" style={{ width: '96px', height: '96px' }} />
            </div>
          </div>
          <div className='comprarProducto'>
            <h5 className='cantidadMenu'>{quantity}</h5>
          <div className='agregarProductos'>
            <button className='btn btn-warning btnMenu' onClick={() => handleQuantity('-')}><CiCircleMinus className='iconMenuQuitar' /></button>
            <button className='btn btn-success btnMenu' onClick={() => handleQuantity('+')}><CiCirclePlus className='iconMenuAgregar' /></button>
          </div>
          <div className='d-flex '>
            <Button className={quantity == 0 ? 'btnBloqueoCompra' :'btnHabilitarCompra'} onClick={()=>{handleSubmit(menu._id,menu.nombre)}} disabled ={quantity == 0 ? true : false} >
             <MdOutlineAddShoppingCart /> Agregar
            </Button>
          </div>
          </div>
          </div>
      </article>
    </>
  )
}

export default ProductCard
