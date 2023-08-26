/* eslint-disable react/prop-types */

const CategorieslistItem = props => {
  const {index, category} = props
  const {_id, nombre} = category
  return (
      <li className="nav-item" key={index}>
        <a className="nav-link  link-categoria" aria-current="page" href={`#${_id}`}>{nombre}</a>
      </li>
  )
}

export default CategorieslistItem