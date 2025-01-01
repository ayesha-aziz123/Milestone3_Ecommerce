"use client";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/Store";
import React, { ReactNode, useState } from "react";
import { Provider } from "react-redux";

function Providers({ children }: { children: ReactNode }) {

    
     const [showCart, setShowCart] = useState(false)

  return(
    <Provider store={store}>

    <Navbar setShowCart={setShowCart}/>
    {
      showCart && <Cart setShowCart={setShowCart}/>
    }
    {children}
    <Footer />
    </Provider>
  )
}

export default Providers;
