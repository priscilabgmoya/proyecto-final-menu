function obtenerPedidos(URL_API){
    const res =  fetch(`${URL_API}`).then(async (res) => {
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
}