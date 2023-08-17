import './TablaAdministracion.css'; 
import { useEffect, useState } from 'react';
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai';
import { obtenerUsuarios } from '../../api/adminUsuario';

function TbodyUsuario ({total,firstIndex,lastIndex, handleShow , change }){
    const [informacion , setInformacion] = useState([]);

    const cargarUsuarios = async () => {
       const data = await obtenerUsuarios();
       setInformacion(data); 
       return  ;
   }
   useEffect(()=>{
    cargarUsuarios();  
  },[])
  
  total(informacion);
    return(
        <>
        {
                informacion?.slice(firstIndex, lastIndex).map(item => {
                    return <tr key={item.uid}>
                         <td>{item.nombre}</td>
                         <td>{item.email}</td>
                         <td key={item.estado._id}>{item.estado.nombre}</td>
                         <td key={item.rol._id}>{item.rol.rol}</td>
                         <td className='contenedor-operaciones'>
                         <button className='btnModificar' onClick={()=> {handleShow('update', item.uid)}} ><AiFillEdit  className='iconsBtns'/></button>
                         <button className='btnEliminar' onClick={()=> {handleShow('delete', item.uid)}}><AiFillDelete  className='iconsBtns'/></button>
                         </td>
                     </tr>
                   })
        }
        </>
    ); 
}

export default TbodyUsuario;