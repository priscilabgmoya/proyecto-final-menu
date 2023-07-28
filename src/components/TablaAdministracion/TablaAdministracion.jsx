import {Table , Modal , Row , Col}from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle ,AiFillEdit ,AiFillDelete} from 'react-icons/ai';
import Formulario from '../Formulario/Formulario';
import './TablaAdministracion.css'; 
function TablaAdministracion({informacion, cabecera, title, opcion}){

  const [show, setShow] = useState(false);
  const [isEditing, setEditing] = useState(false); 
  const [isRemoving, setRemoving] = useState(false); 
  const [arrayInformacion, setArrayInformacion ] = useState(informacion)
  const [idItem , setIdItem] = useState(null);
  const [imageZoomStates, setImageZoomStates] = useState({});
  const [combo, setCombo] = useState([]);
  const [showButton, setShowButton] = useState(false);


  const handleShow = (state, idItem) => {
    switch(state){
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
  useEffect(()=> {
   console.log('se esta escuchando');
    }, [arrayInformacion])

  const handlePublicadoChange = (index) => {
    const updatedArray = [...arrayInformacion];
    updatedArray[index].publicado = !updatedArray[index].publicado;
    setArrayInformacion(updatedArray);
  };

  const handleComboChange = (index,e) => {
    const {value, checked} = e.target;

    const updatedArray = [...arrayInformacion];
    updatedArray[index].combo = !updatedArray[index].combo;
    setArrayInformacion(updatedArray);

    if(checked){
      setCombo([...combo,value])
      if(combo.length == 0)  setShowButton(true) ;
    }else{
      setCombo(combo.filter(combo => {combo !== value}))
      if(combo.length == 0)  setShowButton(false) ;
    }
  };
  const addItem = (item) => {
    setArrayInformacion([...arrayInformacion, item])
  }
    return(
        <div className="container">
            <Row >
            
                {
                  opcion !='pedido' ? 
                  <>
                  <Col xs={8} className='title'>
                <h4>{`Administración de ${title}s `}</h4>
                </Col>
                <Col xs={4} className='buttons'> 
                <button className={ showButton ?'btnNuevoCombo': 'btnOcultar' } ><AiOutlinePlusCircle className='iconsBtn'/>{`Nuevo Combo`}</button>
                <button className='btnNuevoMenu'onClick={()=> {handleShow('create')}} ><AiOutlinePlusCircle className='iconsBtn'/>{`Nuevo ${title}`}</button>
                </Col>
                  </>
                  :  <Col xs={12} className='title'>
                  <h4>{`Administración de ${title}s `}</h4>
                  </Col>
                }
            </Row>
            <Row>
            <Table striped responsive>
      <thead>
        <tr>
          {
            cabecera  == null  ?  <th> No se encontro ningún titulo </th> : 
            cabecera.map((titulo, index) => {
              return <th key={index}>{titulo}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          arrayInformacion == null || arrayInformacion.length == 0 ?     
          <tr>
            <td colSpan={cabecera?.length}>{`Momentaneamente no se pudo cargar ningun ${title}! `}</td>
          </tr>
          : opcion == 'menu' &&  arrayInformacion !== null ? 
           arrayInformacion.map((item, index) => {
           return <tr key={item.codigo}>
                <td className={imageZoomStates[index] ? 'zoomed' :'columnaImagen'}> 
                <img src={`${item.urlImagen}`} alt={`imagen-de-${item.nombre}`}  onClick={() =>setImageZoomStates((prevState) => ({ ...prevState,[index]: !prevState[index]}))}/>
                </td>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>{item.precio}</td>
                <td>{item.categoria}</td>
                <td  className='input-check' ><input type="checkbox" name="check-publicado" id="menu-publicado" checked={item.publicado} onChange={()=> {handlePublicadoChange(index)}}/></td>
                <td  className='input-check' ><input type="checkbox" name="check-combo" id="menu-combo"  checked={item.combo}  value={item.codigo} onChange={()=>{handleComboChange(index,event)}} /></td>
                <td className='contenedor-operaciones'>
                        <button className='btnModificar' onClick={()=> {handleShow('update', item.codigo)}} ><AiFillEdit  className='iconsBtns'/></button>
                        <button className='btnEliminar' onClick={()=> {handleShow('delete', item.codigo)}} ><AiFillDelete  className='iconsBtns'/></button>
                </td>
            </tr>
          })
          : opcion == 'usuario' &&  arrayInformacion !== null ? arrayInformacion.map(item => {
           return <tr key={item.codigo}>
                <td>{item.nombre}</td>
                <td>{item.email}</td>
                <td>{item.estado}</td>
                <td>{item.rol}</td>
                <td className='contenedor-operaciones'>
                <button className='btnModificar' onClick={()=> {handleShow('update', item.codigo)}} ><AiFillEdit  className='iconsBtns'/></button>
                        <button className='btnEliminar' onClick={()=> {handleShow('delete', item.codigo)}}><AiFillDelete  className='iconsBtns'/></button>
                </td>
            </tr>
          })
          : arrayInformacion.map(item => {
              return <tr key={item.codigo}>
                  <td>{item.fecha}</td>
                  <td>{item.usuario}</td>
                  <td>{item.menu}</td>
                  <td>{item.estado}</td>
                  <td className='contenedor-operaciones'>
                          <button className='btnModificar' onClick={()=> {handleShow('update' , item.codigo)}} ><AiFillEdit  className='iconsBtns'/></button>
                          <button className='btnEliminar' onClick={()=> {handleShow('delete', item.codigo)}}><AiFillDelete  className='iconsBtns'/></button>
                  </td>
              </tr>
            })
        }
    
      </tbody>
    </Table>
            </Row>
            <Modal show={show}  onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className={isRemoving ? 'title-delete' : 'title-modal'}>{
            isEditing ? `Modificar ${title} Seleccionado`
            : isRemoving ? `¿Desea Eliminar el ${title} Seleccionado?`
            : `Crear Nuevo ${title}`
            }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
         <Formulario 
         handleShow= {handleShow} 
         idItem = {idItem} 
         isRemoving={isRemoving} 
         isEditing={isEditing} 
         opcion={opcion}
         addItem={addItem}
         />
        }
        </Modal.Body>
 </Modal>
        </div>
    );
}
export default TablaAdministracion; 