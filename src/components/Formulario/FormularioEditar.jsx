import { useEffect } from "react";
import './Formulario.css'; 
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Form, Row, Col,InputGroup } from "react-bootstrap";
import { ObtenerEstados, ObtenerEstadosPedidos, ObtenerRoles } from "../../helpers/helpApi";
import { buscarMenuAdmin, modificarMenu } from "../../api/adminMenu";
import { buscarUsuarioAdmin, modificarUsuario } from "../../api/adminUsuario";
import { buscarPedidoAdmin, modificarPedido } from "../../api/adminPedidos";
import { useLogin } from '../../context/LoginContext';
function FormularioEditar({handleShow, idItem , opcion }){ 
  const {cargarMenu ,cargarUsuarios , cargarPedidos} = useLogin();
    const [validated, setValidated] = useState(false);
    const [isCreate, setIsCreate ] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [responseEstados, setResponseEstados] = useState([]);
    const [responseRoles, setResponseRoles] = useState([]);
    const [responsePedidos , setResponsePedidos] = useState([]); 
    const [objeto , setObjeto] = useState({});


    const handleChange =(event) => {
        setObjeto({...objeto, [event.target.name]: event.target.value});
    }
    const handleImageChange = (event) => {
      setSelectedImage(event.target.value);
      setObjeto({...objeto, [event.target.name]: event.target.value }); 
    };
    const  obtenerDatos = async (opciones, id) => {
      switch(opciones){
          case 'menu':
         const menu =  await buscarMenuAdmin(id);
        setObjeto(menu);
          break;
          case 'usuario':
        const usuario =  await buscarUsuarioAdmin(id); 
        setObjeto(usuario);
          break;
          case 'pedido':
         const pedido =  await buscarPedidoAdmin(id);
         setObjeto(pedido)
          break;
      }
  }
    useEffect(() => {
      obtenerDatos(opcion,idItem)
    }, []);

      useEffect(() => {
        ObtenerEstados(setResponseEstados);
        ObtenerRoles(setResponseRoles);
        ObtenerEstadosPedidos(setResponsePedidos);
      }, [opcion]);

      const updateApi = async (informacion , id ,opciones ) => {
        switch(opciones){
          case 'menu':
           await modificarMenu(id,informacion);
           setIsCreate(true)
           handleShow();
           cargarMenu();
          break;
          case 'usuario':
            const { estado, rol, ...objetocopia} = informacion; 
            let usuarioModificado ={
              id : id,
              rol: rol._id ? rol._id : rol ,
              estado: estado._id ? estado._id : estado 
            }
            await modificarUsuario(usuarioModificado); 
            handleShow();
            cargarUsuarios();
          break;
          case 'pedido':
            const estadoPedido = informacion.estado;
            let pedidoModificado ={
              id : id,
              estado: estadoPedido._id ? estadoPedido._id : estadoPedido 
            }
          await modificarPedido(pedidoModificado);
         handleShow();
         cargarPedidos();
          break;
      }
      }
    const modificar = (event)=>{
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }else{
            event.preventDefault();
            updateApi(objeto,idItem,opcion);
            form.reset();
        }
 
    }


return(
    <Form  noValidate validated={validated}  onSubmit={modificar}>
          <Row className="mb-2 ">
           { 
           opcion == 'menu' ? 
           <>
            <Form.Group as={Col} md="12" className="py-2">
            <div className={"contendor-update"}>
              <div className={"contenedor-img-update"}>
                <img src={objeto.urlImagen} alt="Imagen seleccionada" />
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
             <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon3"> https://example.com/users/ </InputGroup.Text>
             <Form.Control  aria-describedby="basic-addon3"
                  placeholder={`Ingrese un url de  imagen`}
                   onChange={handleImageChange}
                   min={2}  max={200}
                   minLength={2} maxLength={200}
                   required  name='urlImagen' id='urlImagen' 
                    value={objeto?.urlImagen}
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
               value={objeto?.nombre}
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
               value={objeto?.precio}
              min={2} max={200} minLength={2} maxLength={200}
              required name={'precio'} id={'precio'}/>
            <Form.Control.Feedback type="invalid"> {`Ingrese un precio`} </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={'categoria'}> {'Categoria'}:{" "} </Form.Label>
            <Form.Control
              type="text" placeholder={`Ingrese una categoria`}
              onChange={handleChange}
               value={objeto?.categoria}
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
               value={objeto?.detalle}
              required name={'detalle'}
            ></Form.Control>{" "}
            <Form.Control.Feedback type="invalid">{`Ingrese un detalle`} </Form.Control.Feedback>
          </Form.Group>
    
           </>
           :  opcion == 'usuario' ?
           <>
           <Form.Group as={Col} md="6" className="py-2">
           <Form.Label htmlFor={'nombre'}> {'Nombre'}:{" "} </Form.Label>
           <Form.Control
             type="text" placeholder={`Ingrese un nombre`}
             onChange={handleChange}
              value={objeto?.nombre}
             readOnly
             disabled
             min={2} max={200} minLength={2} maxLength={200}
             required name={'nombre'} id={'nombre'} />
           <Form.Control.Feedback type="invalid"> {`Ingrese un nombre`} </Form.Control.Feedback>
         </Form.Group>  

         <Form.Group as={Col} md="6" className="py-2">
           <Form.Label htmlFor={'email'}> {'Email'}: </Form.Label>
           <Form.Control
             type="email" placeholder={`Ingrese un email`}
             onChange={handleChange}
             readOnly
             disabled
              value={objeto?.email}
             min={2} max={200} minLength={2} maxLength={200}
             required name={'email'} id={'email'} />
           <Form.Control.Feedback type="invalid"> {`Ingrese un email `} </Form.Control.Feedback>
         </Form.Group>

         <Form.Group as={Col} md="6" className="py-2">
           <Form.Label htmlFor={'estado'}>{'Estado'}:{" "} </Form.Label>
           <Form.Select
             required name={'estado'} id={'estado'}
             onChange={handleChange}  >
             <option value="" readOnly disabled  > Seleccione una Opcion </option>
             {
              responseEstados?.map((res) => {
                if (objeto?.estado?._id == res._id){
                  return  <option key={res._id} value={res._id} selected > {res.nombre} </option>
                }
                return  <option key={res._id} value={res._id}  > {res.nombre} </option>
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
             <option value="" readOnly disabled > Seleccione una Opcion </option>
               {
                responseRoles?.map((res) => {
                  if (objeto?.rol?._id == res._id){
                    return <option key={res._id} value={res._id} selected >{res.rol}</option>
                  }
                  return <option key={res._id} value={res._id}  >{res.rol}</option>
               })
             }
           </Form.Select>
           <Form.Control.Feedback type="invalid"> {`Seleccione un rol`} </Form.Control.Feedback>
         </Form.Group>
        </>
           :
           <>
          
         <Form.Group as={Col} md="12" className="py-2">
           <Form.Label htmlFor={'estado'}>{'Estado'}:{" "} </Form.Label>
           <Form.Select
             required name={'estado'} id={'rol'}
             onChange={handleChange}  >
             <option value="" readOnly disabled > Seleccione una Opcion </option>
               {
                responsePedidos?.map((res) => {
                  if (objeto?.estado?._id == res._id){
                    return <option key={res._id} value={res._id} selected >{res.nombre}</option>
                  }
                  return <option key={res._id} value={res._id}  >{res.nombre}</option>
               })
             }
           </Form.Select>
           <Form.Control.Feedback type="invalid"> {`Seleccione un rol`} </Form.Control.Feedback>
         </Form.Group>
           </>
           }
            <div className="contendor-btn">
            <button className='btnConfirmar' type="Submit">{opcion == 'menu' ? "Guardar Menú" : opcion == 'usuario' ? "Guardar Usuario" : "Guardar Pedido"}</button>
             <button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </button>
            </div>

        
        </Row>
    </Form>
);
}
export default FormularioEditar; 