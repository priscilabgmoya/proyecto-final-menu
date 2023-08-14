import { useEffect } from "react";
import Input from "../Input/Input";
import './Formulario.css'; 
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Form, Row, Col } from "react-bootstrap";
import { menuInicial, usuarioInicial } from "../../helpers/helpDB";

function FormularioEditar({handleShow, idItem , isRemoving, isEditing , opcion ,addItem}){ 
    const [validated, setValidated] = useState(false);
    const [isCreate, setIsCreate ] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [objeto , setObjeto] = useState({});
    const handleChange =(event) => {
        setObjeto({...objeto, [event.target.name]: event.target.value});
    }
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };
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
           /*
            addItem(data);
            setIsCreate(true)
            alert(isEditing ? `${opcion} Modificado` : `${opcion} Creado`);
            console.log(data);*/
            console.log(objeto)
           // form.reset();
        }
 
    }

return(
    <Form  noValidate validated={validated}  onSubmit={Agregar}>
          <Row className="mb-2 ">
           { 
           opcion == 'menu' ? 
           <>
            <Form.Group as={Col} md="12" className="py-2">
            <div className={"contendor-update"}>
              <div className={"contenedor-img-update"}>
                <img src={''} alt="Imagen seleccionada" />
              </div>
              <div className={"contenedor-img-update"} >
                {selectedImage && !isCreate ? (
                  <img src={selectedImage} alt="Imagen seleccionada" />
                ) : (
                  <div className="noFile"> <MdCloudUpload className="iconFile" /> </div>
                )}
              </div>
              </div>
            <Form.Label htmlFor='urlImagen'>{'Imagen'}:{" "}</Form.Label>
            <Form.Control
              type="file" placeholder={`Ingrese una imagen`}
              onChange={handleImageChange}
              min={2}  max={200}
              minLength={2} maxLength={200}
              required  name='urlImagen' id='urlImagen' />
            <Form.Control.Feedback type="invalid">{`Ingrese una imagen`} </Form.Control.Feedback>
          </Form.Group>

           <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'nombre'}> {'Nombre'}:{" "} </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Ingrese un nombre de menu`}
              onChange={handleChange}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'nombre'} id={'nombre'}
            />
            <Form.Control.Feedback type="invalid"> {`Ingrese un nombre de menu`} </Form.Control.Feedback>
          </Form.Group>  

            <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'precio'}> {'Precio'}:{" "} </Form.Label>
            <Form.Control
              type="text" placeholder={`Ingrese un precio`}
              onChange={handleChange}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'precio'} id={'precio'}/>
            <Form.Control.Feedback type="invalid"> {`Ingrese un precio`} </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'categoria'}> {'Categoria'}:{" "} </Form.Label>
            <Form.Control
              type="text" placeholder={`Ingrese una categoria`}
              onChange={handleChange}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'categoria'} id={'categoria'}/>
            <Form.Control.Feedback type="invalid"> {`Ingrese una categoria`} </Form.Control.Feedback>
          </Form.Group>
        
           <Form.Group as={Col} md="6">
            <Form.Label htmlFor={'detalle'}>{'Detalle'}:{" "}</Form.Label>
            <Form.Control as="textarea"
              onChange={handleChange}
              cols="30" rows="3"
              minLength={2} maxLength={500}
              required name={'detalle'}
            ></Form.Control>{" "}
            <Form.Control.Feedback type="invalid">{`Ingrese un detalle`} </Form.Control.Feedback>
          </Form.Group>
    
           </>
           :  opcion == 'usuario' ?
           <>
           <Input texto="Nombre" readOnly={isEditing ? true : false}  values={isEditing ? informacion.nombre : null}  changeEvent={(e)=> {handleChange(e)} }/>
          <Input texto="Email" readOnly={isEditing ? true : false}  values={isEditing ? informacion.email : null} />
          <Input texto="Contraseña" readOnly={isEditing ? true : false}  values={isEditing ?' idItem.contraseña' : null} changeEvent={(e)=> {handleChange(e)} } />
          <Input texto="Estado"  values={isEditing ? informacion.estado : null}  changeEvent={(e)=> {handleChange(e)} }/>
          <Input texto="Rol" values={isEditing ? informacion.rol : null}   changeEvent={(e)=> {handleChange(e)} }/>

         </>
           : opcion == 'pedido'?
           <>
          <Input texto="Fecha" readOnly={isEditing ? true : false}   values={isEditing ? informacion.fecha : null}  changeEvent={(e)=> {handleChange(e)} }/>
          <Input texto="Usuario" readOnly={isEditing ? true : false} values={isEditing ? informacion.usuario : null}  changeEvent={(e)=> {handleChange(e)} }/>
          <Input texto="Menu" readOnly={isEditing ? true : false}    values={isEditing ? informacion.menu : null}  changeEvent={(e)=> {handleChange(e)} }/>
          <Input texto="Estado" readOnly={isEditing ? true : false}  values={isEditing ? informacion.estado : null}  changeEvent={(e)=> {handleChange(e)} } />
           </>
           : null
           }
            <div className="contendor-btn">
            <button className='btnConfirmar' type="Submit">Guardar Menú</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>

        
        </Row>
    </Form>
);
}
export default FormularioEditar; 