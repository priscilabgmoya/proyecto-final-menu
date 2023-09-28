/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import swal from 'sweetalert';
const ProductCard = props => {

  const { menu, agregarPedido } = props

  const handleSubmit = (codigo,nombre) => {
    let precioFinal = menu.descuento ? menu.precio - ( (menu.precio * menu.porcentaje)  /100) : menu.precio;
    agregarPedido(nombre, codigo, 1, precioFinal);
    swal({
      title: 'El producto se agrego al carrito',
      icon: 'success',
      buttons: 'Aceptar'
    })
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
          <div className='d-flex '>
            <Button className={'btnHabilitarCompra'} onClick={()=>{handleSubmit(menu._id,menu.nombre)}}  >
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
