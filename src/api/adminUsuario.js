import swal from 'sweetalert';
import { URL_GET_USUARIOS , URL_DELETE_USUARIO, URL_POST_USUARIO_ADMIN, URL_GET_USUARIO_ADMIN, URL_GET_USUARIO, URL_PUT_USUARIO_ADMIN, URL_PUT_USUARIO} from '../config';
import Cookies from 'js-cookie';
import { validarRegistro } from '../helpers/ValidarExpresionesRegulares';
const cookies = Cookies.get();
function obtenerUsuarios(){
    const res =  fetch(`${URL_GET_USUARIOS}`).then(async (res) => {
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
async function eliminarUsuario(values){
  const res =  fetch(`${URL_DELETE_USUARIO}`,
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


async function crearNuevoUsuario (usuario) {
  
  const respuesta = validarRegistro(usuario); 
  if(respuesta) return swal({
    title: 'Adventencia!', 
    text: `${respuesta}`,
    icon: 'error',
    buttons: 'Aceptar'
  })
  
  const res = fetch(`${URL_POST_USUARIO_ADMIN}` ,  {
    method: 'POST',
    headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
    body: JSON.stringify(usuario)
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
async function buscarUsuarioAdmin(id){
  
  const res =  fetch(`${URL_GET_USUARIO_ADMIN}/${id}`,{
    headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken },
    credentials: 'same-origin'
 }).then(async (res) => {
  
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
async function buscarUsuario(id){
  const res =  fetch(`${URL_GET_USUARIO}/${id}`,{
    headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
    credentials: 'same-origin'
 }).then(async (res) => {
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
async function modificarUsuario (usuario) {

  const res = fetch(`${URL_PUT_USUARIO_ADMIN}` ,  {
    method: 'PUT',
    headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
    body: JSON.stringify(usuario)
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

async function modificarUsuarioNoAdmin (usuario) {

  const respuesta = validarRegistro(usuario); 
  if(respuesta) return swal({
    title: 'Adventencia!', 
    text: `${respuesta}`,
    icon: 'error',
    buttons: 'Aceptar'
  })
  
  const res = fetch(`${URL_PUT_USUARIO}` ,  {
    method: 'PUT',
    headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
    body: JSON.stringify(usuario)
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
    obtenerUsuarios,
    eliminarUsuario,
    crearNuevoUsuario,
    buscarUsuarioAdmin, 
    buscarUsuario,
    modificarUsuario, 
    modificarUsuarioNoAdmin
}
