import "./Contacto.css";
import InputC from "../Input/InputC";
import Titulo from "../Titulo/Titulo";
import {Form  }from 'react-bootstrap';
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";

function Contacto() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <>
      <div className="padre">
        <div className=" hijo hijo1">
          <Titulo titulo="Localizacion" />
          <div className="contenedorMapa">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3560.1023706675196!2d-65.2097767!3d-26.8366961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1690822926413!5m2!1ses-419!2sar"
        width="600"
        height="450"
       className="mapa"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
          </div>{" "}
          <hr /> <br />
          <h3>
            <AiFillPhone />
          </h3>
          <p>0381 578-3030</p> <hr />
          <h3>
            <FaMapMarkedAlt />
          </h3>
          <p>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</p>
        </div>

        <div className="hijo">
          <Titulo titulo="Formulario" />
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
            <div className="contendorInput">
              <InputC tipo="text" placeholder="ingrese su nombre" />
            </div>
            <div className="contendorInput">
              <InputC tipo="text" placeholder="ingrese su apellido" />
            </div>
            <div className="contendorInput">
              <InputC tipo="email" placeholder="ingrese su email" />
            </div>
            <div className="contendorInput">
              <InputC
                tipo="number"
                placeholder="ingrese su telefono(opcional)"
              />
            </div>
            <Form.Select  className="selector" required>
              <option value="" selected readOnly >¿Por que motivo nos contactas?</option>
              <option value="Problemas en la compra">
                Problemas en la compra
              </option>
              <option value="Problemas en el inicio de sesion">
                Problemas en el inicio de sesion
              </option>
              <option value="Problemas en recuperacion de cuenta">
                Problemas en recuperacion de cuenta
              </option>
              <option value="4">Otro...</option>
            </Form.Select>{" "}
            <Form.Control.Feedback type="invalid"> Seleccione Un motivo de contacto</Form.Control.Feedback>
            <br /> <br />
            <Form.Control  as="textarea"
              name="comentario"
              id="comentario"
              cols="30"
              rows="5"
              minLength={2}
              maxLength={500}
              required
            ></Form.Control>{" "}
            <br />
            <Form.Control.Feedback type="invalid"> Ingrese un comentario </Form.Control.Feedback>
            <div>
              <button className="btn btn-success w-50" type="submit">
                {" "}
                Enviar{" "}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
