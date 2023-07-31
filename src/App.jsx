import {  Route, Routes  } from "react-router-dom"; 
import Home from './components/home/Home'
const App = () => {
  return (
    <>
    <h1>preuba</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> 
    </>
  )
}

export default App













// const Home = () => <h1>HOME</h1>
// const SearchPizza = () => {
  
//   const contactList = ["muzzarela", "especial", "fugazeta", "napolitana", "calabresa"]
//   return (
//     <div>
//       <h1>SEARCH PIZZA</h1>
      {/* <ul>
        {
        contactList.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/pizzas/${item}`}>{item}</Link>
            </li>
          )
          })
        }
      </ul>
      
    </div>
  )
}

const Pizza = () => {
  const { pizzaName } = useParams()
  return (
    <>
      <h1> QUE VIVA LA PIZZA </h1>
      <h2>{pizzaName}</h2>
    </>
  )
}


function App() {

  return (
    <>
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search-pizza">Search-Pizza</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/search-pizza" element={ <SearchPizza /> }/>
        <Route path="/pizzas/:pizzaName" element={ <Pizza /> }/>
         {/* Ruta para el 404 */}
//          <Route path="*" element={<h1>Not Found</h1>}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App;  */}
