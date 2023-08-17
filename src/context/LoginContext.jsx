import { createContext, useState, useContext, useEffect} from "react";
import { loginUsuario , validarToken} from "../api/login";
import Cookies from 'js-cookie';
export const LoginContext = createContext();
export const useLogin = () => {
    const context = useContext(LoginContext); 
    if(!context) throw new Error ("LoginContext debe estar dentro de LoginProvider");
    return context;
}
export const LoginProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [isAuthenticated , setIsAuthenticated] = useState(false)
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
    useEffect(()=>{
        validarLogin();
    },[])
    return(
        <LoginContext.Provider value={{
            login,
            logout,
            user,
            isAuthenticated
        }}>
            {children}
        </LoginContext.Provider>
    )
}