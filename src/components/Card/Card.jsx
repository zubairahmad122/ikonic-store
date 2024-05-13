import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BiCart, BiPlus, BiShoppingBag } from 'react-icons/bi';
import './card.css'
import { CartContext } from '../../context/CartContext';
const Card = ({image,price,title,id,product,des}) => {
    const {addToCart}  = useContext(CartContext);
  return (
    <div className='card relative overflow-hidden w-[85%] xsm:w-[250px] mdd:w-[310px] shadow-sm border-[1px] p-[5px] border-[#c7bbbb8e] rounded-[10px] hover:scale-110 transition-all duration-700 '>
    <Link className='cursor-pointer' to={`/productDetail/${id}`} >

      <div className='relative'>
        <img className='w-full h-[200px] sm:h-[180px] mdd:h-[280px] object-cover' loading="lazy" src={image} alt="Product Image" />
        <div
        className='card-btn'>

            
              <button onClick={() => addToCart(product,id)} className='overflow-hidden flex items-center justify-between w-full px-[10px] xsm:px-[20px] py-[10px] bg-[#2453d4]  text-[10px] ssm:text-[12px] xsm:text-[14px] font-semibold hover:bg-red-600 text-white transition-all ease-linear duration-500 border-none rounded-sm'>
                AddTo Cart 
             
                <BiCart  size={18} />
              </button>
        </div>
      </div>
      
    </Link>
      <div className='my-[5px] px-[3px]'>
        <h5 className='text-[16px] my-5 font-semibold'>{title}</h5>
        <p className='text-[#282727] text-[14px] my-3 font-normal'> {des?.substring(0,100)+' ...'}</p>
        <p className='text-[#544d4d] font-bold'>Price:$ {price}</p>
        </div>
     
  </div>
  )
}

export default Card