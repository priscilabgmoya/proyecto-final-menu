import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "./context/LoginContext";

function ProtegerRutasPerfil() {
   const {isAuthenticated}  = useLogin(); 

   if(!isAuthenticated) return <Navigate to='/' replace />
   if(isAuthenticated) return <Outlet/> 
}

export default ProtegerRutasPerfil; 