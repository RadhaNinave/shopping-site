import { Fragment, useContext } from "react";
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
import AuthContext from "../Store/AuthContext";
import ResetPassword from "../../Pages/ResetPassword";
import { useNavigate } from "react-router-dom";
const Navs = (props) =>{
        const authCtx =  useContext(AuthContext);
        const isLoggedIn=authCtx.isLoggedIn;
        const navigate=useNavigate();
        
        const logoutHandler = () =>{
          navigate('/login');
          authCtx.logout();
          
        }
    return(
      
        <Fragment>
          
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav.Link as ={Link} to ={"/Home"}></Nav.Link>
      {isLoggedIn && <NavLink to="/home">Home</NavLink >}  
        {isLoggedIn &&  <NavLink to="/Store">Store</NavLink >}
       {}
       <NavLink to ="/About">About </NavLink>
        <NavLink to ="/Contact">Contact Us </NavLink>
      {!isLoggedIn && <NavLink to ="/login">Login</NavLink>}
        {isLoggedIn && <NavLink to ="/logout" onClick={logoutHandler}  >Logout</NavLink> }
        

       
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
            <Route path="/logout" element={<Login />}>
            
             </Route>
     
    <Route path="/home" element={<Home/>}>
    
    </Route>
    <Route path="/ResetPassword" element={<ResetPassword/>}>
    
    </Route>
    
   </Routes>
   
  <Footer />
    
    </Fragment>
    
    );
}
export default Navs;