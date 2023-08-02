/* eslint-disable react/prop-types */

import ProductSection from './ProductSection'
import { useFetch } from "../../helpers/useFetch"
import { getMenuByCategory } from '../../helpers/helpProducts'
const URL_DATA = 'http://localhost:3000/menu'


const Products = () => {
  const { data } = useFetch(URL_DATA)
  if (!data) {
    return <div className='titulo-home'>C A R G A N D O. . .</div>
  }
  console.log(data)
  const menues = getMenuByCategory(data)

  if (!menues || typeof menues !== 'object') {
    return <div className='titulo-home' >Invalid data</div>
  }
  const productSections = Object.keys(menues).map((aCategory, index) => {
    return <ProductSection key={index} categoryName={aCategory} menues={menues[aCategory]} />
  })

  return <div className='p-0 m-0'>{productSections}</div>
}

export default Products
