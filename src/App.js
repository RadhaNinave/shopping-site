import React,{useState} from 'react'

import './App.css';
import Footer from './Components/layout/Footer';
import NavBar from './Components/layout/Navbar';
import Cart from './Components/Cart/Cart'
import Product from './Components/Products/Products';
import Card from './Components/layout/Card';
import CartProvider from './Components/Store/Cart_Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';



const App =(props) => {
  const dummy_cart = [
    {
      id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const[cartIsShow , setCartIsShow]=useState(false)
  const showCartHandler =()=>{
    console.log("show cart")
    setCartIsShow(true)
  }


  const hideCartHandler =()=>{
    setCartIsShow(false)
  }
  return (
    <div>
  
    <CartProvider>
     
    {cartIsShow && <Cart onClose={hideCartHandler}/>}
     <NavBar product={dummy_cart}onShowCart = {showCartHandler}/>
    
      </CartProvider>
      
      </div>
     );
}

export default App;
