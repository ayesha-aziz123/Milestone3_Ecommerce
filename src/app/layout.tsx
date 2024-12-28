"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/Store";
import { Inter } from "next/font/google";
import { useState } from "react";
import Cart from "@/components/Cart";


const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [showCart, setShowCart] = useState(false)
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
        <Provider store={store}>

        <Navbar setShowCart={setShowCart}/>
        {
          showCart && <Cart setShowCart={setShowCart}/>
        }
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
