import React,{useState} from 'react'
import './App.css';
import Footer from './Components/layout/Footer';
import NavBar from './Components/layout/Navbar';
import Cart from './Components/Cart/Cart'
import Product from './Components/Products/Products';
import Card from './Components/layout/Card';
import CartProvider from './Components/Store/Cart_Provider';

const App =(props) => {
  const[cartIsShow , setCartIsShow]=useState(false)
  const showCartHandler =()=>{
    console.log("show cart")
    setCartIsShow(true)
  }

  const hideCartHandler =()=>{
    setCartIsShow(false)
  }
  return (
    <CartProvider>
    {cartIsShow && <Cart onClose={hideCartHandler}/>}
     <NavBar onShowCart = {showCartHandler}/>
     <Card />
     <main>
      <Product />
     </main>  
      <Footer />
      </CartProvider>
     );
}

export default App;
