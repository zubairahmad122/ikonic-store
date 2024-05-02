import React, { createContext, useContext, useEffect, useState } from 'react'

import { Allproducts } from '../assets/constants';
export const ProductContext = createContext();



const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading,SetLoading] = useState(false);

    useEffect(() => {
        (async () => {
            SetLoading(true)
            try {
              
                setProducts(Allproducts)
                SetLoading(false)
            

            } catch (error) {
                console.log("Error")
            }
        })()

    }, [])
  return (
    <ProductContext.Provider value={{products,loading}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider