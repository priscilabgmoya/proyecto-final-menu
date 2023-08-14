import { useEffect, useState } from "react";
import "./input.css";
import { Form, Col } from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";
import { obtenerEstadoUsuarios } from "../../api/estadoUsuario";
import { obtenerRolUsuarios } from "../../api/rolUsuario";
function Input({ texto, readOnly, isCreate, values, changeEvent }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseEstados, setResponseEstados] = useState([]);
  const [responseRoles, setResponseRoles] = useState([]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    changeEvent(event);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  const ObtenerEstados = async () => {
    const res = await obtenerEstadoUsuarios();
    setResponseEstados(res);
  };
  const ObtenerRoles = async () => {
    const res = await obtenerRolUsuarios();
    setResponseRoles(res);
  };
  useEffect(() => {
    ObtenerEstados();
    ObtenerRoles();
  }, []);

  return (
    <>
      {texto == "Imagen" ? (
        <>
          <Form.Group as={Col} md="12" className="py-2">
            <div className={values ? "contendor-update" : null}>
              <div className={values ? "contenedor-img-update" : null}>
                <img src={values} alt="Imagen seleccionada" />
              </div>
              <div
                className={values ? "contenedor-img-update" : "contenedor-img"}
              >
                {selectedImage && !isCreate ? (
                  <img src={selectedImage} alt="Imagen seleccionada" />
                ) : (
                  <div className="noFile">
                    <MdCloudUpload className="iconFile" />
                  </div>
                )}
              </div>
            </div>
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}>
              {texto}:{" "}
            </Form.Label>
            <Form.Control
              type="file"
              placeholder={`Ingrese un/a ${capitalizeFirstLetter(texto)}`}
              onChange={handleImageChange}
              min={2}
              max={200}
              minLength={2}
              maxLength={200}
              required
              name={capitalizeFirstLetter(texto)}
              id={capitalizeFirstLetter(texto)}
            />
            <Form.Control.Feedback type="invalid">
              {" "}
              {`Ingrese una ${texto}`}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Email" ? (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}> {texto}: </Form.Label>
            <Form.Control
              type="email" placeholder={`Ingrese un/a ${capitalizeFirstLetter(texto)}`}
              onChange={changeEvent}
              min={2} max={200} minLength={2} maxLength={200}
              required name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}
              />
            <Form.Control.Feedback type="invalid"> {`Ingrese un ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Estado" || texto == "Rol" ? (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}>{texto}:{" "} </Form.Label>
            <Form.Select
              required name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}
              onChange={changeEvent}  >
              <option value="" readOnly disabled selected={values ? false : true} > Seleccione una Opcion </option>
              {texto == "Estado"
                ? responseEstados.map((res) => {
                    return values == res.nombre ? (
                      <option key={res._id} value={res._id} selected> {res.nombre} </option>
                    ) : (
                      <option key={res._id} value={res._id}> {res.nombre} </option>
                    );
                  })
                : texto == "Rol"
                ? responseRoles.map((res) => {
                    return values == res.rol ? (
                      <option key={res._id} value={res._id} selected>{res.rol} </option>
                    ) : (
                      <option key={res._id} value={res._id}>{res.rol}</option>
                    );
                  })
                : null}
            </Form.Select>
            <Form.Control.Feedback type="invalid"> {`Ingrese una ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Publicado" || texto == "Combo" || texto == "Descuento" ? (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}>{texto}:{" "}</Form.Label>
            <Form.Check
              type="switch" required
              onChange={changeEvent}
              name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}/>
            <Form.Control.Feedback type="invalid"> {`Ingrese un ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Contraseña" ? (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={texto}>{texto}: </Form.Label>
            <Form.Control
              type="password" placeholder={`Ingrese una ${texto}`}
              onChange={changeEvent}
              min={2} max={10} minLength={2} maxLength={10}
              required name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}
            />
            <Form.Control.Feedback type="invalid">{`Ingrese una ${texto}`}</Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Porcentaje" ? (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}>{texto}:{" "}</Form.Label>
            <Form.Control
              type="number" placeholder={`Ingrese un/a ${capitalizeFirstLetter(texto)}`}
              onChange={changeEvent}
              min={0} max={100}
              required name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}
            />
            <Form.Control.Feedback type="invalid"> {`Ingrese un/a ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : texto == "Detalle" ? (
        <>
          <Form.Group as={Col} md="6">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}>{texto}:{" "}</Form.Label>
            <Form.Control as="textarea"
              onChange={changeEvent}
              cols="30" rows="3"
              minLength={2} maxLength={500}
              required name={capitalizeFirstLetter(texto)}
            ></Form.Control>{" "}
            <Form.Control.Feedback type="invalid">{`Ingrese un/a ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      ) : (
        <>
          <Form.Group as={Col} md="6" className="py-2">
            <Form.Label htmlFor={capitalizeFirstLetter(texto)}> {texto}:{" "} </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Ingrese un/a ${capitalizeFirstLetter(texto)}`}
              onChange={changeEvent}
              min={2} max={200} minLength={2} maxLength={200}
              required name={capitalizeFirstLetter(texto)} id={capitalizeFirstLetter(texto)}
            />
            <Form.Control.Feedback type="invalid"> {`Ingrese un/a ${texto}`} </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
    </>
  );
}
export default Input;
