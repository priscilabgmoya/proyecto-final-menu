import { useEffect } from "react";
import './Formulario.css'; 
import { useState } from "react";
import { Form, Row, Col ,InputGroup} from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";
import { ObtenerEstados, ObtenerRoles } from "../../helpers/helpApi";
import { useLogin } from '../../context/LoginContext';
function Formulario({handleShow, opcion }){ 
  const {cargarMenu, cargarUsuarios , cargarPedidos} = useLogin();
    const [validated, setValidated] = useState(false);
    const [isCreate, setIsCreate ] = useState(false);
    const [objeto , setObjeto] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
  const [responseEstados, setResponseEstados] = useState([]);
  const [responseRoles, setResponseRoles] = useState([]);

  const handleImageChange = (event) => {
      setSelectedImage(event.target.value);
      setObjeto({...objeto, [event.target.name]: event.target.value });
  };
    const handleChange =(event) => {
        setObjeto({...objeto, [event.target.name]: event.target.value});
    }

    const postApi = async (opciones, objetos , setIsCreate) =>{
      switch(opciones){
        case 'menu':
       const dataMenu = await crearNuevoMenu(objetos);
       setIsCreate(true)
       cargarMenu(); 
        break;
        case 'usuario':
       const dataUsuario = await crearNuevoUsuario(objetos); 
       cargarUsuarios()
        break;
        }
    }

    const Agregar = async (event)=>{
        const form = event.currentTarget;
        console.log(form.checkValidity());
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }else{
            event.preventDefault();
            postApi(opcion, objeto, setIsCreate);
           form.reset();
           handleShow();
        }
 
    }

    useEffect(() => {
      ObtenerEstados(setResponseEstados);
      ObtenerRoles(setResponseRoles);
    }, []);
return(
    <Form  noValidate validated={validated}  onSubmit={Agregar}>
          <Row className="mb-2 ">
           { 
           opcion == 'menu' ? 
           <>
            <Form.Group as={ Col } md="12" className="py-2">
              <div
                className={"contenedor-img"}
              >
                {selectedImage && !isCreate ? (
                  <img src={selectedImage} alt="Imagen seleccionada" />
                ) : (
                  <div className="noFile">
                    <MdCloudUpload className="iconFile" />
                  </div>
                )}
              </div>

              <Form.Label htmlFor='urlImagen'>{'Imagen'}:{" "}</Form.Label>
             <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon3"> https://example.com/users/ </InputGroup.Text>
             <Form.Control  aria-describedby="basic-addon3"
                  placeholder={`Ingrese un url de  imagen`}
                   onChange={handleImageChange}
                   min={2}  max={200}
                   minLength={2} maxLength={200}
                   required  name='urlImagen' id='urlImagen' 
               />
             </InputGroup>
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
           :  
           <>
            <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'nombre'}> {'Nombre'}:{" "} </Form.Label>
            <Form.Control
              type="text" placeholder={`Ingrese un nombre`}
              onChange={handleChange}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'nombre'} id={'nombre'} />
            <Form.Control.Feedback type="invalid"> {`Ingrese un nombre`} </Form.Control.Feedback>
          </Form.Group>  

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'email'}> {'Email'}: </Form.Label>
            <Form.Control
              type="email" placeholder={`Ingrese un email`}
              onChange={handleChange}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'email'} id={'email'} />
            <Form.Control.Feedback type="invalid"> {`Ingrese un email `} </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'contraseña'}>{'Contraseña'}: </Form.Label>
            <Form.Control
              type="password" placeholder={`Ingrese una contraseña`}
              onChange={handleChange}
              min={2} max={10} minLength={2} maxLength={10}
              required name={'contraseña'} id={'contraseña'}
            />
            <Form.Control.Feedback type="invalid">{`Ingrese una contraseña `}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'estado'}>{'Estado'}:{" "} </Form.Label>
            <Form.Select
              required name={'estado'} id={'estado'}
              onChange={handleChange}  >
              <option value="" readOnly disabled selected > Seleccione una Opcion </option>
              {
               responseEstados.map((res) => {
                    return  <option key={res._id} value={res._id}> {res.nombre} </option>
                    })
              }
            </Form.Select>
            <Form.Control.Feedback type="invalid"> {`seleccione un estado`} </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'rol'}>{'Rol'}:{" "} </Form.Label>
            <Form.Select
              required name={'rol'} id={'rol'}
              onChange={handleChange}  >
              <option value="" readOnly disabled selected> Seleccione una Opcion </option>
                {
                 responseRoles.map((res) => {
                    return <option key={res._id} value={res._id}>{res.rol}</option>
                })
              }
            </Form.Select>
            <Form.Control.Feedback type="invalid"> {`Seleccione un rol`} </Form.Control.Feedback>
          </Form.Group>
         </>
           }
            <div className="contendor-btn">
            <button className='btnConfirmar' type="Submit">{opcion == 'menu' ? "Guardar Menú" : "Guardar Usuario" }</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>
        </Row>
    </Form>
);
}
export default Formulario; 