import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListaFooter.css';
function ListaFooter({ staticFooter }) {
 return(
    <>
 {
    staticFooter.map((obj, index) => {
      return <Col key={index} sm={3} md={3} xl={3}>
          <p className="h5 tituloLista">{obj.title}</p>
          <ul className="listaItem">
            <li>
              {obj.item_uno.url == null ? (
                  obj.item_uno.title
                  ) : (
                  <Link to={obj.item_uno.url}>{obj.item_uno.title}</Link>
              )}
            </li>
            <li>
              {obj.item_dos.url == null ? (
                  obj.item_dos.title
              ) : (
                <Link to={obj.item_dos.url}>{obj.item_dos.title}</Link>
              )}
            </li>
            <li>
              {obj.item_tres.url == null ? (
                  obj.item_tres.title
               ) : (
                  <Link to={obj.item_tres.url}>{obj.item_tres.title}</Link>
              )}
            </li>
          </ul>
        </Col>
    })
  }
    </>
 )
 
   
}

export default ListaFooter;
