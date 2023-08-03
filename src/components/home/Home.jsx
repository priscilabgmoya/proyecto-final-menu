import CategoriesList from './CategoriesList'
import Products from './Products'

const Home = ({agregarPedido}) => {
  return (
    
    <>
      <main className='container-fluid'>
        <div className='row'>
          <div className="col-12 col-lg-2 columna-categoria"> 
            <CategoriesList />
          </div>
          <div className="col-12 col-lg-10">
            <Products  agregarPedido ={agregarPedido}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
