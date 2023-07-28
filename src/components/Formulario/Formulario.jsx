import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import './Formulario.css'; 
import { useState } from "react";

function Formulario({handleShow, idItem , isRemoving, isEditing , opcion ,addItem}){
    const {register,handleSubmit, reset} = useForm();
    const [isCreate, setIsCreate ] = useState(false)
    const Agregar = (data)=>{
        {
            opcion == 'menu'?data.urlImagen = URL.createObjectURL(data.urlImagen[0]) : null
        }
        
        addItem(data);
        setIsCreate(true)
        alert(isEditing ? `${opcion} Modificado` : `${opcion} Creado`);
        reset();
    }
return(
    <form onSubmit={handleSubmit(Agregar)}>
        {
            isRemoving ? 
            <>
            <div className="contendor-btn">
            <button className='btnConfirmar' >Confirmar</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>
            </>
            : 
            <>
           { 
           opcion == 'menu' ? 
           <>
           <Input texto="Imagen" register={ register("urlImagen")} isCreate={isCreate}/>
           <Input texto="Nombre"  register={ register("nombre")}/>
           <Input texto="Descripción"  register={ register("descripcion")}/>
           <Input texto="Precio"  register={ register("precio")}/>
           <Input texto="Categoria"  register={register("categoria")}/>
           {
            isEditing !== true ? 
            <>
            <Input texto="Publicado"  register={register("publicado")}/>
           <Input texto="Combo"  register={register("combo")}/>
            </>
            : null
           }
           </>
           :  opcion == 'usuario' ?
           <>
           <Input texto="Nombre" readOnly={isEditing ? true : false}  register={register("nombre")} />
          <Input texto="Email" readOnly={isEditing ? true : false}  register={register("email")} />
          <Input texto="Estado"  register={register("estado")}/>
          <Input texto="Rol"  register={register("rol")}/>
         </>
           : opcion == 'pedido'?
           <>
          <Input texto="Fecha" readOnly={isEditing ? true : false}   register={register("fecha")}/>
          <Input texto="Usuario" readOnly={isEditing ? true : false}   register={register("usuario")}/>
          <Input texto="Menu" readOnly={isEditing ? true : false}   register={register("menu")}/>
          <Input texto="Estado"  register={register("estado")}/>
           </>
           : null
           }
            <div className="contendor-btn">
            <button className='btnConfirmar' >Guardar Menú</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>
            </>
        }
    </form>
);
}
export default Formulario; 