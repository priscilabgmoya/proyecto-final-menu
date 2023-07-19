import './App.css'
import TablaAdministracion from './components/TablaAdministracion/TablaAdministracion';
import {Outlet, Link, Route , Routes } from 'react-router-dom';
import { pedidosPrueba , usuariosPrueba, menuPrueba ,cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido } from './helpers/helpDB';
function App() {

  return (
    <>
     <nav> 
      <Link  to={'/administracionMenu'}> Administración Menú</Link>
      <Link  to={'/administracionUsuario'}> Administración Usuarios </Link>
      <Link  to={'/administracionPedido'}>Administración Pedidos</Link>
     </nav>
     <Outlet />
<Routes>
  <Route  path='administracionMenu' element={ <TablaAdministracion cabecera={cabeceraTablaMenu} title={'Menú'} opcion='menu' informacion={menuPrueba}/>}/>
  <Route  path='administracionUsuario' element={ <TablaAdministracion cabecera={cabeceraTablaUsuario} title={'Usuario'} opcion='usuario' informacion={usuariosPrueba}/>}/>
  <Route  path='administracionPedido' element={ <TablaAdministracion cabecera={cabeceraTablaPedido} title={'Pedido'} opcion='pedido'  informacion={pedidosPrueba}/>}/>
</Routes>
    
    
    
    </>
  )
}

export default App; 
