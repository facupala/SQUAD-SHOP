import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider'
import CartDetail from '../CartDetail/CartDetail'
import "./cart.css"
const Cart = () => {
    const {Cart,addItems,isInCart,ClearCart,GetTotal,GetTotalProduct,RemoveProduct,Buy} =useContext(CartContext);
    console.log(Cart);
  return (
    <div className='carritovacio'>
        {Cart.length === 0 ? (
            <p className='textvacio'>no hay productos en el carrito</p>
        ):(<>
        
        <CartDetail cart={Cart}/>
        </>
        )   
        }
    </div>
  )
}

export default Cart;
