import Login from './components/Login-Register/login'
import Error404 from './Components/Error404/Error404';
import {Outlet, Link, Route , Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBars from './components/navbar/navbar.jsx';
import Anosotros from './components/nosotros/nosotros.jsx';
import Contacto from './components/contacto/Contacto.jsx';
import './App.css';
import {menuPrueba} from './helpers/helpDB'; 
import { useState } from 'react';
import swal from 'sweetalert';

function App() {

  const [pedidos , setPedidos] = useState([]); 
  const [productos] = useState(menuPrueba);
  const [totalPedido, setTotalPedido] = useState([]); 
  const [total, setTotal] = useState(0);
  const agregarPedido =(id, nombre) =>{
    const existePedido = pedidos.find(pedido => pedido.nombre == nombre); 
    if(existePedido) return swal({
      title: 'Adventencia!', 
      text: 'El pedido se encuentra en el carrito de compras!',
      icon: 'warning',
      buttons: 'Aceptar'
    })
    const nuevoPedido = productos.find(producto => producto.codigo == id); 
    setPedidos([...pedidos,nuevoPedido])
    let pedido = {
      "menu": nombre,
      "cantidad": 1,
    }
      setTotalPedido([...totalPedido, pedido]);

    let precio =  nuevoPedido.descuento ? nuevoPedido.precio - ((nuevoPedido.precio*nuevoPedido.montoDescuento)/100)
    :nuevoPedido.precio
    setTotal(total + precio)
  }
const eliminarPedido = (id) => {
  let totalNuevo =0 ; 
  const pedidoActulizado = pedidos.filter(pedido => pedido.codigo !== id)
  setPedidos(pedidoActulizado); 

 if (pedidoActulizado.length == 0)  return setTotal(totalNuevo);

  pedidoActulizado.forEach(producto =>{
    let precioDescuento = producto.descuento? producto.precio -((producto.precio * producto.montoDescuento)/100) : producto.precio;
    totalNuevo = totalNuevo + precioDescuento;
    setTotal(totalNuevo);
  })
}
const modificarTotal = (precio, menu) => {

  let totalNuevo = total + precio; 
  setTotal(totalNuevo); 
  totalPedido.map(pedido =>{
    if(pedido.menu == menu){
      pedido.cantidad = pedido.cantidad + 1; 
    }
    return pedido;
  })
}

    
    // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
      //if (user==true) {
       // document.getElementById('administracion','pedidos').style.display='flex'
      //}
      
    /**
     *  <NavBars pedidos={pedidos} eliminarPedido={eliminarPedido} total={total} modificarTotal={modificarTotal} totalPedido={totalPedido}/>
     * va en el boton de la card 
     *  <Button  variant="primary" onClick={()=>{agregarPedido(producto.codigo, producto.nombre)}}>Agregar al carrito </Button> 
     * va en el final del navBar
     *   <Pedido pedidos={pedidos} eliminarPedido={eliminarPedido} total={total} modificarTotal={modificarTotal} totalPedido={totalPedido}/>
     */
    const [localizacion] = useState(useLocation())
    return (

    <>
 
    <header>
      {
        localizacion.pathname == '/error404' 
        || localizacion.pathname == '/login' 
        ? null :   <NavBars />
      }
      
    </header>
    
    <Routes>
      {
        /**
         *  
        <Route  path='administracionMenu' element={ <TablaAdministracion cabecera={cabeceraTablaMenu} title={'Menú'} opcion='menu' informacion={menuPrueba}/>}/>
        <Route  path='administracionUsuario' element={ <TablaAdministracion cabecera={cabeceraTablaUsuario} title={'Usuario'} opcion='usuario' informacion={usuariosPrueba}/>}/>
        <Route  path='administracionPedido' element={ <TablaAdministracion cabecera={cabeceraTablaPedido} title={'Pedido'} opcion='pedido'  informacion={pedidosPrueba}/>}/>
        * 
        */
      }
 <Route path='/'/>
 <Route path='login' element={ <Login/>} />
 <Route path='contactanos'  element={<Contacto />}/>
 <Route path='quienesSomos' element ={<Anosotros/>} />
 <Route  path='error404' element={<Error404/>}/>
</Routes>


  
   {
    localizacion.pathname == '/error404' 
    || localizacion.pathname == '/login' 
    ? null :   <Footer />
   }


    </>

  )
}

export default App;