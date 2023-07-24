import './App.css'
import Error404 from './Components/Error404/Error404';
import {Outlet, Link, Route , Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
    <header></header>
    <main>

    </main>
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
 <Route  path='error404' element={<Error404/>}/>
 <Route path='inicio' />
</Routes>
      <Footer />
    </>
  )
}

export default App; 
