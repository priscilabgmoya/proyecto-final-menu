import { crearNuevoMenu,eliminarMenu } from "../api/adminMenu";
import { crearNuevoUsuario ,eliminarUsuario} from "../api/adminUsuario";
import { obtenerEstadoUsuarios } from "../api/estadoUsuario";
import { obtenerRolUsuarios } from "../api/rolUsuario";
import { eliminarPedido } from '../api/adminPedidos';
import { obtenerEstadoPedido } from "../api/estadosPedidos";



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

