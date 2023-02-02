import { Fragment } from "react";
import {Navbar, Container,Alert, Button} from 'react-bootstrap';
import Card from "./Card";
import HeaderCartButton from "./HeaderCartButton";

const Nav = (props) =>{

    
    return(
        <Fragment>
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#Store">Store</Navbar.Brand>
        <Navbar.Brand href="#About">About</Navbar.Brand>
       
     <HeaderCartButton  onClick={props.onShowCart}/>
      </Container>
    </Navbar>
    
    </Fragment> 
    );
}
export default Nav;