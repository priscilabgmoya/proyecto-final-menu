import { Button, Col, Container, Row,Form ,Nav} from 'react-bootstrap';
import './PerfilUsuario.css';
import { GrLogout } from 'react-icons/gr';
import {RiAccountPinCircleLine} from 'react-icons/ri';
import { useLogin } from '../../context/LoginContext';
import { useEffect, useState } from 'react';
import { buscarUsuario, modificarUsuarioNoAdmin } from '../../api/adminUsuario';

function PerfilUsuario() {
    const {user, logout} = useLogin(); 
    const [validated, setValidated] = useState(false);
    const [objeto, setObjeto] = useState({});
    const[isEditing, setIsEditing] = useState(false)
    const cerrarSesion = () => {
        logout()
      }
      const handleShowInput = () => setIsEditing(!isEditing);
      const handleChange = (e) => {
        e.preventDefault();
        setObjeto({
            ...objeto, [e.target.name]: e.target.value
        })
    }
    const modificarCuenta = async (e)=>{
        const form = e.currentTarget;
           if (form.checkValidity() === false) {
             e.preventDefault();
             e.stopPropagation();
             setValidated(true);
           }else {
               e.preventDefault(); 
               console.log(objeto); 
               await modificarUsuarioNoAdmin(objeto); 
               await obtenerDatos(user.usuario.id); 
           }
       }
       const  obtenerDatos = async (id) => {
          const usuario =  await buscarUsuario(id); 
        setObjeto(usuario);
        }
    
      useEffect(() => {
        obtenerDatos(user.usuario.id)
      }, []);

    return(
        <Container >
            <Row className='my-2 contenedorPerfilUsuario'>
                <Col xl={4} md={4} lg={4} sm={6} >
                <div className='iconAccount'><RiAccountPinCircleLine /></div>
                <h3 className="textoPerfil">{`Hola !`} <br/>{`${user?.usuario.nombre}`}</h3>
                <Nav  variant="tabs" defaultActiveKey="/home" className='contenedorItemas' >
      <Nav.Item>
        <Button  className="btnLogOut" >Modificar Perfil</Button>
      </Nav.Item>
      <Nav.Item>
                <Button className="btnLogOut"onClick={cerrarSesion} ><GrLogout/> Cerrar Sesion </Button>
      </Nav.Item>
    </Nav>
                </Col>
                <Col xl={6} md={6} lg={6} sm={6} >

                <Form  noValidate validated={validated}  onSubmit={modificarCuenta }>
                        <h2 className="textoPerfil" >Modificar Datos Personales</h2>
                        <Row className="mb-1 ">
                        <Form.Group  as={Col}  md="12"  className='py-1'>
                        <Form.Control type="text" name="nombre" id="name" value={objeto.nombre} placeholder='nombre' disabled={isEditing ? false : true} onChange={handleChange}  required minLength={1} maxLength={50} min={1} max={50} />
                         <Form.Control.Feedback type='invalid'>Ingrese un Nombre </Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group  as={Col}  md="12"  className='py-1'>
                         <Form.Control type="email" name="email" id="users" value={objeto.email} placeholder='Correo' onChange={handleChange}  disabled={isEditing ? false : true} required minLength={1} maxLength={50} min={1} max={50} />
                         <Form.Control.Feedback type='invalid'>Ingrese un Correo </Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group  as={Col}  md="12"  className='py-1'>
                         <Form.Control type="password" name="contraseñaActual" id="password" placeholder='Contraseña Actual' onChange={handleChange} disabled={isEditing ? false : true} required min={1} max={10} minLength={6} maxLength={10} />
                         <Form.Control.Feedback type='invalid'>Ingrese una Contraseña</Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group  as={Col}  md="12"  className='py-1'>
                         <Form.Control type="password" name="contraseña" id="password" placeholder='Contraseña Nueva ' onChange={handleChange} disabled={isEditing ? false : true} required min={1} max={10} minLength={6} maxLength={10} />
                         <Form.Control.Feedback type='invalid'>Ingrese una Contraseña</Form.Control.Feedback>
                         </Form.Group>
                        </Row>
                        <div className='contenedorBoton'> 
                        {
                          isEditing ?   <Button type='submit' className={ 'btnGuardarPerfil'  } > {'Guardar Modificacion'}</Button> 
                          :
                          <Button type='button' className={'btnEditarPerfil' } onClick={handleShowInput}> {'Editar Perfil'}</Button>
                        }
                        </div>
                    </Form> 
              
                </Col>

            </Row>

        </Container>
    ); 
}

export default PerfilUsuario;