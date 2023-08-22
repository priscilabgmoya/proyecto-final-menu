import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { URL_DELETE_PEDIDO, URL_GET_PEDIDO, URL_GET_PEDIDOS, URL_POST_PEDIDO, URL_PUT_PEDIDO } from '../config';
const cookies = Cookies.get();

function obtenerPedidos(){
    const res =  fetch(`${URL_GET_PEDIDOS}`).then(async (res) => {
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
async function eliminarPedido(values){
  
  const res =  fetch(`${URL_DELETE_PEDIDO}`,
  {
    method: 'DELETE',
    headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken  },
    credentials: 'same-origin',
    body: JSON.stringify(values)
 
  }).then(async (res) => {
    
    if (res.status == 404 || res.status == 401 ) {
        const data =   await res.json().then(data => {return data}); 
         return swal({
         title: 'Error!', 
         text: `${data.msg}`,
         icon: 'error',
         buttons: 'Aceptar'
       })
     }
     const data =   await res.json().then(data => {return data}); 
     return swal({
      title: `${data.msg}`, 
      icon: 'success',
      buttons: 'Aceptar'
    }) 
 }
)
 .catch((error) => console.log(error));
 if(res) return res; 
  }

async function nuevoPedido(values){
  
    const res =  fetch(`${URL_POST_PEDIDO}`,
    {
      method: 'POST',
      headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken  },
      credentials: 'same-origin',
      body: JSON.stringify(values)
   
    }).then(async (res) => {
      
      if (res.status == 404 || res.status == 401 ) {
          const data =   await res.json().then(data => {return data}); 
           return swal({
           title: 'Error!', 
           text: `${data.msg}`,
           icon: 'error',
           buttons: 'Aceptar'
         })
       }
       const data =   await res.json().then(data => {return data}); 
       return data; 
   }
  )
   .catch((error) => console.log(error));
   if(res) return res; 
    }
  async function buscarPedidoAdmin(id){
    
    const res =  fetch(`${URL_GET_PEDIDO}/${id}`).then(async (res) => {
    
      if (res.status == 404 ) {
          const data =   await res.json().then(data => {return data}); 
           return swal({
           title: 'Error!', 
           text: `${data.mensaje}`,
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
  async function modificarPedido (pedido) {
    
    const res = fetch(`${URL_PUT_PEDIDO}` ,  {
      method: 'PUT',
      headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
      credentials: 'same-origin',
      body: JSON.stringify(pedido)
   }).then(async (res) => {
    
    if(res.status == 401 || res.status == 404 || res.status == 500 || res.status == 409 || res.status == 400){
      const data =   await res.json().then(data => {return data}); 
       swal({
      title: 'Error!', 
      text: `${data.msg}`,
      icon: 'error',
      buttons: 'Aceptar'
    })
      return null; 
    }
    if(res.status == 200 || res.status == 201) {
      const data =   await res.json().then(data => {return data}); 
     swal({
        title: `${data.msg}`, 
        icon: 'success',
        buttons: 'Aceptar'
      })
       return data;
    } 
   })
  
   .catch(error => console.log(error));
  
  if(res) return res; 
  }
  
export {
    obtenerPedidos,
    eliminarPedido,
    buscarPedidoAdmin,
    modificarPedido,
    nuevoPedido
}