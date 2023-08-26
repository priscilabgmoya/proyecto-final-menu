import { useFetch } from '../../helpers/useFetch'
import CategorieslistItem from './CategorieslistItem'
import './CategoriesList.css'
import { Dropdown } from 'react-bootstrap'
const URL = "http://localhost:3000/api/V1/categoriasMenu"

const CategoriesList = () => {
  const { data } = useFetch(URL)
  return (
    
      <Dropdown>
        <Dropdown.Toggle className= "link-categoria">
          Categorías
        </Dropdown.Toggle>
        <Dropdown.Menu className= "link-categoria">
          <Dropdown.Item className= "link-categoria">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-0 p- 0">

              {
                data?.map((category, index) => {
                  return (
                    <CategorieslistItem key={index} category={category} />
                  )
                })
              }
            </ul>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>

  
  )
}

export default CategoriesList