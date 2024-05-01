import React, { createContext, useEffect, useState } from 'react'
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CartContext = createContext();

const CartProvider = ({children}) => {
 const [cart,setCart] = useState([]);
 const [totalQuantity,setTotalQuantity] = useState(0);
 const [totalPrice,setTotalPrice] = useState(0);


 
useEffect(() =>{
    const locatSData = localStorage.getItem("cartData");
    if(locatSData === null){
        setCart([])
    }else{
        return setCart(JSON.parse(locatSData))
    }
},[])


 
const addToCart = (product,id) =>{
    const newItem = {...product,quantity:1};


    const cartItem =  cart.find(item => item.id === id)


    if(cartItem){
        const newcart = [...cart].map((i) =>{
            if(i.id === id ){
                toast.success('Product Successfuly Added to Cart ', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                return {...i,quantity:cartItem.quantity + 1};
            }else{
                return i;
            }
        });
        setCart(newcart);
    }else{
        setCart([...cart,newItem]);
    }
}


// ---------- increase ==========
const increase = (product,id) =>{
   

        const cartItem = cart.find((item) => item.id === id);
        toast.success('Product Quantity Successfuly Increase', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        if(cartItem){
           const newCart = cart.map((i) =>{
               return i.id === i;
            })
            addToCart(newCart,id)
        } else{
            addToCart(product,id)
        }
    
} 

// ------------------ descrease -------- 
const descrease = (id) =>{
    const cartFind = cart.find((i) =>{
        return i.id === id;
    })
    if(cartFind){
        const newCart = cart.map((i) =>{
            if(i.id === id){
                return {...i,quantity:cartFind.quantity < 2 ? 1 : cartFind.quantity - 1}
            }else{
                return i;
            }
        })
        setCart(newCart)
        toast.success('Product Quantity Successfuly Descrease', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}

const removeFromCart = (id) =>{
    const newCart = cart.filter((i) =>{
        return i.id !== id ;
    }) 
    setCart(newCart)
    toast.success('Product Successfuly Remove', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}


// ----- Clear All Cart =====
const clearCart = () =>{
    setCart([])
    toast.success('Cart Successfuly Empthy', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
const CheckOut = () =>{
    redirect('/')
    setCart([])
    toast.success('Order Successfuly Placed', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }


    useEffect(() =>{
        
        const cartTotalQuantity = cart.reduce((acc,curr) =>{
            return acc + curr.quantity;
        },0)
        setTotalQuantity(cartTotalQuantity);
        const cartTotalPrice = cart.reduce((acc,curr) =>{
            return acc + curr.price * curr.quantity;
        },0)
        setTotalPrice(cartTotalPrice);

        localStorage.setItem("cartData",JSON.stringify(cart))

    },[cart])
  


    return (
   <CartContext.Provider value={{addToCart,increase,descrease,removeFromCart,clearCart,totalQuantity,
    totalPrice,cart,CheckOut}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider