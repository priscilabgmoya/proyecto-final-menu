
import ProductCard from "./ProductCard"


const ProductSection = (props) => {
  const { categoryName, menues ,agregarPedido} = props
  return (
    <section className="p-0 mx-4">
      <h3 className="text-uppercase ms-3 mb-4 titulo-home" >{categoryName}</h3>
        {
        <div className="row ">
          {
            menues.map((menu, index) => {
              return (
                <ProductCard key={index} menu={menu}  agregarPedido ={agregarPedido}/>
              )
            }) 
          }
        </div>
        }
      
    </section>
  )
}

export default ProductSection