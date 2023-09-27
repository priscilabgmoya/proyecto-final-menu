import Cookies from "js-cookie";
const cookies = Cookies.get();
import { URL_DELETE_MENU, URL_GET_MENU, URL_GET_MENUES_ADMIN, URL_POST_MENU, URL_PUT_MENU } from "../config";
import { validarMenuNuevo } from "../helpers/ValidarExpresionesRegulares";
function obtenerMenu(){
    const res =  fetch(`${URL_GET_MENUES_ADMIN}`,{
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
        
       return  data.menues; 
     }
    )
     .catch((error) => console.log(error));
     if(res) return res; 
}
function modificarMenu(id,menuModificado){
  
  const cookies = Cookies.get();
  const res =  fetch(`${URL_PUT_MENU}${id}` ,  {
    method: 'PUT',
    headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken },
    body: JSON.stringify(menuModificado)
 }).then(async (res) => {
  
  if(res.status == 500 || res.status == 404){
    const data = await res.json().then(data => {return data});
    return  swal({
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
 })
 .catch((error) => console.log(error));
 if(res) return res;
}
function eliminarMenu(id){

  const res =  fetch(`${URL_DELETE_MENU}/${id}` ,  {
    method: 'DELETE',
    headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken },
    credentials: 'same-origin'
 }).then(async (res) => {
  if(res.status == 500 || res.status == 404){
    const data = await res.json().then(data => {return data});
    return  swal({
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
 })
 .catch((error) => console.log(error));
 if(res) return res;
}
async function crearNuevoMenu(menu) {
  
  const respuesta = validarMenuNuevo(menu); 
  if(respuesta) return swal({
    title: 'Adventencia!', 
    text: `${respuesta}`,
    icon: 'error',
    buttons: 'Aceptar'
  })
  menu.publicado = false;
  menu.descuento = false; 
  menu.porcentaje = 0; 

  
  const res = fetch(`${URL_POST_MENU}` ,  {
    method: 'POST',
    headers: { "Content-Type": "application/json" ,  "x-token" : cookies.jwToken  },
    body: JSON.stringify(menu)
 }).then(async (res) => {
  
  if(res.status == 401 || res.status == 404 || res.status == 500 || res.status == 409|| res.status == 400){
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
async function buscarMenuAdmin(id){
  
  const res =  fetch(`${URL_GET_MENU}${id}`,{
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
    
   return  data; 
 }
)
 .catch((error) => console.log(error));
 if(res) return res; 
}
export {
    obtenerMenu,
    modificarMenu, 
    eliminarMenu,
    crearNuevoMenu,
    buscarMenuAdmin,
}
