import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienbenidos a Squad Buster shops"/>
      <ItemCount/>
    </div>    
  )
}

export default App
