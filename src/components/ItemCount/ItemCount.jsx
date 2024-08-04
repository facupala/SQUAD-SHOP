import {useState,useEffect} from 'react'
import "./itemcount.css"

function ItemCount() {
    const [CountItem,useCountItem]=useState(1)
    let [Items ,useItem]=useState(0)
    const decrement=()=>{
        if(CountItem >1){
            useCountItem(CountItem - 1)
        }

    }
    const increment=()=>{
        if(CountItem < 10){
            useCountItem(CountItem +1)
        }
    }

    const AddCarrito=()=>{
        useItem(Items = CountItem)
    }
  return (
    <div >
      <h1>contador:</h1>
      <div className='box-itemcount'>
        <button className='add' onClick={decrement}>-</button>
        <p className='text'>{CountItem}</p>
        <button className='add' onClick={increment}>+</button>
      </div>
      <button onClick={AddCarrito}>Agregar al Carrito</button>
      <div>
       <h3>Carrito:{Items}</h3> 
      </div>
      
    </div>
  )
}

export default ItemCount
