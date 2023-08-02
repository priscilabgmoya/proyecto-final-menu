import Input from "../Input/Input";
import './Formulario.css'; 
import { useState } from "react";
import { Form, Row } from "react-bootstrap";

function Formulario({handleShow, idItem , isRemoving, isEditing , opcion ,addItem}){ 
    const [validated, setValidated] = useState(false);
    const [isCreate, setIsCreate ] = useState(false);
    const Agregar = (event)=>{
        const form = event.currentTarget;
        console.log(form);
        console.log(form.checkValidity());
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }else{
            event.preventDefault();
            let form = event.target; 
            let data = { }; 
            console.log(event.target.Detalle.value);
          
            switch(opcion){
                case 'menu':
                    data.urlImagen = URL.createObjectURL(event.target.Imagen.files[0]);
                    data.nombre = event.target.Nombre.value;
                    data.precio =  event.target.Precio.value;
                    data.categoria =  event.target.Categoria.value;
                    data.detalle =  event.target.Detalle.value;
                    data.publicado =  event.target.Publicado.checked;
                    data.descuento =  event.target.Descuento.checked;
                    data.combo =  event.target.Combo.checked;
                    data.porcentaje =  event.target.Porcentaje.value;
                break;
                case 'usuario':
                break;
                default:
                break; 
            }
           
           
           
           
            addItem(data);
            setIsCreate(true)
            alert(isEditing ? `${opcion} Modificado` : `${opcion} Creado`);
            console.log(data);
           // form.reset();
        }
 
    }
return(
    <Form  noValidate validated={validated}  onSubmit={Agregar}>
          <Row className="mb-2 ">
        {
            isRemoving ? 
            <>
            <div className="contendor-btn">
            <button className='btnConfirmar' type="button" >Confirmar</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>
            </>
            : 
            <>
           { 
           opcion == 'menu' ? 
           <>
           <Input texto="Imagen"  isCreate={isCreate}  />
           <Input texto="Nombre"  />
           <Input texto="Precio" />
           <Input texto="Categoria"  />
           <Input texto="Detalle" />
           {
            isEditing !== true ? 
            <>
            <Input texto="Publicado"  />
           <Input texto="Descuento"/>
           <Input texto="Combo"  />
            </>
            : null
           }
           <Input texto="Porcentaje"  />
           </>
           :  opcion == 'usuario' ?
           <>
           <Input texto="Nombre" readOnly={isEditing ? true : false} />
          <Input texto="Email" readOnly={isEditing ? true : false} />
          <Input texto="Contraseña" readOnly={isEditing ? true : false} />
          <Input texto="Estado" />
          <Input texto="Rol" />

         </>
           : opcion == 'pedido'?
           <>
          <Input texto="Fecha" readOnly={isEditing ? true : false}  />
          <Input texto="Usuario" readOnly={isEditing ? true : false}  />
          <Input texto="Menu" readOnly={isEditing ? true : false}   />
          <Input texto="Estado"  register={register("estado")} />
           </>
           : null
           }
            <div className="contendor-btn">
            <button className='btnConfirmar' type="Submit">Guardar Menú</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>
            </>
        }
        </Row>
    </Form>
);
}
export default Formulario; 