import './Formulario.css'; 
import { Button, Form, Row } from "react-bootstrap";

function FormularioEliminar({handleShow,idItem , isRemoving }){ 
    const eliminar = ()=>{

    }

return(
    <Form   onSubmit={eliminar}>
          <Row className="mb-2 ">
            <>
            <div className="contendor-btn">
            {
                    isRemoving ? <p>{idItem}</p>
                  : null
            }
            <Button className='btnConfirmar' type="button" >Confirmar</Button>
             <Button type="button" className='btnCancelar'onClick={handleShow } > Cancelar </Button>
            </div>
            </>
        
        </Row>
    </Form>
);
}
export default FormularioEliminar; 