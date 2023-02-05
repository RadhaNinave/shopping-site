import { Fragment } from "react";
import {Navbar, Container,Alert, Button,Nav} from 'react-bootstrap';
import { Router ,Route,Switch,Link, NavLink, Routes} from "react-router-dom";
import About from "../../Pages/About";
import Product from "../Products/Products";

import HeaderCartButton from "./HeaderCartButton";
import Footer from "./Footer";
import Card from "./Card";
import Home from "../../Pages/Home";
const Navs = (props) =>{

    
    return(
      
        <Fragment>
          
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav.Link as ={Link} to ={"/Home"}></Nav.Link>
        <NavLink to="/home">Home</NavLink >
        <NavLink to="/Store">Store</NavLink >
       <NavLink to ="/About">About </NavLink>
       
     <HeaderCartButton  onClick={props.onShowCart}/>
      </Container>
    </Navbar>
    <Card />
   <Routes>
   
    <Route path="/About" element={<About/>} >
     
      </Route> 
    
    </Routes>
    <Routes>
    <Route path="/" element={<Product />} >
      
    </Route>
    </Routes>
   
   <Routes>
    <Route path="/Store" element={<Product />} >
      
    </Route>
    </Routes>
  
    <Routes>
    
    <Route path="/home" element={<Home/>}>
    
    </Route>
    
   </Routes>
  <Footer />
    
    </Fragment>
    
    );
}
export default Navs;