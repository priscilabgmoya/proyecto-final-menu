import { validarLogin } from '../helpers/ValidarExpresionesRegulares';
import swal from 'sweetalert';
import { URL_LOGIN, URL_VALIDAR_TOKEN } from '../config';
function loginUsuario (form, values){
    const respuesta = validarLogin(values); 
    if(respuesta) return swal({
        title: 'Adventencia!', 
        text: `${respuesta}`,
        icon: 'error',
        buttons: 'Aceptar'
      })
    const res =  fetch(`${URL_LOGIN}` ,  {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: 'same-origin',
        body: JSON.stringify(values)
     })
     .then(async (res) => {
        if (res.status == 500 || res.status == 409  ||  res.status == 400 ) {
            const data =   await res.json().then(data => {return data}); 
             return swal({
             title: 'Error!', 
             text: `${data.msg}`,
             icon: 'error',
             buttons: 'Aceptar'
           })
         }
         const data =   await res.json().then(data => {return data}); 
          swal({
         title: `${data.msg}`, 
         text: `Bienvenido ${data.usuario.nombre}`,
         icon: 'success',
         buttons: 'Aceptar'
       })
       document.cookie = `jwToken=${data.token}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`
       return {token: data.token ,usuario: data.usuario}; 
     }
       )
     .catch((error) => console.log(error));
     if(res) return res; 
}

function validarToken(cookie){
 const res = fetch(`${URL_VALIDAR_TOKEN}` ,  {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cookie)
 }).then(async (res) => {
  if(res.status == 401){
    const data =   await res.json().then(data => {return data}); 
     swal({
    title: 'Error!', 
    text: `${data.msg}`,
    icon: 'error',
    buttons: 'Aceptar'
  })
    return null; 
  }
  const data =   await res.json().then(data => {return data}); 
  return data; 
 })
 .catch(error => console.log(error));

if(res) return res; 
}
 export {
    loginUsuario,
    validarToken
 }


