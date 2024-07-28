import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <div>
      <NavBar/>
      <h1 className='titulo'>HOLA MUNDO</h1>
      <ItemListContainer greeting="Bienbenidos a Squad Buster shops"/>
    </div>    
  )
}

export default App
