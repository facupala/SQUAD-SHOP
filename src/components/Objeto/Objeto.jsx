import React from 'react'
import "./objeto.css"
import { Link,NavLink } from 'react-router-dom'
const Objeto = ({objeto}) => {
  return (
    <Link to={`/item/${objeto.id}`}>
      <div key={objeto.id} className="card">
      <img src={objeto.img} alt="" />
      <h2>{objeto.nombre}</h2>
      <p>{objeto.descripcion}</p>
      <p>${objeto.precio}</p>
      </div>
    </Link>
  )
}

export default Objeto
