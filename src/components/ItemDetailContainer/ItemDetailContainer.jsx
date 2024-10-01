import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { getFirestore,doc,getDoc } from 'firebase/firestore'
const ItemDetailContainer = () => {
    const[Personaje,setPersonaje]=useState("")

     const {id} = useParams();
    useEffect(()=>{
        const db=getFirestore();
        const newDoc =doc(db,"Item",id);

        getDoc(newDoc).then((res) => {
          const data = res.data();
          const newProduct={id:res.id,...data};
          setPersonaje(newProduct);
        });
      },[])
      
  return (
    <div>
      {Personaje == undefined ? <Spinner/> : <ItemDetail product={Personaje}/>}
      
      
    </div>
  )
}

export default ItemDetailContainer
