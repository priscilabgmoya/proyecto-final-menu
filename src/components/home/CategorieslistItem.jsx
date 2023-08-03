/* eslint-disable react/prop-types */

const CategorieslistItem = props => {
  const {index, category} = props
  const {id, name} = category
  return (
    <li className="nav-item" key={index}>
      <a className="nav-link  link-categoria" aria-current="page" href={`#${id}`}>{name}</a>
    </li>
  )
}

export default CategorieslistItem
