import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider'
import {getFirestore, collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore'
const Checkout = () => {
  const{ Cart,
    addItems,
    ClearCart,
    GetTotal,
    GetTotalProduct,}= useContext(CartContext);
  
    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");
    const[telefono,setTelefono]=useState("");
    const[email,setEmail]=useState("");
    const[error,setError]=useState("");
    const[orderId,setOrderId]=useState("");
    const handleForm=(e)=>{
      e.preventDefault();
      
      if(!nombre || !apellido || !telefono || !email ){
        setError("por favor completa todos los campor")
        return;
      }

      const db=getFirestore();

      const order={
        item:Cart.map((product)=>({
          id:product.product.id,
          nombre:product.product.nombre,
          quantity:product.quantity,
          stock: product.product.stock,
        })),
        total:GetTotal(),
        date:new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };
      Promise.all(
        order.item.map(async(productOrder)=>{
        const productRef=doc(db,"Item",productOrder.id)
        const productDoc=await getDoc(productRef)
        const stock=productDoc.data().stock;

        await updateDoc(productRef,{
          stock:stock - productOrder.quantity,
        });
      })
      ).then(()=>{
        addDoc(collection(db,"orders"),order)
        .then((docRef)=>{
          setOrderId(docRef.id);
          ClearCart();
        })
        .catch((error)=>{
          console.log("error adding document",error);
          setError("NO se pudo generar la odern")
        });
      })
      .catch((error)=>{
        console.log("error updating stock",error);
        setError("no se puede actualizar el stock")
      });
    };
  
  return (
    <div>
      <h2>Ingresa tus datos</h2>

      <div>
      {Cart.map((product)=>(
          <div key={product.product.id}>
            <p>{""}</p>
            {product.product.nombre}
            <p>{product.product.precio}</p>
          </div>
          ))}
      </div>
    
      <form onSubmit={handleForm}>
       <div>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
       </div>

       <div>
        <label htmlFor="">Apellido</label>
        <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
       </div>
       
       <div>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       
       <div>
        <label htmlFor="">Telefono</label>
        <input type="number" onChange={(e)=>setTelefono(e.target.value)} />
        </div>
       
          <div>
        <label htmlFor="">Cupon</label>
        <input type="text" />
       </div>

       <button type='submit'> generar la orden de compra</button>
       {error && <p>{error}</p>}

       {orderId &&(
        <p> gracias por tu compra {orderId}</p>
       )}
      </form>
    </div>
  )
}

export default Checkout
