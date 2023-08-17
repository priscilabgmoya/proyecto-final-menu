import { crearNuevoMenu,eliminarMenu } from "../api/adminMenu";
import { crearNuevoUsuario ,eliminarUsuario} from "../api/adminUsuario";
import { obtenerEstadoUsuarios } from "../api/estadoUsuario";
import { obtenerRolUsuarios } from "../api/rolUsuario";
import { eliminarPedido } from '../api/adminPedidos';
import { obtenerEstadoPedido } from "../api/estadosPedidos";

export  const postApi = async (opciones, objetos , setIsCreate) =>{
    switch(opciones){
      case 'menu':
     const dataMenu = await crearNuevoMenu(objetos);
     setIsCreate(true)
      break;
      case 'usuario':
     const dataUsuario = await crearNuevoUsuario(objetos); 
      break;
      }
  }

export const ObtenerEstados = async (setResponseEstados) => {
    const res = await obtenerEstadoUsuarios();
    setResponseEstados(res);
  };
export const ObtenerRoles = async (setResponseRoles) => {
    const res = await obtenerRolUsuarios();
    setResponseRoles(res);
};
export const ObtenerEstadosPedidos = async (setResponseEstadosPedidos) => {
    const res = await obtenerEstadoPedido();
    setResponseEstadosPedidos(res);
  }
export const deleteApi = async (opciones, id) => {
    switch(opciones){
        case 'menu':
        await eliminarMenu(id);
        break;
        case 'usuario':
            let usuario = {
                id: id,
                estado:"64cd7df42a13bbf308f05c85"
            }
       await eliminarUsuario(usuario); 
        break;
        case 'pedido':
            
            let pedido = {
                id: id,
                estado: '64dc4dc75b364e575a454c24'
            }
        await eliminarPedido(pedido)
        break;
    }
}