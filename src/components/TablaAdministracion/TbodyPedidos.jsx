import './TablaAdministracion.css'; 
import { useEffect, useState } from 'react';
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai';
import { useLogin } from '../../context/LoginContext';

function TbodyPedido ({total,firstIndex,lastIndex, handleShow }){
    const {pedidos, cargarPedidos} = useLogin()

    useEffect(()=>{
        cargarPedidos();  
   },[])

   total(pedidos);
    return(
        <>
        {
           pedidos?.slice(firstIndex, lastIndex).map(item => {
                    return <tr key={item._id}>
                        <td>{item.fecha.toString().substring(0,10)}</td>
                        <td>{item.usuario.nombre}</td>
                        <td>{item.menu.map((m, index)=>{
                            let menuSeparado ="";
                            if(index == 0){
                                menuSeparado = m.menu; 
                            }
                            if(m){
                                menuSeparado = menuSeparado + ' , ' + m.menu; 
                            }
                            return menuSeparado
                        })}</td>
                        <td>{item.estado.nombre}</td>
                        <td>{item.precio}</td>
                        <td className='contenedor-operaciones'>
                                <button className='btnModificar' onClick={()=> {handleShow('update' , item._id)}} ><AiFillEdit  className='iconsBtns'/></button>
                                <button className='btnEliminar' onClick={()=> {handleShow('delete', item._id)}}><AiFillDelete  className='iconsBtns'/></button>
                        </td>
                    </tr>
                  })
                 
        }
        </>
    ); 
}

export default TbodyPedido;