import { useEffect, useState } from 'react';
import './input.css'; 
import {Form  , Col  }from 'react-bootstrap';
import {MdCloudUpload} from 'react-icons/md'
function Input({texto,readOnly , isCreate }){
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

    return(
        <>
          {
            texto == 'Imagen' ? 
            <>
              <Form.Group as={Col}  md="12" className='py-2' >
            <div className='contenedor-img'>
              {
                selectedImage && !isCreate?  <img src={selectedImage} alt="Imagen seleccionada"   />
                :
                <div className='noFile'>
                <MdCloudUpload className='iconFile'/>
                </div>
              }
            </div>
            <Form.Label column sm="3">{texto}: </Form.Label>
            <Form.Control type='file'  placeholder= {`Ingrese un/a ${texto}`}   onChange={handleImageChange}  min={2}  max={200}  minLength={2} maxLength={200}   required  name={texto} />
            <Form.Control.Feedback type="invalid" > {`Ingrese una ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            :  texto == 'Email' ?
            <>
            <Form.Group as={Col}  md="6"  className='py-2'>
            <Form.Label column sm="3">{texto}: </Form.Label>
            <Form.Control  type='email' readOnly={readOnly} name={texto}  placeholder= {`Ingrese un/a ${texto}`}    min={2}  max={200}  minLength={2} maxLength={200}  required />
            <Form.Control.Feedback type="invalid" > {`Ingrese un ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            :  texto == 'Estado'  ||  texto == 'Rol' ? 
            <>
            <Form.Group as={Col}  md="6"  className='py-2'>
             <Form.Label column sm="3">{texto}: </Form.Label>
                <Form.Select  required name={texto} >
                  <option value="" readOnly disabled selected >Seleccione una Opcion</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </Form.Select>
                 <Form.Control.Feedback type="invalid" > {`Ingrese una ${texto}`}</Form.Control.Feedback>
              </Form.Group>

            </>
            : texto == 'Publicado' || texto == 'Combo' ||  texto == 'Descuento'?
            <>
            <Form.Group as={Col}  md="6"  className='py-2'> 
            <Form.Label column sm="3">{texto}: </Form.Label>
             <Form.Check  type="switch" id="custom-switch"  required={texto == 'Publicado' ? true: false} name={texto} />
             <Form.Control.Feedback type="invalid" > {`Ingrese un ${texto}`}</Form.Control.Feedback>
             </Form.Group>
             </>
            : texto == 'Contraseña' ?
            <>
             <Form.Group as={Col}  md="6"  className='py-2'>
            <Form.Label column sm="3">{texto}: </Form.Label>
             <Form.Control  type='password' placeholder= {`Ingrese un/a ${texto}`} readOnly={readOnly} name={texto}  min={2}  max={10}  minLength={2} maxLength={10}    required/>
             <Form.Control.Feedback type="invalid"  > {`Ingrese una ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            : texto == 'Porcentaje' ?
            <>
             <Form.Group as={Col}  md="6"  className='py-2'>
            <Form.Label >{texto}: </Form.Label>
             <Form.Control  type='number' placeholder= {`Ingrese un/a ${texto}`} readOnly={readOnly}  name={texto} min={0}  max={100}   required />
             <Form.Control.Feedback type="invalid" > {`Ingrese un/a ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            : texto == 'Detalle'?
            <> 
            <Form.Group as={Col}  md="6">
            <Form.Label >{texto}: </Form.Label>
            <Form.Control  as="textarea"
              name={texto}
              cols="30"
              rows="3"
              minLength={2}
              maxLength={500}
              required
            ></Form.Control>{" "}
            <Form.Control.Feedback type="invalid"> {`Ingrese un/a ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            :
            <>
            <Form.Group as={Col}  md="6"  className='py-2'>
            <Form.Label >{texto}: </Form.Label>
             <Form.Control  type='text' placeholder= {`Ingrese un/a ${texto}`} readOnly={readOnly}  name={texto} min={2}  max={200}  minLength={2} maxLength={200}   required />
             <Form.Control.Feedback type="invalid" > {`Ingrese un/a ${texto}`}</Form.Control.Feedback>
            </Form.Group>
            </>
            }

      </>
    );
}
export default Input;