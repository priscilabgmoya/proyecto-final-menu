import { Table, Modal, Row, Col, Pagination, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Formulario from '../Formulario/Formulario';
import './TablaAdministracion.css';
import { obtenerUsuarios } from '../../api/adminUsuario';
import FormularioEditar from '../Formulario/FormularioEditar';
import FormularioEliminar from '../Formulario/FormularioEliminar';
import TbodyMenu from './TbodyMenu';
function TablaAdministracion({ URL_API, cabecera, title, opcion }) {
  const CANT_HOJA = 6;
  const [show, setShow] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [isRemoving, setRemoving] = useState(false);
  const [arrayInformacion, setArrayInformacion] = useState([])
  const [idItem, setIdItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const lastIndex = currentPage * CANT_HOJA;
  const firstIndex = lastIndex - CANT_HOJA;

  const handleShow = (state, idItem) => {
    switch (state) {
      case 'create':
        setEditing(false);
        setRemoving(false);
        setShow(!show);
        break;
      case 'update':
        setEditing(true);
        setRemoving(false);
        setIdItem(idItem);
        setShow(!show);
        break;
      case 'delete':
        setEditing(false);
        setRemoving(true);
        setIdItem(idItem);
        setShow(!show);
        break;
      default:
        setShow(!show);
        break;
    }
  }
  const [totalPages, setTotalPage] = useState(0)

  const calcularTotalPaginas = (array) => {
    const total = array.length
    setTotalPage(Math.ceil(total / CANT_HOJA))
  }

  async function usarGet(opciones) {
    if (opciones == 'usuario') {
      const data = await obtenerUsuarios(URL_API);
      return setArrayInformacion(data)
    }
  }
  const buscar = () => {
    if (searchTerm.length == 0) return usarGet(opcion);
    const filteredResults = arrayInformacion.filter(item =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArrayInformacion(filteredResults);
    setCurrentPage(1);
  }

  useEffect(() => {
    buscar()
  }, [searchTerm])

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <Row >

        {
          opcion != 'pedido' ?
            <>
              <Col xs={4}>
                <Form.Group className='buscador-tabla'>
                  <Form.Label>Buscar:</Form.Label>
                  <Form.Control type="text" value={searchTerm} onChange={handleSearchChange} />
                </Form.Group>
              </Col>
              <Col xs={6} className='title'>
                <h4>{`Administración de ${title}s `}</h4>
              </Col>
              <Col xs={2} className='buttons'>
                <button className='btnNuevoMenu' onClick={() => { handleShow('create') }} ><AiOutlinePlusCircle className='iconsBtn' />{`Nuevo ${title}`}</button>
              </Col>
            </>
            :
            <>
              <Col xs={8} className='title'>
                <h4>{`Administración de ${title}s `}</h4>
              </Col>
              <Col xs={4} className='my-2'>
                <Form.Group className='buscador-tabla'>
                  <Form.Label>Buscar:</Form.Label>
                  <Form.Control type="text" value={searchTerm} onChange={handleSearchChange} />
                </Form.Group>
              </Col>
            </>
        }
      </Row>
      <Row>
        <Table striped responsive>
          <thead >
            <tr>
              {
                cabecera == null ? <th> No se encontro ningún titulo </th> :
                  cabecera.map((titulo, index) => {
                    return <th key={index}>{titulo}</th>
                  })
              }
            </tr>

          </thead>
          <tbody>
            {

              opcion == 'menu' ?
                <TbodyMenu total={calcularTotalPaginas} lastIndex={lastIndex} firstIndex={firstIndex} handleShow={handleShow} />

                : opcion == 'usuario' && arrayInformacion !== null ?
                  arrayInformacion.slice(firstIndex, lastIndex).map(item => {
                    return <tr key={item.uid}>
                      <td>{item.nombre}</td>
                      <td>{item.email}</td>
                      <td key={item.estado._id}>{item.estado.nombre}</td>
                      <td key={item.rol._id}>{item.rol.rol}</td>
                      <td className='contenedor-operaciones'>
                        <button className='btnModificar' onClick={() => { handleShow('update', item) }} ><AiFillEdit className='iconsBtns' /></button>
                        <button className='btnEliminar' onClick={() => { handleShow('delete', item.uid) }}><AiFillDelete className='iconsBtns' /></button>
                      </td>
                    </tr>
                  })
                  :
                  console.log(arrayInformacion)
              /*arrayInformacion.slice(firstIndex, lastIndex).map(item => {
                    return <tr key={item.codigo}>
                        <td>{item.fecha}</td>
                        <td>{item.usuario}</td>
                        <td>{item.menu}</td>
                        <td>{item.estado}</td>
                        <td className='contenedor-operaciones'>
                                <button className='btnModificar' onClick={()=> {handleShow('update' , item)}} ><AiFillEdit  className='iconsBtns'/></button>
                                <button className='btnEliminar' onClick={()=> {handleShow('delete', item.codigo)}}><AiFillDelete  className='iconsBtns'/></button>
                        </td>
                    </tr>
                  })*/
            }
            <th key={new Date()} colSpan={cabecera?.length} className='contenedor-paginacion'>
              <Pagination>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </th>
          </tbody>
          <tfoot colSpan={cabecera?.length} >
          </tfoot>
        </Table>
        <Col xs={8}>
        </Col>
      </Row>
      <Modal show={show} onHide={() => setShow(false)} size={opcion == 'menu' ? "lg" : null} >
        <Modal.Header closeButton>
          <Modal.Title className={isRemoving ? 'title-delete' : 'title-modal'}>{
            isEditing ? `Modificar ${title} Seleccionado`
              : isRemoving ? `¿Desea Eliminar el ${title} Seleccionado?`
                : `Crear Nuevo ${title}`
          }</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body-Formulario'>
          {
            isEditing ?
              <FormularioEditar
                handleShow={handleShow}
                opcion={opcion}
              />
              : isRemoving ?
                <FormularioEliminar
                  handleShow={handleShow}
                  opcion={opcion}
                />
                :
                <Formulario
                  handleShow={handleShow}
                  opcion={opcion}
                />
          }
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default TablaAdministracion; 