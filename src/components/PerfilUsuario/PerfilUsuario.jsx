import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./PerfilUsuario.css"

function PerfilUsuario() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-color'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modificacion de usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='mt-3'>
                        <label htmlFor="usuario">nombre</label> <br />
                        <input className='input-usuario' type="text" id='usuario' />
                    </div> 
                    <div className='mt-3'> 
                        <label htmlFor="correo">correo electronico</label> <br />
                        <input className='input-usuario' type="email"  id='correo' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="contraseña">contraseña</label> <br />
                        <input className='input-usuario' type="text" id='contraseña' />
                    </div> 
                    <div className='mt-3'>
                        <label htmlFor="recuperar">cambiar contraseña</label> <br />
                        <input className='input-usuario' type="text"  id="recuperar" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary">guardar cambios</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PerfilUsuario;