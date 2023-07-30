/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

const ProductCard = props => {
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const { menu } = props

  useEffect(() => {
    setFinalPrice(quantity * menu.precio)
  }, [quantity])

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const handleSubmit = () => {
    /**EN ESTE CODIGO SE CREA EL PEDIDO Y SE ENVIA AL BACKEND */
    /**LUEGO SE SETEA EL ESTADO QUANTITY A 0 Y FINALPRICE A 0 */
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
        className="col-12 col-md-6 col-lg-4 p-2 mb-3 border"
        onClick={handleShow}
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between"> 
            <div className="text-truncate">
              <h6 className="card-title">{menu.nombre}</h6>
              <p className="card-text">
                <small className="text-body-secondary">{menu.detalle}</small>
              </p>
              <p className="card-text">
                <b>${menu.precio}</b>
              </p>
            </div>
            <img src={menu.img} alt={menu.nombre} className="img-fluid rounded" style={{ width: '96px', height: '96px' }} />
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
            <button className='btn btn-warning' onClick={() => handleQuantity('-')}><i className="bi bi-dash-circle"></i></button>
            <h5>{quantity}</h5>
            <button className='btn btn-success' onClick={() => handleQuantity('+')}><i className="bi bi-plus-circle"></i></button>
          </div>
          </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <div>
            <h4>$ {finalPrice}</h4>
          </div>
          <div className='d-flex gap-3'>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Agregar al Carrito
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductCard
