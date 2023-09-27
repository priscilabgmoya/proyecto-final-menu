const staticFooter = [
    {
        title: 'Friky Sangucheria', 
        item_uno: {
            title: 'Dirección: Pueblo Paleta 1966', 
            url: null
        },
        item_dos: {
            title: 'telefono: + 34 726 731 724', 
            url: null
        },
        item_tres: {
            title: 'Email: geunnounn-7992@yopmail.com', 
            url: null
        }
    },
    {
        title: 'Navegación', 
        item_uno: {
            title: 'Inicio', 
            url: '/'
        },
        item_dos: {
            title: 'Quienés Somos', 
            url: '/quienesSomos'
        },
        item_tres: {
            title: 'Contactanós', 
            url: '/contactanos'
        }
    },
    {
        title: 'Legal', 
        item_uno: {
            title: 'Terminos y condiciones', 
            url: '/error404'
        },
        item_dos: {
            title: 'Politica de privacidad', 
            url: '/error404'
        },
        item_tres: {
            title: 'Politica de derecho de autor', 
            url: '/error404'
        }
    }
]; 
const cabeceraTablaMenu = ['Imagen','Nombre', 'Precio','Categoria', 'Publicado','Descuento', 'Porcentaje','Precio Final', 'Operaciones']; 
const cabeceraTablaUsuario = ['Nombre','Email', 'Estado','Rol', 'Operaciones'];
const cabeceraTablaPedido = ['Fecha','Usuario','Menú','Estado','Total', 'Operaciones']; 

export{cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido, staticFooter}; 