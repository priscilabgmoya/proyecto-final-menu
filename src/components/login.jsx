import { useState } from 'react';
import './login.css'
import Register from './register'


const Login = ({ setUser }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        email: "",
        password: ""

    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email == '' || password == '') {
            setError(true)
            return
        }

        setError(false)
        setUser([user])
    }

    const crearCuenta = (e) => {
        e.preventDefault();

        if (users == '' || password == '') {
            setError(true)
            return
        }
        setError(false)
        setUser([users])
    }

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    //Cambiar entre Login y Register

    const [register, setRegister] = useState('')
    const [login, setLogin] = useState(

        <div className="conteinerLogin">
            <form>

                <h2>Iniciar Sesion</h2>
                <input type="text" name="users" id="users" placeholder='Usuario' />
                <input type="password" name="password" id="password" placeholder='Contraseña' />
                <button type='submit' className='btn'> Entrar</button>
                {error && <p> <b> Todos los Campos son Obligatorios </b> </p>}

            </form>
        </div>
    )

    //Funcion para Cambiar a register
    const cambiarRegister = (e) => {
        e.preventDefault();

        setRegister(
            <Register />
        )
        setLogin('')
        setNewPassword('')
        setError(false)

    }

    //Funcion para cambiar a Login
    const cambiarLogin = (e) => {
        e.preventDefault();
        setLogin(
            <Login />
        )
        setRegister('')
        setError(false)
    }

    //funion para cambiar contraseña
    const [newPassword, setNewPassword] = useState()
    const cambiarContraseña = () => {
        setNewPassword(

            <div className="conteinerTrasero2">

                <div className='conteinerLogin'>
                    <form className='formForgotPassword' >

                        <h2>Modificar Contraseña</h2>
                        <input type="text" name="email" id="email" placeholder='Correo Electronico' />
                        <span>  Enviaremos un correo electrónico para restablecer su contraseña. </span>
                        <button type='submit' className='btn'> Cambiar Contraseña</button>
                    </form>
                </div>

                <div className="conteinerRegister">
                    <form className='cuentaCreada' onSubmit={cambiarRegister}>
                        <h2>¿Aun no tienes una cuenta?</h2>
                        <p>Registrate, obtene descuentos y muchas cosas mas!</p>
                        <button type='submit' className='btn'>Registrarse</button>
                    </form>
                </div>
            </div>
        )

        setLogin('')

    }
    return (<>

        <main>
            <div className='conteinerTodo'>

                <div className='conteinerTrasero'>

                    {login &&
                        <div className='conteinerDiv'>
                            <div className="conteinerLogin">
                                <form onSubmit={handleSubmit} >

                                    <h2>Iniciar Sesion</h2>
                                    {error && <p> <b> Todos los Campos son Obligatorios </b> </p>}
                                    <input type="email" name="email" id="email" placeholder='Correo Electronico' onChange={e => setEmail(e.target.value)} />
                                    <input type="password" name="password" id="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} />
                                    <button type='submit' className='btn'> Entrar</button>

                                </form>
                            </div>

                            <div className='conteinerForgotPassword'>
                                <form className='formForgotPassword' onSubmit={cambiarContraseña}>
                                    <button type='submit' className='forgotPassword'> ¿Olvidaste tu Contraseña?</button>
                                </form>
                            </div>
                        </div>
                    }
                    {newPassword}

                    {login &&
                        <div className="conteinerRegister">
                            <form className='cuentaCreada' onSubmit={cambiarRegister}>
                                <h2>¿Aun no tienes una cuenta?</h2>
                                <p>Registrate, obtene descuentos y muchas cosas mas!</p>
                                <button type='submit' className='btn'>Registrarse</button>
                            </form>
                        </div>

                    }
                    {register &&
                        <div className='conteinerTrasero2' >

                            <div className='conteinerLogin'>
                                <form onSubmit={crearCuenta}>
                                    <h2>Registrarse</h2>
                                    {/* {error && <p> <b> Todos los Campos son Obligatorios </b> </p>} */}
                                    <input type="text" name="name" id="name" placeholder='Nombre y Apellido' />
                                    <input type="text" name="email" id="email" placeholder='Correo Electronico' />
                                    <input type="text" name='users' id='users' placeholder='Usuario' />
                                    <input type="password" name="password" id="password" placeholder='Contraseña' />
                                    <input type="password" name="new-password" id="new-password" placeholder='Confirmar Contraseña' />
                                    <input type="number" name="" id="cel" placeholder='Celular' />

                                    <button type='submit' className='btn'> Crear Cuenta</button>
                                    

                                </form>

                            </div>

                            <div className="conteinerRegister">

                                <form className='cuentaCreada' onSubmit={cambiarLogin}>
                                    <h2>¿Ya tienes cuenta?</h2>
                                    <p>Inicia Sesion y disfruta de nuestros servicios</p>
                                    <button type='submit' className='btn'>Iniciar Sesion</button>
                                </form>
                            </div>
                        </div>}
                </div>

            </div>
        </main>
    </>);


}

export default Login;
