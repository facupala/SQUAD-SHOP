import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import "./itemlistcontainer.css"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
function ItemListContainer({greeting}) {
  const[Personaje,setPersonaje]=useState([])
  const {categoriaId} = useParams();
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch('/personajes.json')
        const data = await response.json()
         const filtered = categoriaId ? data.filter(p=> p.categoria === categoriaId) : data;

  
          setPersonaje(filtered)
         
        
      }catch(error){
        console.log("error")
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[categoriaId])
  console.log(categoriaId)
  
  return (
    <div className='container-fluid box-personajes'>
      <h1>Bienvenidos</h1>

      {loading ? <Spinner/> : <ItemList Personajes={Personaje}/>}
     
    </div>
  )
}

export default ItemListContainer
