import React,{ createContext,useState } from "react";
export const CartContext = createContext();

export const CartProvider =({children})=>{
const [Cart,setCart]= useState([]);

//AGREGAR AL CARRITO
const addItems =(product,quantity)=>{
    if(isInCart(product.id)) {
        setCart(
            Cart.map((item)=>
            item.product.id === product.id
            ? {...item, quantity: item.quantity + quantity}
            : item
            )
        )
    }else {
        setCart([...Cart,{product,quantity}])
    }
};

//VER SI ESTA EN EL CARRTIO
const isInCart =(productId)=>{
    return Cart.some((item)=> item.product.id === productId)
};

//LIMPIA EL CARRITO
const ClearCart=()=>{
    setCart([]);
};

//TOTAL DEL CARRITO
const GetTotal=()=>{
    return Cart.reduce((total,item)=> total + item.product.precio * item.quantity,0)
};

// TOTAL DE PRODUCTOS EN EL CARRITOS
const GetTotalProduct=()=>{
    return Cart.reduce((total,item)=>total + item.quantity,0)
};
//ELIMINAR PRODUCTOS DEL CARRITO
const RemoveProduct=(productId)=>{
    setCart(Cart.filter((item)=>item.product.id !== productId))
};



    return(<CartContext.Provider value={{
        Cart,
        addItems,
        isInCart,
        ClearCart,
        GetTotal,
        GetTotalProduct,
        RemoveProduct,
        
    }}>
        {children}
    </CartContext.Provider>
    );
};
export default CartProvider;