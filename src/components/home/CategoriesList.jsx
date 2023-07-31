import { useFetch } from '../../helpers/useFetch'
import CategorieslistItem from './CategorieslistItem'
import './CategoriesList.css' 
const URL = "http://localhost:3000/categoria"


const CategoriesList = () => {
  const { data } = useFetch(URL)
  return (
    <aside className="border p-0 m-0 aside">
      <h5>Categorías</h5>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-0 p- 0">
        {
          data?.map((category, index) => {
            return (
              <CategorieslistItem key={index} category={category}/>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default CategoriesList
