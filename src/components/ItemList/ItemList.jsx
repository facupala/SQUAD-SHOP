import React from 'react'
import Objeto from '../Objeto/Objeto'
import "./itemlist.css"
function ItemList({Personajes}) {
  return (
    <div className='container-fluid card-container'>
     {Personajes.map((objeto)=>(
        <Objeto key={objeto.id} objeto={objeto}/>
     ))}
    </div>
  )
}

export default ItemList
