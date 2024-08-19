import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({product}) => {
  return (
    <div>
       
      <img src={product.img} alt="" />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>
    <ItemCount/>
    </div>
  )
}

export default ItemDetail
