const ExpRegNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
    ExpRegTitulo = /^[\w\s():\-?!¡¿áéíóúÁÉÍÓÚüÜñÑ"]+$/i,
    ExpRegURL = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    ExpRegAsunto = /^[A-Za-z0-9\s\-\_\.\,\!\?\']+$/,
    ExpRegMensaje =/^[A-Za-z0-9\s\-\_\.\,\!\?\áéíóúÁÉÍÓÚüÜñÑ']+$/i,
    ExpRegTexto = /^[\x00-\xFF]*$/,
    ExpRegPass = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

function validarLogin (user){
    if (user.email.length == 1 || user.email.match(ExpRegEmail) == null) return "Ingrese un correo correcto!";
    if (user.contraseña.length == 1 || user.contraseña.match(ExpRegPass) == null) return "Ingrese una contraseña correcta, solo letras, numeros y/o caracteres especiales";
    return null; 
}
function validarRegistro(user){
    if (user.nombre.length == 1 || user.nombre.match(ExpRegNombre) == null) return "Ingrese un nombre y apellido correcto";
    if (user.email.length == 1 || user.email.match(ExpRegEmail) == null) return "Ingrese un email correcto";
    if (user.contraseña.length == 1 || user.contraseña.match(ExpRegPass) == null) return "Ingrese una contraseña correcta, solo letras, numeros y/o caracteres especiales";
    return null;
}

export {validarLogin, validarRegistro}