import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider'
import { Link } from 'react-router-dom'
import "./cartdetail.css"
const CartDetail = ({cart}) => {
    const {addItems,isInCart,ClearCart,GetTotal,GetTotalProduct,RemoveProduct,Buy} =useContext(CartContext);
  return (
    <div className='backcart'>
    <div className='boxcard'>
      <h2>Carrito de compras</h2>
    
      {cart.map((item)=>
      <div key={item.product.id} className='shopcard'>
        <p className='textcard'>producto:{item.product.nombre}</p>
        <p className='textcard'>cantidad:{item.quantity}</p>
        <p className='textcard'>precio: ${item.product.precio}</p>

        <button onClick={()=>RemoveProduct(item.product.id)}>eliminar</button>

      </div>
    )}
    <h3>Total de productos: {GetTotalProduct()}</h3>
    <h3>total a pagar: ${GetTotal()}</h3>
    <button onClick={ClearCart}>vaciar carrito</button>
    <Link to={"/checkout"}>comprar</Link>
   
      </div>
    </div>
  )
}

export default CartDetail
