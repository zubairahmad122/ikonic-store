import { useContext, useEffect, useState } from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Products, ProductDetail, Cart } from "./pages";
import { Navbar, Footer } from './components/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContext } from "./context/ProductsContext";
import { RotatingSquare } from "react-loader-spinner";
import BgNavbar from "./components/BgNavbar/BgNavbar";
const App = () => {

  const { loading } = useContext(ProductContext);
  const [homeLoader, setHomeLoader] = useState(false);



  
  useEffect(() => {
    setTimeout(() => {
      setHomeLoader(true)
    }, 1000)
  
  }, [])
 
  return (
    <div>
      {
        loading || homeLoader === false ? <div className='w-full h-[100vh] flex items-center justify-center'>
          <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#0000ff"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> :
          <div className="max-w-[1600px] mx-auto">
            <Router>
      
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productDetail/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              {/* Same as */}
              <ToastContainer />
              <Footer />
            </Router>
          </div>

      }
    </div>


  )
}

export default App