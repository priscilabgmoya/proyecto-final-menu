import { deleteApi } from '../../helpers/helpApi';
import './Formulario.css'; 
import { Button, Form, Row } from "react-bootstrap";

function FormularioEliminar({handleShow,idItem , opcion }){ 
    
    const eliminar = (event)=>{
        event.preventDefault();
        deleteApi(opcion,idItem) 
        handleShow();
    }

return(
    <Form   onSubmit={eliminar}>
          <Row className="mb-2 ">
            <>
            <div className="contendor-btn">
            <Button className='btnConfirmar' type="submit" >Confirmar</Button>
             <Button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </Button>
            </div>
            </>
        
        </Row>
    </Form>
);
}
export default FormularioEliminar; 