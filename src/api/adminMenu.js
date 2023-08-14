import Cookies from "js-cookie";
const cookies = Cookies.get();
import { URL_GET_MENUES_ADMIN, URL_PUT_MENU } from "../config";
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
  const res =  fetch(`${URL_PUT_MENU}/${id}` ,  {
    method: 'PUT',
    headers: { "Content-Type": "application/json", "x-token" : cookies.jwToken },
    credentials: 'same-origin',
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

  const res =  fetch(`${URL_PUT_MENU}/${id}` ,  {
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
export {
    obtenerMenu,
    modificarMenu, 
    eliminarMenu
}
