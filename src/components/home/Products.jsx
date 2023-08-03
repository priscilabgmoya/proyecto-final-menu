/* eslint-disable react/prop-types */

import ProductSection from './ProductSection'
import { useFetch } from "../../helpers/useFetch"
import { getMenuByCategory } from '../../helpers/helpProducts'
import { menuPrueba } from '../../helpers/helpDB'
const URL_DATA = 'http://localhost:3000/menu'


const Products = ({agregarPedido}) => {
  /*const { data } = useFetch(URL_DATA)
  if (!data) {
    return <div className='titulo-home'>C A R G A N D O. . .</div>
  }*/
  const data = menuPrueba;
  console.log(data)
  const menues = getMenuByCategory(data)
console.log(menues)
  if (!menues || typeof menues !== 'object') {
    return <div className='titulo-home' >Invalid data</div>
  }
  const productSections = Object.keys(menues).map((aCategory, index) => {
    return <ProductSection key={index} categoryName={aCategory} menues={menues[aCategory]} agregarPedido={agregarPedido} />
  })
console.log(productSections);
  return <div className='p-0 m-0'>{productSections}</div>
}

export default Products
