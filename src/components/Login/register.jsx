import { useState ,useEffect} from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { Button, Form , Row, Col } from 'react-bootstrap';
import { crearNuevoUsuario } from '../../api/register';
import { useLogin } from '../../context/LoginContext';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
       nombre: "", 
        email: "",
        contraseña: "",
        rol: "64cbba69610ffdd35dafa457", 
        estado: "64cd7db92a13bbf308f05c84"
    })
    const {user, isAuthenticated } = useLogin();
    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        if (isAuthenticated && user.usuario.rol == "usuario")navigate('/login'); 
    },[isAuthenticated])
    const crearCuenta = async (e)=>{
     const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          setValidated(true);
        }else {
            e.preventDefault();
            
          await crearNuevoUsuario(form, values); 
        }
    }
    return (

        <main className='mainLoginRegister'>
        <div className='conteinerTodo'>
            <div className='conteinerTrasero' >
                <div className='conteinerLogin'>
                    <Form  noValidate validated={validated}  onSubmit={crearCuenta}>
                        <h2>Registrarse</h2>
                        <Row className="mb-1 ">
                        <Form.Group  as={Col}  md="12"  className='py-1'>
                        <Form.Control type="text" name="nombre" id="name" placeholder='nombre' onChange={handleChange}  required minLength={1} maxLength={50} min={1} max={50} />
                         <Form.Control.Feedback type='invalid'>Ingrese un Nombre </Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group  as={Col}  md="12"  className='py-1'>
                         <Form.Control type="email" name="email" id="users" placeholder='Correo' onChange={handleChange}  required minLength={1} maxLength={50} min={1} max={50} />
                         <Form.Control.Feedback type='invalid'>Ingrese un Correo </Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group  as={Col}  md="12"  className='py-1'>
                         <Form.Control type="password" name="contraseña" id="password" placeholder='Contraseña' onChange={handleChange}  required min={1} max={10} minLength={6} maxLength={10} />
                         <Form.Control.Feedback type='invalid'>Ingrese una Contraseña</Form.Control.Feedback>
                         </Form.Group>
                        </Row>
                        <Button type='submit' className='btn'> Crear Cuenta</Button>
                    </Form>
                </div>

                <div className="conteinerRegister">
                    <div className='cuentaCreada' >
                        <h2>¿Ya tienes cuenta?</h2>
                        <p>Inicia Sesion y disfruta de nuestros servicios</p>
                        <Link  to={'/login'} className='btnRegistrase'>Iniciar Sesion</Link>
                    </div>
                </div>


            </div>
        </div>
        </main>
    );

}

export default Register;