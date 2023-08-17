import swal from 'sweetalert';
import { URL_GET_ESTADOS_PEDIDOS } from '../config';
function obtenerEstadoPedido(){
    const res =  fetch(`${URL_GET_ESTADOS_PEDIDOS}`).then(async (res) => {
        if (res.status == 404 ) {
            const data =   await res.json().then(data => {return data}); 
             return swal({
             title: 'Error!', 
             text: `${data.msg}`,
             icon: 'error',
             buttons: 'Aceptar'
           })
         }
         const data =   await res.json().then(data => {return data}); 
        
       return  data.data; 
     }
    )
     .catch((error) => console.log(error));
     if(res) return res; 
}

export{
    obtenerEstadoPedido
}