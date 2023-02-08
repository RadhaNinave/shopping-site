import AvailableProducts from "./AvailableProducts";
import { Container,Row } from "react-bootstrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Product =(props) =>{
   /* const dummy_products = [
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
     
    return(
        <div>
           <Container>
      <Row>
        {dummy_products.map(item=><AvailableProducts key={item.id} prod={item} />)}
      </Row>
    </Container>
        </div>

    );
}*/
    return(
      <Fragment>
      
     <li> <AvailableProducts /></li> 
    </Fragment>
    )
}
export default Product;