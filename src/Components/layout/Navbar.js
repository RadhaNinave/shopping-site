import { Fragment } from "react";
import {Navbar, Container,Alert, Button,Nav} from 'react-bootstrap';
import { Router ,Route,Switch,Link, NavLink, Routes} from "react-router-dom";
import About from "../../Pages/About";
import Product from "../Products/Products";
import ContactUs from "../../Pages/ContactUs";
import HeaderCartButton from "./HeaderCartButton";
import Footer from "./Footer";
import Card from "./Card";
import Home from "../../Pages/Home";
import ProductDetail from "../Products/ProductDetail";
import Login from "../../Pages/Login";
const Navs = (props) =>{

    
    return(
      
        <Fragment>
          
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav.Link as ={Link} to ={"/Home"}></Nav.Link>
        <NavLink to="/home">Home</NavLink >
        <NavLink to="/Store">Store</NavLink >
       <NavLink to ="/About">About </NavLink>
        <NavLink to ="/Contact">Contact Us </NavLink>
        <NavLink to ="/login">Login</NavLink>
        <NavLink to ="/logout">Logout</NavLink>

       
     <HeaderCartButton  onClick={props.onShowCart}/>
      </Container>
    </Navbar>
    <Card />
    
   <Routes>
   <Route path="/About" element={<About/>} >
     
      </Route> 
      <Route path="/" element={<Product/>} >
     
     </Route> 
   
    <Route path="/About" element={<About/>} >
     
      </Route> 
    
    
    <Route path="/Store" element={<Product />} >
      
    </Route>
   
      <Route path='/Store/:productId' element={<ProductDetail key={props.id} products={props.product}/>}></Route>
      
  
    <Route path="/Store" element={<Product />} >
      
    </Route>
    
    <Route path="/Contact" element={<ContactUs />} >
      
    </Route>
    <Route path="/login" element={<Login />}>
             
            </Route>
    
    <Route path="/home" element={<Home/>}>
    
    </Route>
    
   </Routes>
   
  <Footer />
    
    </Fragment>
    
    );
}
export default Navs;