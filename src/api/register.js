import swal from 'sweetalert';
import emailjs from 'emailjs-com';
import { validarRegistro } from '../helpers/ValidarExpresionesRegulares';
import { URL_POST_USUARIO } from '../config'; 

async function crearNuevoUsuario(form, values){
    
    const respuesta = validarRegistro(values); 
    if(respuesta) return swal({
        title: 'Adventencia!', 
        text: `${respuesta}`,
        icon: 'error',
        buttons: 'Aceptar'
      })
      let nuevoMensaje = {
        nombre: values.nombre,
        email: values.email,
        contrasena: values.contraseña
      }; 

   fetch(`${URL_POST_USUARIO}` ,  {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
     })
     .then(async (res) => {
        if (res.status == 500 || res.status == 409  ||  res.status == 400 ) {
           const data =   await res.json().then(data => {return data.errors}); 
           if(data.length >= 1){
            data.map(data => {
              return swal({
                title: 'Error!', 
                text: `${data.msg}`,
                icon: 'error',
                buttons: 'Aceptar'
              })
            })
          }else {
            return swal({
              title: 'Error!', 
              text: `${data.msg}`,
              icon: 'error',
              buttons: 'Aceptar'
            })
          }
        } else {
            emailjs.send("service_a1ozg25" ,"template_eewvnom",nuevoMensaje,"Vza7tJpPbfn6v0_k5")
            .then(res=> {
                if(res.status == 200){
                    swal("Registro Correcto!", "", "success");
                    form.reset();
                }else{
                    swal("Error no se pudo Registrar en estos Momentos!", "", "error");
                    form.reset();
                }})
        }
    })
     .catch((error) => console.log(error));
}

export{
    crearNuevoUsuario,
}