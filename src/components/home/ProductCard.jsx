/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import {CiCirclePlus,CiCircleMinus} from 'react-icons/ci'

const ProductCard = props => {
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const { menu, agregarPedido } = props

  useEffect(() => {
    let precioFinal = menu.descuento ? menu.precio - ( (menu.precio * menu.porcentaje)  /100) : menu.precio;
    setFinalPrice(quantity *precioFinal)
  }, [quantity])

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const handleSubmit = (codigo,nombre) => {
    /**EN ESTE CODIGO SE CREA EL PEDIDO Y SE ENVIA AL BACKEND */
    /**LUEGO SE SETEA EL ESTADO QUANTITY A 0 Y FINALPRICE A 0 */
    agregarPedido(nombre, codigo, quantity, finalPrice)
    
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
        onClick={handleShow}
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
            <div className='card-img'>
            <img src={menu.urlImagen} alt={menu.nombre} className="img-fluid rounded" style={{ width: '96px', height: '96px' }} />
            </div>
          </div>
          </div>
      </article>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{menu.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {menu.detalle}
          </div>
          <div className='d-flex justify-content-around my-4'>
            <button className='btn btn-warning btnMenu' onClick={() => handleQuantity('-')}><CiCircleMinus className='iconMenosMenu' /></button>
            <h5>{quantity}</h5>
            <button className='btn btn-success btnMenu' onClick={() => handleQuantity('+')}><CiCirclePlus className='iconMasMenu' /></button>
          </div>
          </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <div>
            <h3>Total:  $ {finalPrice}</h3>
          </div>
          <div className='d-flex '>
            <Button className='btnConfirmar'  onClick={()=>{handleSubmit(menu.codigo,menu.nombre)}} disabled ={quantity == 0 ? true : false} >
              Agregar al Carrito
            </Button>
            <Button  className='btnCancelar' type='button' onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductCard
