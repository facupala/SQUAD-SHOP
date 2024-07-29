import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienbenidos a Squad Buster shops"/>
    </div>    
  )
}

export default App
