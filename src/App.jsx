import { Fragment } from 'react';


import NavBars from './components/navbar/navbar.jsx';
import Anosotros from './components/nosotros/nosotros.jsx';




function App() {


  return (

    // function Mostrar (params) { faltaria ver si esto esta bien y agregar las rutas y css
    //if (user==true) {
    // document.getElementById('administracion','pedidos').style.display='flex'
    //}


    <>
      <NavBars />
      <body>
        <main>
       <Anosotros/>
      </main>
    </body >
    </>
  )
}

export default App;

