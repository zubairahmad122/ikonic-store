import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import './index.css'
import bannerImg from '../../components/assets/Shopingbanner.jpg'

import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { motion } from 'framer-motion';

const index = () => {
  const { products , loading } = useContext(ProductContext);
  const [populerProducts,setPopulerProducts] = ([products.slice(0,4)]);
  const [newCollectionProducts,setNewCollectionProducts] = ([products.slice(4,8)]);
  const [populerCollectionProducts,setPopulerCollectionProducts] = ([products.slice(2,6)]);
  // console.log(populerCollectionProducts)
  return (
    
    <>
    <Navbar />
      <HomeBanner />
      {/* -------- Popyler connection   */}

      <section className=''>
          <div className="for-main-title">
          <motion.h2 initial={{ y: 150, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'easeInOut' }} className='main-title'>Populer Collections</motion.h2>
          <hr />
          </div>
          
          {/* ---- for popolur card  */}
          <motion.div initial={{ y: 150, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'easeInOut' }} className='flex flex-wrap justify-center gap-[30px] my-[50px]'>
            {
              populerProducts.map((i) =>(
              <Card key={i.id} image={i.images} price={i.price} id={i.id} title={i.title} des={i.description} product={i} />
              ))
            }
          </motion.div>
      </section>


      {/* -------- New connection   */}

      <section className=''>
          <div className="for-main-title">
          <motion.h2 initial={{ y: 150, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'easeInOut' }} className='main-title'>New Collections</motion.h2>
          <hr />
          </div>
          
          {/* ---- for popolur card  */}
          <motion.div initial={{ y: 150, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'easeInOut' }}  className='flex flex-wrap justify-center gap-[30px] my-[50px]'>
            {
              newCollectionProducts.map((i) =>(
              <Card key={i.id} image={i.images} price={i.price} id={i.id} title={i.title} des={i.description} product={i} />
              ))
            }
          </motion.div>
      </section>

      {/* banner section  */}
      <section className='my-[1rem] h-[50vh] xsm:h-[70vh]'>
           <motion.div initial={{ y: 150, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'easeInOut' }}  className='w-full h-full relative flex items-center justify-start flex-col gap-3'>
           <img className=' w-[95%] xsm:w-[90%] md:w-[80%] h-full object-cover' src={bannerImg} alt="Banner" />
           <div className='absolute mx-[10%] w-[85%] xsm:w-[80%] flex items-center text-center xsm:text-start xsm:items-start px-[2rem] justify-center top-0 left-0 flex-col h-full'>
            <h2 className=' text-[25px] ssm:text-[30px] xsm:text-[35px] md:text-[50px]'>Exclusive <br /> Offers For You</h2>
            <p className='text-[#434549] text-[14px] xsm:[16px] tracking-wide'>Only in best Seller Products</p>
            <Link to={'products'} className='px-[20px] py-[10px] bg-red-500 rounded-[20px] text-white font-semibold text-[14px] hover:bg-blue-400 mt-2 hover:text-black duration-500 ease-in '>
              Shop Now
            </Link>
           </div>
           </motion.div>
      </section>





  

    </>
  )
}

export default index