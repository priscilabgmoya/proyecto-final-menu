/* eslint-disable react/prop-types */

import ProductSection from './ProductSection'
import { useFetch } from "../../helpers/useFetch"
import { getMenuByCategory } from '../../helpers/helpProducts'
import { URL_GET_MENUES } from '../../config'


const Products =  ({agregarPedido}) => {
  const { data } = useFetch(URL_GET_MENUES)
  if (!data) {
    return <div className='titulo-home'>C A R G A N D O. . .</div>
  }

  const menues = getMenuByCategory(data)

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
