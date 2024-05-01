import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductsContext';
import { useParams } from 'react-router-dom';
import { FaStarHalfAlt, FaStar, FaPlus, FaMinus } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { CartContext } from '../../context/CartContext';
import BgNavbar from '../../components/BgNavbar/BgNavbar';

const index = () => {
  const [smallImg, setSmImage] = useState();
  const [singProduct, setProduct] = useState([])
  const [ratings, setRatings] = useState();
  const [halfRating, setHalfRatings] = useState(false);
  const [cartQty,setCartQty] = useState([])

  const { products } = useContext(ProductContext);
  const {addToCart,increase,descrease , cart} = useContext(CartContext)
 

  const { id } = useParams();


  useEffect(() => {
  

    const product = products.find((item) => {
      return item.id == id;
    })
    setProduct(product)
    const Cart = cart?.find((item) => {
      return item.id == id;
    })
    setCartQty(Cart)

    const { images, rating } = product
    setSmImage(images[0])
    const half = rating / 2;
    if (half) {
      setHalfRatings(true)
      // console.log(rating) 
    } else {
      setHalfRatings(false)
    }
    let arr = [];
    for (let i = 0; i < rating - 1; i++) {
      arr[i] = i;
    }
    setRatings(arr)
    
  }, [id,cart])

  
  
  let {quantity} = cartQty ? cartQty : 0; 
  let { images, price, title, description, ratingm,id:idd} = singProduct;

  return (
    <>
    <BgNavbar />
      <section className='my-[100px] mt-[150px]  px-[1rem] lg:px-[2rem] py-[2rem]'>
      <div className='main-product-detail w-full h-full flex items-center flex-col md:flex-row justify-center'>
        <div className="flex-1 flex items-center flex-col xsm:flex-row md:items-start gap-[10px]  justify-center h-full px-[0.5rem] lg:px-[1rem]">
         
          {/* for main img  */}
          <div className='border rounded-sm p-[10px] duration-700 hover:shadow-lg'>
            <img className='w-[500px] h-[370px] duration-700 object-cover hover:scale-110' src={images} alt="" />
          </div>
        </div>
        {/* for descreption  */}
        <div className='flex-1 flex flex-col items-center md:items-start justify-center md:justify-start h-full px-[1rem]'>
          <h4 className='font-semibold mb-[10px] text-[23px]'>{title}</h4>
          {/* --- for strs          */}
          <div className='flex items-center'>
            {
              ratings?.map((i) => {
                return <p key={i}><FaStar className='text-yellow-400' />  </p>
              })
            }
            <p>{halfRating ? <FaStarHalfAlt className='text-yellow-400' /> : ''}</p>
          </div>
          <p className='font-semibold mt-[20px]'>$ {price}</p>
          <p className='my-[20px] text-center md:text-left'>{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, deserunt molestias corrupti ducimus maiores voluptatem voluptate </p>

          <div className='flex items-center border gap-2'>
          <button onClick={() => increase(singProduct,idd)} className='border px-1 xsm:px-2 py-1'><FaPlus/></button>
            
           
                 <p>{`${quantity ? quantity : 0}`}</p>
              
            
            <button onClick={() => descrease(idd)} className='border px-2 py-1'><FaMinus /></button>
          </div>


          <button onClick={() => addToCart(singProduct, idd)} className='px-[20px] py-[10px] bg-[#ff3a3a] my-[30px] hover:bg-blue-600 duration-500 text-white'>Add To Cart</button>
        </div>

      </div>
   
    </section>
    </>
  )
}

export default index