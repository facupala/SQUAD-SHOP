import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState,useEffect } from 'react'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartProvider from './Context/CartContext/CartProvider'
import Cart from './components/Cart/Cart'
import { db } from './main'
import { getFirestore, collection , getDocs } from 'firebase/firestore'
import Checkout from './components/Checkout/Checkout'
import Alert from './components/Alert/Alert'



function App() {
  const[product ,setProduct]=useState([]);

useEffect(()=>{
 const db= getFirestore()
 const itemsCollection =collection(db,"Item")

 getDocs(itemsCollection).then((snapshot)=>{
  setProduct(snapshot.docs.map((doc)=>({ id:doc.id, ...doc.data()})));
 
 })
Alert();
 
}, []);


  
  return (
    <div>
      
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a squad shop"}/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/Checkout' element={<Checkout/>}/>
              <Route path='*' element={<Error/>}/>
              
          </Routes>
      
        <Footer/>
      
        </BrowserRouter>
      </CartProvider>
    </div>    
  )
}

export default App
