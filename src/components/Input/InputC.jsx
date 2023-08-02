import {Form  }from 'react-bootstrap';
function InputC (props) {
    return(
        <>
        <Form.Control className="prueba" maxLength={30} minLength={2} max={17} min={2}  type={props.tipo} placeholder={props.placeholder} required={props.tipo == "number" ? false : true} />
        {
            props.tipo == "number" ? "" :   <Form.Control.Feedback type="invalid"> {props.placeholder}</Form.Control.Feedback>
        }
       
        </>
    )
}

export default InputC