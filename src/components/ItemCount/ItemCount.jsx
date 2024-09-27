import {useState,useEffect} from 'react'
import "./itemcount.css"

function ItemCount({stock,initial,onadd}) {
    const [CountItem,useCountItem]=useState(initial)
    let [Items ,useItem]=useState(0)
    const decrement=()=>{
        if(CountItem >initial){
            useCountItem(CountItem - 1)
        }

    }
    const increment=()=>{
        if(CountItem < stock){
            useCountItem(CountItem +1)
        }
    }

    const AddCarrito=()=>{
        useItem(Items = CountItem)
    }
    const multiplefunction=()=>{
      AddCarrito();
      onadd(CountItem);
      
    }
  return (
    <div className='boxitemcount'>
      <h1 className='counText'>contador:</h1>
      <div className='box-itemcount'>
        <button className='add' onClick={decrement}>-</button>
        <p className='text'>{CountItem}</p>
        <button className='add' onClick={increment}>+</button>
      </div>
      <button onClick={multiplefunction}>Agregar al Carrito</button>
      <div>
       <h3 className='counText'>Carrito:{Items}</h3> 
      </div>
      
    </div>
  )
}

export default ItemCount
