import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a squad shop"}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
  
      
      
      
      
      
      <Footer/>
      
      </BrowserRouter>
    </div>    
  )
}

export default App
