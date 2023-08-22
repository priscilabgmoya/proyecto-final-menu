/* eslint-disable react/prop-types */
import {Pagination}from 'react-bootstrap';
import ProductSection from './ProductSection'
import { useFetch } from "../../helpers/useFetch"
import { getMenuByCategory } from '../../helpers/helpProducts'
import { URL_GET_MENUES } from '../../config'
import { useState } from 'react'

const Products =  ({agregarPedido}) => {
  const CANT_HOJA = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * CANT_HOJA ;
  const firstIndex = lastIndex - CANT_HOJA; 
  
  
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const { data } = useFetch(URL_GET_MENUES)
  if (!data) {
    return <div className='titulo-home'>C A R G A N D O. . .</div>
  }
  
  const menues = getMenuByCategory(data)
  let totalPages = Math.ceil(Object.keys(menues).length/CANT_HOJA)
  
  if (!menues || typeof menues !== 'object') {
    return <div className='titulo-home' >Invalid data</div>
  }
  const productSections = Object.keys(menues)?.slice(firstIndex, lastIndex).map((aCategory, index) => {
    return (
      <>
      <ProductSection key={index} categoryName={aCategory} menues={menues[aCategory]} agregarPedido={agregarPedido} />
      </>
    )
  })

  return <div className='p-0 m-0'>
    {productSections}
        <Pagination>
           {Array.from({ length: totalPages }).map((_, index) => (
             <Pagination.Item
               key={index}
               active={index + 1 === currentPage}
               onClick={() => handlePageChange(index + 1)}
             >
               {index + 1}
             </Pagination.Item>
           ))}
         </Pagination>
  </div>
}

export default Products
