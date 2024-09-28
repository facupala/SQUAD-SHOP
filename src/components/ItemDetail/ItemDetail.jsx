import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./itemdetail.css"
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider'
import { Link } from 'react-router-dom'
const ItemDetail = ({product}) => {
  const {addItems }=useContext(CartContext);
  const [showItemCount,setShowItemCount]= useState(true)
  const onadd=(quantity)=>{
     addItems(product,quantity);
     setShowItemCount(false);
  }
  
  return (
    <div className='background'>
      <img src={product.img} alt="" className={`detailimg ${product.rareza}`} />
     <div className='detailinfo'>
     <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>
     </div>
     {product.stock === 0 ? (
  <p className='nostock'>No hay stock disponible</p>
) : (
  showItemCount ? (
    <ItemCount initial={1} stock={product.stock} onadd={onadd} />
  ) : (
    <Link to="/cart" className="agregarproducto">
      Terminar mi compra
    </Link>
  )
)}
    
    </div>
  )
}

export default ItemDetail
