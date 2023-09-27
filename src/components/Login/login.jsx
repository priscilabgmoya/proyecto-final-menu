import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { Form , Button, Col, Row} from 'react-bootstrap';
import { loginUsuario } from '../../api/login';
import { useLogin } from '../../context/LoginContext';


const Login = () => {
    const {login , user, isAuthenticated } = useLogin();
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        email: "",
        contraseña: ""
    })
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated && user.usuario.rol["rol"] == "usuario")navigate('/');
        if (isAuthenticated && user.usuario.rol["rol"] == "administrador")  navigate('/administracionMenu'); 
        if (isAuthenticated && user.usuario.rol["rol"] == "superAdmin") console.log("adios");
    },[isAuthenticated])

    const iniciarSesion = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          setValidated(true);
        }else {
            e.preventDefault();
            login(form, values)
        }
}
    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    return (<>

        <main className='mainLoginRegister'>
            <div className='conteinerTodo'>
                <div className='conteinerTrasero'>
                <div className='conteinerDiv'>
                <div className="conteinerLogin">
                <Form  noValidate validated={validated}  onSubmit={iniciarSesion}>
                <p className='h2'>Iniciar Sesion</p>
                <Row className="mb-1 ">
                <Form.Group  as={Col}  md="12"  className='py-1'>
                <Form.Control type="email" name="email" id="users" placeholder='Correo' onChange={handleChange}  required minLength={1} maxLength={50} min={1} max={50} />
                <Form.Control.Feedback type='invalid'>Ingrese un correo </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  as={Col}  md="12"  className='py-1'>
                <Form.Control type="password" name="contraseña" id="password" placeholder='Contraseña' onChange={handleChange}  required min={1} max={10} minLength={6} maxLength={10} />
                <Form.Control.Feedback type='invalid'>Ingrese una contraseña</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Button type='submit' className='btn'> Ingresar</Button>
                </Form>
                </div>

                            <div className='conteinerForgotPassword'>
                                <div className='formForgotPassword'>
                                    <Link  className='forgotPassword'  to={'/recuperarContrasena'}>  ¿Olvidaste tu Contraseña?</Link>
                                </div>
                            </div>
                        </div>
            
                        <div className="conteinerRegister">
                            <div className='cuentaCreada'>
                                <h2>¿Aun no tienes una cuenta?</h2>
                                <p>Registrate, obtene descuentos y muchas cosas mas!</p>
                                <Link  className='btn btn-danger btnRegistrase' to={'/registarse'}>Registrarse</Link>
                            </div>
                        </div>

           
              
                </div>

            </div>
        </main>
    </>);


}

export default Login;
