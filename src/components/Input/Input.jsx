import { useState } from 'react';
import './input.css'; 
import {Form , Row , Col  }from 'react-bootstrap';
import {MdCloudUpload} from 'react-icons/md'
function Input({texto, register,readOnly , isCreate}){
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
    return(
        <Form.Group  as={Row} className="mb-3" >
          {
            texto == 'Imagen' ? 
            <>
            <div className='contenedor-img'>
              {
                selectedImage && !isCreate?  <img src={selectedImage} alt="Imagen seleccionada" />
                :
                <div className='noFile'>
                <MdCloudUpload className='iconFile'/>
                </div>
              }
            </div>
            <Form.Label column sm="3">{texto}: </Form.Label>
             <Col sm="9">
            <input type='file' {...register}  placeholder= {`Ingrese su ${texto}`}   onChange={handleImageChange}        />
            </Col>
            </>
            :  texto == 'Email' ?
            <>
            <Form.Label column sm="3">{texto}: </Form.Label>
            <Col sm="9">
            <Form.Control  type='email' disabled={readOnly}  placeholder= {`Ingrese su ${texto}`}   {...register}/>
            </Col>
            </>
            :  texto == 'Estado'  ||  texto == 'Rol' ? 
            <>
             <Form.Label column sm="3">{texto}: </Form.Label>
            <Col sm="9">
                <Form.Select  {...register}>
                  <option disabled selected>Seleccione una Opcion</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </Form.Select>
                 </Col>
            </>
            : texto == 'Publicado' || texto == 'Combo'?
            <>
            <Form.Label column sm="3">{texto}: </Form.Label>
            <Col sm="9"> 
             <Form.Check  {...register} type="switch" id="custom-switch" />
             </Col>
             </>
            : texto == 'Password' ?
            <>
            <Form.Label column sm="3">{texto}: </Form.Label>
             <Col sm="9">
             <Form.Control  type='password' placeholder= {`Ingrese su ${texto}`} disabled={readOnly}  {...register}/>
            </Col>
            </>
            :
            <>
            <Form.Label column sm="3">{texto}: </Form.Label>
             <Col sm="9">
             <Form.Control  type='text' placeholder= {`Ingrese su ${texto}`} disabled={readOnly}  {...register}/>
            </Col>
            </>
            }

      </Form.Group>
    );
}
export default Input;