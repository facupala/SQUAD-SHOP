import CarritoShop from "../../assets/carrito-shop.webp"
import { useState } from "react"
function CarWidget() {
  const [contador, setContador] = useState(0)

  const aumentarContador=()=>{
    setContador(contador + 1)
  }
  return (
    <div>
      <button style={{backgroundColor:"black"}} onClick={aumentarContador}><img style={{width:"50px", marginRight:"20px"}} src={CarritoShop} alt="" /></button>
      <p>{contador}</p>
    </div>
  )
}

export default CarWidget
