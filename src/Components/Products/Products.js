import AvailableProducts from "./AvailableProducts";
import { Container,Row } from "react-bootstrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Store/Cart_Context";
import { useEffect,useContext } from "react";
const Product =(props) =>{
    const dummy_products = [
        {
          id : 1,
          title: "Colors",
          quantity : 1,
          price: 100,
          
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
    
        {
          id :2,
          title: "Black and white Colors",
          quantity : 1,
          price: 50,
          
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
    
        {
          id :3 ,
          title: "Yellow and Black Colors",
          quantity : 1,
          price: 70,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
    
        {
          id:4,
          title: "Blue Color",
          quantity : 1,
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];
      const cartCtx = useContext(CartContext);

 useEffect(()=>{
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");

  fetch(`https://crudcrud.com/api/5adf7916597741e1beead896c0f5cbac/cart${newstr}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(res=>{
    return res.json(); 
  }).then(data=>{
    let totalAmount =0
     data.forEach(element => {
         totalAmount += element.quantity*element.price
     });
    cartCtx.setData(data , totalAmount);
  }).catch(error=>{
    console.log(error.message)
  })
 },[])
 
     return(
      <Fragment>
      
      <AvailableProducts  /> 
    </Fragment>
    )
}
export default Product;