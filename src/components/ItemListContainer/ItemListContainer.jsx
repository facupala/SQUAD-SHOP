import {useState,useEffect} from 'react'

function ItemListContainer({greeting}) {
  const[Personaje,setPersonaje]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch('./personajes.json')
        const data = await response.json()
        setPersonaje(data)
      }catch(error){
        console.log("error")
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <h1>{greeting}</h1>
     {Personaje.map((Personajes)=>{
      return(
      <div key={Personajes.id} className='Card'>
        <img src={Personajes.img} alt="" />
        <h2>{Personajes.nombre}</h2>
        <p>{Personajes.descripcion}</p>
        <p>${Personajes.precio}</p>

      </div>
      )
     })}
    </div>
  )
}

export default ItemListContainer
