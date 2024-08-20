import React from 'react'
import "./objeto.css"
import { Link,NavLink } from 'react-router-dom'
const Objeto = ({objeto}) => {
  return (
    <Link className='LinkCard' to={`/item/${objeto.id}`}>
      <div key={objeto.id}  className={`card ${objeto.rareza}`} >
      <img className='cardimg' src={objeto.img} alt="" />
      <h2 className='cardh2'>{objeto.nombre}</h2>
      <p className='cardP'> {objeto.descripcion}</p>
      <p className='cardP'>${objeto.precio}</p>
      </div>
    </Link>
  )
}

export default Objeto
