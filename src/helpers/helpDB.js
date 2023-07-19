import { v4 as uuidv4 } from 'uuid';
const menuPrueba = [
    {
        codigo: uuidv4(),
        nombre: 'pizza comun', 
        urlImagen: '/src/assets/pizza-prueba.jpg',
        descripcion: 'pizza de muzzarella con salsa tricolor',
        precio: '500 USD',
        categoria: 'pizza',
        publicado: true,
        combo: false
    },
    {
        codigo: uuidv4(),
        nombre: 'hambuerguesa casera', 
        urlImagen: '/src/assets/hambuerguesa-prueba.jpg',
        descripcion: 'hamburguesa con pan casero creada con carne 100% real no Fake',
        precio: '300 USD',
        categoria: 'hambuerguesas',
        publicado: true,
        combo: false
    },
    {
        codigo: uuidv4(),
        nombre: 'Sandwich de Miga', 
        urlImagen: '/src/assets/sandwich-de-miga.jpg',
        descripcion: 'Los mejores Sandwich de tu vida, triples de Jamon y queso',
        precio: '600 USD',
        categoria: 'Sandwich',
        publicado: true,
        combo: false
    },
    {
        codigo: uuidv4(),
        nombre: 'Sandwich de Milanesa', 
        urlImagen: '/src/assets/sanguche-milanesa.jpg',
        descripcion: 'El mejor Sandwich de milanesa que van a probar en su vida...',
        precio: '700 USD',
        categoria: 'Sandwich',
        publicado: true,
        combo: false
    },
    {
        codigo: uuidv4(),
        nombre: 'Papas Fritas', 
        urlImagen: '/src/assets/plato-con-papas-fritas.jpg',
        descripcion: 'En el mundo siempre estan nuestras amigas, las papas fritas',
        precio: '500 USD',
        categoria: 'papas fritas',
        publicado: true,
        combo: false
    }
]; 

const usuariosPrueba = [
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'pendiente',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPruebaAdm',
        email: 'administrador@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'administrador'
    }
]; 

const pedidosPrueba = [
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'Hamburgesa cuarto de Libra', 
        estado: 'pendiente'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'pizza napolitana', 
        estado: 'pendiente'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'sanguche de milanesa', 
        estado: 'realizado'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'pizza a la calabreza', 
        estado: 'realizado'
    }
]; 
const cabeceraTablaMenu = ['Imagen','Nombre','Descripción', 'Precio','Categoria', 'Publicado', 'Combo', 'Operaciones']; 
const cabeceraTablaUsuario = ['Nombre','Email', 'Estado','Rol', 'Operaciones'];
const cabeceraTablaPedido = ['Fecha','Usuario','Menú','Estado','Operaciones']; 

export{pedidosPrueba, usuariosPrueba , menuPrueba,cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido }; 