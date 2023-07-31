/* eslint-disable react/prop-types */

const CategorieslistItem = props => {
  const {index, category} = props
  const {id, name} = category
  return (
    <li className="nav-item border" key={index}>
      
      <a className="nav-link " aria-current="page" href={`#${id}`}>{name}</a>
    </li>
  )
}

export default CategorieslistItem
