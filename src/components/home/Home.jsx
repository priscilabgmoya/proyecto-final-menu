import CategoriesList from './CategoriesList'
import Products from './Products'
import Carousel from '../Carousel/Carousel'

const Home = ({agregarPedido}) => {



  return (
    
    <>
      <main className='container-fluid'>
        <Carousel></Carousel>
        <div className='row'>
          <div className="col-12 col-lg-12">
            <Products  agregarPedido ={agregarPedido}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home