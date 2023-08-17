import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "./context/LoginContext";

function ProtegerRutas() {
   const {user,isAuthenticated}  = useLogin(); 

   if(!isAuthenticated) return <Navigate to='/' replace />
   if(isAuthenticated && user.usuario.rol == "administrador"); 
    return <Outlet/> 
}

export default ProtegerRutas; 