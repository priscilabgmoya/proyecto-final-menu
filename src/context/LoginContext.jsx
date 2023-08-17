import { createContext, useState, useContext, useEffect} from "react";
import { loginUsuario , validarToken} from "../api/login";
import Cookies from 'js-cookie';
import { obtenerMenu } from "../api/adminMenu";
import { obtenerPedidos } from "../api/adminPedidos";
import { obtenerUsuarios } from "../api/adminUsuario";
export const LoginContext = createContext();
export const useLogin = () => {
    const context = useContext(LoginContext); 
    if(!context) throw new Error ("LoginContext debe estar dentro de LoginProvider");
    return context;
}
export const LoginProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [isAuthenticated , setIsAuthenticated] = useState(false)

    const [menues , setMenues] = useState([]);
    const [usuarios, setUsuarios] = useState([]); 
    const [pedidos, setPedidos] = useState([]); 

    const login = async (form, values)=>{
        try {
            const res =  await loginUsuario(form, values); 
            if(res.token) {
                setUser(res); 
                setIsAuthenticated(true);
            };
        } catch (error) {
            console.log(error);
        }

    }
    const logout = () => {
        Cookies.remove('jwToken'); 
        setIsAuthenticated(false);
        setUser(null);
    }
    const validarLogin = async () => {
        const cookies = Cookies.get(); 
        try {
            if(cookies.jwToken){
              let res =  await validarToken({jwToken: cookies.jwToken })
              if(!res) setIsAuthenticated(false);
              setIsAuthenticated(true);
              setUser({usuario: res});
            }
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
            setUser(null);
        }
    }
    const cargarMenu = async () => {
        const data = await obtenerMenu();
        setMenues(data); 
        return  ;
    }
    const cargarPedidos = async () => {
        const data = await obtenerPedidos();
        setPedidos(data); 
        return  ;
    }
    const cargarUsuarios = async () => {
        const data = await obtenerUsuarios();
        setUsuarios(data); 
        return  ;
    }

    const buscarMenu = (termino, state) =>{
        if (termino == "") return cargarMenu();
        const filteredResults = menues.filter(item =>
          item.nombre.toLowerCase().includes(termino.toLowerCase())
        );
        setMenues(filteredResults);
        state(1);
      }
      const buscarUsuario = (termino, state) =>{
        if (termino == "") return cargarUsuarios();
        const filteredResults = usuarios.filter(item =>
          item.nombre.toLowerCase().includes(termino.toLowerCase())
        );
        setUsuarios(filteredResults);
        state(1);
      }
      const buscarPedido = (termino, state) =>{
        if (termino == "") return cargarPedidos();
        const filteredResults = pedidos.filter(item =>
          item.usuario.nombre.toLowerCase().includes(termino.toLowerCase())
        );
        setPedidos(filteredResults);
        state(1);
      }
    useEffect(()=>{
        validarLogin();
    },[])
    return(
        <LoginContext.Provider value={{
            login,
            logout,
            cargarMenu,
            cargarUsuarios,
            cargarPedidos,
            buscarMenu,
            buscarUsuario,
            buscarPedido,
            pedidos,
            usuarios,
            menues,
            usuarios, 
            pedidos,
            user,
            isAuthenticated
        }}>
            {children}
        </LoginContext.Provider>
    )
}