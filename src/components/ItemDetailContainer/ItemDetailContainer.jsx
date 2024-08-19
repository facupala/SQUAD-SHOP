import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
const ItemDetailContainer = () => {
    const[Personaje,setPersonaje]=useState("")

     const {id} = useParams();
    useEffect(()=>{
        const fetchDatas=async()=>{
          try{
            const response = await fetch('/personajes.json')
            const data = await response.json()
            const newProduct = data.find(pe => pe.id === Number(id))
            setPersonaje(newProduct)
          }catch(error){
            console.log("error")
          }
        }
        fetchDatas()
      },[])
      console.log(id)
  return (
    <div>
      {Personaje == undefined ? <Spinner/> : <ItemDetail product={Personaje}/>}
      
      
    </div>
  )
}

export default ItemDetailContainer
