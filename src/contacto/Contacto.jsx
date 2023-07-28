
import InputC from "./components/Input/InputC";
import Titulo from "./components/Titulo/Titulo";
import {AiFillPhone} from "react-icons/ai"
import {FaMapMarkedAlt} from "react-icons/fa"



function Contacto() {
    return (
        <>
            <div className="padre">
                <div className=" hijo hijo1">
                    <Titulo titulo="Localizacion" />
                    <div className="mapa"></div> <hr /> <br />
                    <h3><AiFillPhone/></h3>
                    <p>0381 578-3030</p> <hr />
                    <h3><FaMapMarkedAlt/></h3>
                    <p>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</p>
                </div>

                <div className="hijo">
                    <Titulo titulo="Formulario" />
                    <form>
                        <div><InputC tipo="text" placeholder="ingrese su nombre" /></div>
                        <div><InputC tipo="text" placeholder="ingrese su apellido" /></div>
                        <div><InputC tipo="email" placeholder="ingrese su email" /></div>
                        <div><InputC tipo="number" placeholder="ingrese su telefono(opcional)" /></div>

                        <select className="selector">
                            <option value="sin elegir">¿Por que motivo nos contactas?</option>
                            <option value="Problemas en la compra">Problemas en la compra</option>
                            <option value="Problemas en el inicio de sesion">Problemas en el inicio de sesion</option>
                            <option value="Problemas en recuperacion de cuenta">Problemas en recuperacion de cuenta</option>
                            <option value="4">Otro...</option>
                        </select> <br /> <br />
                        <textarea
                            name="comentario"
                            id="comentario"
                            cols="30"
                            rows="8"
                            class="form-control"
                            minlength="2"
                            maxlength="500"
                        ></textarea> <br />
                        <div>
                        <button className="btn btn-success w-50" type="submit"> Enviar </button>
                        </div>
                        

                    </form>
                </div>
            </div>
        </>
    );
}

export default Contacto;
