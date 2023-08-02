import CategoriesList from './CategoriesList'
import Products from './Products'

const Home = () => {
  return (
    
    <>
      <main className='container my-2'>
        <div className='row'>
          <div className="col-12 col-lg-2"> 
            <CategoriesList />
          </div>
          <div className="col-12 col-lg-10">
            <Products />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
