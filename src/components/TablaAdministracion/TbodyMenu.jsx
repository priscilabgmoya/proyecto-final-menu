import { useEffect, useState } from 'react';
import './TablaAdministracion.css'; 
import { modificarMenu, obtenerMenu } from '../../api/adminMenu';
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai';
function TbodyMenu ({total,firstIndex,lastIndex, handleShow , change }){

    const [informacion , setInformacion] = useState([]);

     const cargarMenu = async () => {
        const data = await obtenerMenu();
        setInformacion(data); 
        return  ;
    }
    useEffect(()=>{
        cargarMenu();  
   },[])
   
   total(informacion);
    const handlePublicadoChange = (index, publicado) => {
        if(publicado){
            swal({
                title: "¿Desea ocultar el  Menú?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then( async (willDelete) => {
                if (willDelete) {
                    const menuModificado =  {
                        publicado: false, 
                    }
                   await modificarMenu(index,menuModificado); 
                   cargarMenu();
                }
              });
        }else{
            swal({
                title: "¿Desea Publicar Menú?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then( async (willDelete) => {
                if (willDelete) {
                    const menuModificado =  {
                        publicado: true, 
                    }
                   await modificarMenu(index,menuModificado); 
                   cargarMenu();
                }
              });
        }
      };
      const handleDescuentoChange =  (index, descuento) => {
        if(descuento){
            swal({
                title: "¿Desea  cambiar descuento del producto?",
                icon: "warning",
                text: 'Ingrese numeros  con punto (.) - Descuentos de 0% al 100%',
                content: "input",
                buttons: true,
                dangerMode: true,
              })
              .then( async (value) => {
                if (value >= 0 && value <100) {
                    if(parseFloat(value) == 0) {
                        const menuModificado=  {
                            descuento: false, 
                            porcentaje: 0
                        }
                       await modificarMenu(index,menuModificado); 
                       cargarMenu();
                    }else{
                        const menuModificado=  {
                            descuento: true, 
                            porcentaje: parseFloat(value)
                        }
                      await  modificarMenu(index,menuModificado); 
                     cargarMenu();
                    }
                } else{
                    swal( {
                        title: 'Error!. Ingrese un porcentaje valido', 
                        icon: 'error'
                      })
                    cargarMenu(); 
                }
              });
        }else{
            swal( {
                title: 'Ingrese un porcentaje:', 
                text: 'Ingrese numeros  con punto (.) - Descuentos de 0% al 100%',
                content: "input",
                icon: 'info'
              })
              .then( async (value) => {
                if(value >=0 && value <=100){
                    const menuModificado=  {
                         descuento: true, 
                         porcentaje: parseFloat(value)
                     }
                    await  modificarMenu(index,menuModificado); 
                    cargarMenu();
                }else{
                    swal( {
                        title: 'Error!. Ingrese un porcentaje valido', 
                        icon: 'error'
                      })
                      cargarMenu(); 
                }
              });

        }
      };
    

    return(
        <>
        {

        informacion?.slice(firstIndex, lastIndex).map((item, index) => {
        return <tr key={item._id}>
             <td className={'columnaImagen'}> 
             <img src={`${item.urlImagen}`} alt={`imagen-de-${item.nombre}`}/>
             </td>
             <td>{item.nombre}</td>
             <td>{item.precio}</td>
             <td>{item.categoria}</td>
             <td  className='input-check' ><input type="checkbox" name="check-publicado" id="menu-publicado" checked={item.publicado} onChange={()=> {handlePublicadoChange(item._id, item.publicado)}}/></td>
             <td  className='input-check' ><input type="checkbox" name="check-descuento" id="menu-descuento" checked={item.descuento} onChange={()=> {handleDescuentoChange(item._id,item.descuento)}}/></td>
             <td>{item.porcentaje}</td>
             <td>{item.descuento? item.precio - ((item.precio * item.porcentaje)/100) : item.precio}</td>
             <td className='contenedor-operaciones'>
                     <button className='btnModificar' onClick={()=> {handleShow('update', item._id)}} ><AiFillEdit  className='iconsBtns'/></button>
                     <button className='btnEliminar' onClick={()=> {handleShow('delete', item._id)}} ><AiFillDelete  className='iconsBtns'/></button>
             </td>
         </tr>
       })
    }
        </>
    ); 
}

export default TbodyMenu;