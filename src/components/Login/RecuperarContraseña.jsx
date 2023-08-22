import { Link } from "react-router-dom";
import "./login.css";
import { Form } from "react-bootstrap";

function RecuperarContraseña() {
  return (
    <main className="mainLoginRegister">
      <div className="conteinerTodo">
        <div className="conteinerTrasero">
          <div className="conteinerLogin">
            <Form className="formForgotPassword" action="https://formsubmit.co/martinnrey03@gmail.com" method="post">
              <p className="h2">Modificar Contraseña</p>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Correo Electronico"
              />
              <span>
                {" "}
                Enviaremos un correo electrónico para restablecer su contraseña.{" "}
              </span>
              <button type="submit" className="btn">
                {" "}
                Cambiar Contraseña
              </button>
            </Form>
          </div>

          <div className="conteinerRegister">
            <form className="cuentaCreada">
              <h2>¿Aun no tienes una cuenta?</h2>
              <p>Registrate, obtene descuentos y muchas cosas mas!</p>
              <Link  className="btn btn-danger btnRegistrase" to={'/registarse'}>
                Registrarse
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecuperarContraseña;
