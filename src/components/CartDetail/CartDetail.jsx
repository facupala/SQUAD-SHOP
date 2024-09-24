import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider'
import { Link } from 'react-router-dom'
const CartDetail = ({cart}) => {
    const {addItems,isInCart,ClearCart,GetTotal,GetTotalProduct,RemoveProduct,Buy} =useContext(CartContext);
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item)=>
      <div key={item.product.id}>
        <p>{item.product.nombre}</p>
        <p>cantidad:{item.quantity}</p>
        <p>precio: ${item.product.precio}</p>

        <button onClick={()=>RemoveProduct(item.product.id)}>eliminar</button>

      </div>
    )}
    <h3>Total de productos: {GetTotalProduct()}</h3>
    <h3>total a pagar: ${GetTotal()}</h3>
    <button onClick={ClearCart}>vaciar carrito</button>
    <Link to={"/checkout"}>comprar</Link>
   
    </div>
  )
}

export default CartDetail
