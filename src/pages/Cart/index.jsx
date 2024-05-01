import React, { useContext } from 'react'
import './cart.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { CartContext } from '../../context/CartContext'
import BgNavbar from '../../components/BgNavbar/BgNavbar';

const index = () => {
  const {cart,increase,descrease,removeFromCart,clearCart,totalQuantity,totalPrice,CheckOut} = useContext(CartContext)

  const notifySucc = () =>{
 
  }

  return (
<>
    <BgNavbar />

    <section className='my-[100px] px-[0.2rem] ssm:px-[0.5rem] sm:px-[2rem] py-[1rem]'>
    <h2 className='text-[22px] font-bold my-[20px]'>Shopping Cart {totalQuantity}</h2>
    {cart.length < 1 ? <div>
      <h1 className='text-center text-[40px]'>Cart In Empty </h1>          <p className='text-center mt-[20px]'><Link to={'/products'} className='text-blue-600 font-semibold '>Continue Shopping →</Link></p>
    </div>: 
       <div>
        <div className='main-grid border-b-[1px] pb-[20px] mb-[20px]'>
       <p className='font-semibold text-[14px] xsm:text-[16px]'>Name</p>
       <p className='font-semibold text-[14px] xsm:text-[16px]'>Price</p>
       <p className='font-semibold text-[14px] xsm:text-[16px]'>Quantity</p>
       <p className='font-semibold text-[14px] xsm:text-[16px]'>SubPrice</p>
     </div>
   {
     cart?.map((i) =>{
      return (
       <div key={i.id} className='w-[100%] relative mb-[40px]'>
         <RxCross2 onClick={() => removeFromCart(i.id)} className='cursor-pointer absolute right-1 lg:right-6  top-[-15px] lg:top-2 text-[22px] lg:text-[25px]' />
       <div className=' main-grid mt-[20px]'>
          <div className='flex items-center justify-center gap-4'>
            <img className=' w-[80px] sm:w-[98px]' src={i.images} alt={i.image} />
            <p className='text-[12px] ssm:text-[14px] font-semibold'>{i.title}</p>
          </div>
          <p className='font-semibold text-[14px] xsm:text-[16px]'>$ {i.price}</p>
          <div className='flex items-center border gap-2'>
                    <button onClick={() => increase(i,i.id)} className='border px-1 xsm:px-2 py-1'><FaPlus/></button>
                    <p className=''>{i.quantity}</p>
                    <button onClick={() => descrease(i.id)} className='border px-1 xsm:px-2 py-1'><FaMinus/></button>
                  </div>
          <p className='font-semibold  text-[14px] xsm:text-[16px]'>$ {i.price * i.quantity}</p>
        
        </div>
        <hr className='w-[90%] text-center mx-auto mt-[20px]' />
       </div>
      )
     })
   }
 
 
 {/* -- for checkout  */}
    <div className='flex items-end justify-end flex-col my-[1rem] '>
 
       <div className='w-[40%]  '>
         <div className='bg-[#f9f9f9] rounded-lg px-[30px] py-[30px]'>
         <div className='flex w-full items-center mb-[20px] border-b border-[#eaebef] justify-between'>
           <p className='text-[16px] font-[400]'>subtotal</p>
           <p className=' text-[16px] font-[500] pb-[10px]'>{totalPrice}</p>
         </div>
         <div className='flex w-full items-center mb-[20px] border-b border-[#eaebef] justify-between'>
           <p className='text-[16px] font-[400]'>Shipping</p>
           <p className=' text-[16px] font-[500] pb-[10px]'>$56</p>
         </div>
         <div className='flex w-full items-center mb-[20px] border-b border-[#eaebef] justify-between'>
           <p className='text-[18px] font-[400]'>Total</p>
           <p className=' text-[18px] font-[600] pb-[10px]'>$ {totalPrice + 56}</p>
         </div>
         </div>
         <button onClick={CheckOut} className='w-[100%] mt-[20px] mb-[10px] bg-blue-700 hover:bg-blue-800 duration-700 transition-all px-[20px] py-[15px] font-[500] tracking-wide text-[16px] rounded-lg text-white'>CheckOut</button>
         <button onClick={clearCart} className='w-[100%] mb[20px] bg-red-500 hover:bg-blue-800 duration-700 transition-all px-[20px] py-[15px] font-[500] tracking-wide text-[16px] rounded-lg text-white'>Clear Cart</button>
         <p className='text-center mt-[20px]'>Or <Link to={'/products'} className='text-blue-600 font-semibold '>Continue Shopping →</Link></p>
       </div>
    </div>
       </div>
}

   </section>
</>
  )
}

export default index