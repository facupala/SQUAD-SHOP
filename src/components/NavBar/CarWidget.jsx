import CarritoShop from "../../assets/carrito-shop.webp"
import "./carwidget.css"
<carwidget className="css"></carwidget>
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartProvider"
import { Link } from "react-router-dom"
function CarWidget() {
 const{GetTotalProduct} = useContext(CartContext)

  return(
    <div className="carwidget">
      <Link to={"/cart"} style={{backgroundColor:"black"}}><img style={{width:"50px", marginRight:"20px"}} src={CarritoShop} alt="" /></Link>
      {GetTotalProduct() === 0 ? null : GetTotalProduct()}
    </div>
  )
}

export default CarWidget
