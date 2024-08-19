import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
      <h1>Error 404. Pagina no encontrada</h1>
      <Link to="/">Inicio</Link>
    </div>
  )
}

export default Error
