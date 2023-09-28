import TablaAdministracion from './components/TablaAdministracion/TablaAdministracion';
import Login from './components/Login/login';
import Home from './components/home/Home';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import NavBars from './components/navbar/navbar.jsx';
import Anosotros from './components/nosotros/nosotros.jsx';
import Contacto from './components/contacto/Contacto.jsx';
import Register from './components/Login/register';
import RecuperarContraseña from './components/Login/RecuperarContraseña';
import ProtegerRutas from './protegerRutas';
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import {Route , Routes, useLocation } from 'react-router-dom';
import { cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido } from './helpers/helpDB';
import './App.css';

import { useLogin } from './context/LoginContext';
import Estadisticas from './components/estadisticas/Estadisticas';
import PerfilUsuario from './components/perfilUsuario/PerfilUsuario';
import ProtegerRutasPerfil from './ProtegerRutasPerfil';


function App() {
  const {menues ,cargarMenu} = useLogin(); 
useEffect(()=>{
  cargarMenu();
},[])


  const [pedidos , setPedidos] = useState([]); 
  const [totalPedido, setTotalPedido] = useState([]); 
  const [cantidadPedido, setCantidadPedido] = useState(0);
  const [totalMontoPedido, setTotal] = useState(0);
  const agregarPedido =(nombre ,id, cantidad , total ) =>{
    const existePedido = pedidos.find(pedido => pedido.nombre == nombre); 
    if(existePedido) return swal({
      title: 'Adventencia!', 
      text: 'El pedido Ya se encuentra en el carrito',
      icon: 'warning',
      buttons: 'Aceptar'
    })
    const nuevoPedido = menues.find(producto => producto._id == id); 
    setPedidos([...pedidos,nuevoPedido]);
    setCantidadPedido(cantidad);
    let pedido = {
      "menu": nombre,
      "cantidad": cantidad,
      "precio": nuevoPedido.descuento? (nuevoPedido.precio - ((nuevoPedido.precio *nuevoPedido.porcentaje)/100) ) : nuevoPedido.precio
    }
      setTotalPedido([...totalPedido, pedido]);
    setTotal( totalMontoPedido + total)
  }
const eliminarPedido = (id, nombre) => {
  let totalNuevo = 0 ; 
  const pedidoActulizado = pedidos.filter(pedido => pedido._id !== id); 
  const totalPedidoActulizado = totalPedido.filter(pedido => pedido.menu !== nombre); 
  setPedidos(pedidoActulizado); 
  setTotalPedido(totalPedidoActulizado); 

 if (pedidoActulizado.length == 0 && totalPedidoActulizado.length == 0 ) {
  setTotal(totalNuevo)
  setCantidadPedido(0); 
  return ;
}
totalPedidoActulizado.forEach(producto =>{
    let precioNuevo =  producto.precio * producto.cantidad;
    totalNuevo = totalNuevo + precioNuevo;
    setTotal(totalNuevo);
  })
}
const modificarTotal = (cantidad,precio, menu) => {
  
  const pedidoModificar = totalPedido.find(pedido => pedido.menu == menu); 
  
  if(cantidad == -1 && pedidoModificar.cantidad <= 1)  return  alert("Compra Minima 1(una) unidad de Menu");
  

  setCantidadPedido(cantidadPedido + cantidad);
  let totalNuevo = totalMontoPedido + precio; 
  setTotal(totalNuevo); 



  totalPedido.map(pedido =>{
    if(pedido.menu == menu){
      pedido.cantidad = pedido.cantidad + cantidad; 
    }
    return pedido;
  })
}

    
  

    const localizacion  = useLocation(); 
    const [currentPath, setCurrentPath] = useState('');
useEffect(()=>{
  setCurrentPath(localizacion.pathname);
}, [localizacion])
    return (
      
    <>
    <header>
      {
        currentPath == '/error404' 
        || currentPath == '/login' 
        || currentPath == '/registarse' 
        || currentPath == '/recuperarContrasena' 
        ? null :   <NavBars  pedidos={pedidos} eliminarPedido={eliminarPedido} total={totalMontoPedido} modificarTotal={modificarTotal} totalPedido={totalPedido} cantidadPedido={cantidadPedido}/>
      }
      
    </header>
    
    <Routes>

<Route path="/" element={<Home  agregarPedido={agregarPedido} />} />
 <Route path='/login' element={ <Login/>} />
 <Route  path='/registarse' element={<Register/>}/>
 <Route path='/contactanos'  element={<Contacto />}/>
 <Route path='/quienesSomos' element ={<Anosotros/>} />
 <Route  path='/error404' element={<Error404/>}/>
<Route element={<ProtegerRutas/>}>
 <Route  path='/administracionMenu' element={ <TablaAdministracion cabecera={cabeceraTablaMenu} title={'Menú'} opcion='menu' />}/>
  <Route  path='/administracionUsuario' element={ <TablaAdministracion cabecera={cabeceraTablaUsuario} title={'Usuario'} opcion='usuario'/>}/>
  <Route  path='/administracionPedido' element={ <TablaAdministracion cabecera={cabeceraTablaPedido} title={'Pedido'} opcion='pedido'  />}/>
  <Route path='/estadisticas' element={<Estadisticas /> } />
</Route>
 <Route element={<ProtegerRutasPerfil />}> 
 <Route path='/perfilUsuario' element={<PerfilUsuario /> } />
<Route  path='/recuperarContrasena' element={<RecuperarContraseña />}/>
 </Route>
</Routes>


  
   {
    currentPath == '/error404' 
    || currentPath == '/login' 
    || currentPath == '/registarse' 
    || currentPath == '/recuperarContrasena' 
    ? null :   <Footer />
   }



    
    </>

  )
}

export default App;