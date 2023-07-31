/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard"

const ProductSection = (props) => {
  const { categoryName, menues } = props
  return (
    <section className="p-0">
      <h3 className="text-uppercase ms-3 mb-4">{categoryName}</h3>
        {
        <div className="row ">
          {
            menues.map((menu, index) => {
              return (
                <ProductCard key={index} menu={menu} />
              )
            }) 
          }
        </div>

        }
      
    </section>
  )
}

export default ProductSection
