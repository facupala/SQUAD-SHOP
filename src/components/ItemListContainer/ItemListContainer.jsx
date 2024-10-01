import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import "./itemlistcontainer.css"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { collection,getDocs, getFirestore, query,where, } from 'firebase/firestore'
function ItemListContainer({greeting}) {
  const[Personaje,setPersonaje]=useState([])
  const {categoriaId} = useParams();
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true);

    const db=getFirestore();
    
    const myProducts = categoriaId ? query(collection(db,"Item"),where("categoria","==",categoriaId))
    : collection(db,"Item");

    getDocs(myProducts).then((res)=>{
      const newProduct = res.docs.map((doc)=>{
        const data=doc.data();
        return {id: doc.id, ...data};
      });
      setPersonaje(newProduct); 
    })
    .catch((error)=> console.log("errpr searching item",error))
    .finally(()=>setLoading(false));
  },[categoriaId]);
  
  
  return (
    <div className='container-fluid box-personajes'>
      <h1>{greeting}</h1>

      {loading ? <Spinner/> : <ItemList Personajes={Personaje}/>}
     
    </div>
  )
}

export default ItemListContainer
