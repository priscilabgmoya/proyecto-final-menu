import { eliminarMenu } from '../../api/adminMenu';
import { eliminarPedido } from '../../api/adminPedidos';
import { eliminarUsuario } from '../../api/adminUsuario';
import { useLogin } from '../../context/LoginContext';
import './Formulario.css'; 
import { Button, Form, Row } from "react-bootstrap";

function FormularioEliminar({handleShow,idItem , opcion }){ 
    const {cargarMenu ,cargarUsuarios , cargarPedidos} = useLogin();

    const deleteApi = async (opciones, id) => {
        switch(opciones){
            case 'menu':
                await eliminarMenu(id);
                cargarMenu()
            break;
            case 'usuario':
                let usuario = {
                    id: id,
                    estado:"64cd7df42a13bbf308f05c85"
                }
           await eliminarUsuario(usuario); 
           cargarUsuarios()
            break;
            case 'pedido':
                
                let pedido = {
                    id: id,
                    estado: '64dc4dc75b364e575a454c24'
                }
            await eliminarPedido(pedido);
            cargarPedidos()
            break;
        }
    }


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