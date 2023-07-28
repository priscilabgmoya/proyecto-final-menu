import { useState } from 'react';
import './login.css'

const Register = () => {
    
    const [animation, setAnimation] = useState('')
    const crearCuenta =(e)=>{
        e.preventDefault();
        console.log('hola')
        setAnimation
        (
            <div className='checkAccount'>
                <h1>Cuenta Creada con exito</h1>
                
            </div>
        )
        
        

    }
    return (

        <>
        
            <div className='conteinerTrasero2' >

                <div className='conteinerLogin'>
                    <form onSubmit={crearCuenta}>
                        <h2>Registrarse</h2>
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
                {animation}

            </div>
        </>
    );

}

export default Register;