import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Store/Cart_Context";
import { Row,Col } from "react-bootstrap";
const ProductDetail = (props) =>{
    const cartCtx=useContext(CartContext);
   const params= useParams();
   const newarray =props.products.filter(prod =>prod.id==params.productId)

   const obj =newarray[0]
   console.log(params)
   const submitHandler=()=>{
    const newItem ={
      id: obj.id,
      title : obj.title,
      price : obj.price,
      imageUrl :obj.imageUrl,
      quantity : parseInt(1)
  }
  cartCtx.addItem(newItem)
  console.log(newItem)

}

  const img ="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  
    return(
        <Row style={{paddingTop : "10%"}} className='productpage-main container'>
        <Col style={{"margin" :"0 auto"}}><img src={obj.imageUrl} alt="ProductPage" width="90%" height="90%" /><button onClick={submitHandler} style={{width : "90%" , backgroundColor:"blue" , color:"white"}}>Buy Now</button></Col>
        <Col className='pt-5 ps-5'> 
            <h3>Title : ${obj.title}</h3> 
            <p style={{color : "green" , fontWeight:"bold"}}>Special Price</p>
            <h2>Price : Rs ${obj.price}/-</h2> 
            <div>15,433 Ratings and 1,692 Reviews</div> 
            <div>Available offers</div>
            <div>Buy With HDFC Bank credit card and get 10% discount</div>
            <div>Buy With Indiusind Bank credit card and get 5% discount</div> 
        </Col>
    </Row>
    )
}
export default ProductDetail;