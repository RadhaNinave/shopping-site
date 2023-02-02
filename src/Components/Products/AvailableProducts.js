import { useContext } from 'react';

import CartContext from '../Store/Cart_Context';
import classes from './AvailableList.module.css';
import ProductForm from './ProductForm';
import Card from '../UI/Card';
import ProductItem from './ProductItem';
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
const AvailableProducts = (props)=>{
   /* const cartCtx=useContext(CartContext)
    const submitHandler=(event)=>{
      event.preventDefault();
        const newItem ={
          id: props.prod.id,
          title : props.prod.title,
          price : props.prod.price,
          imageUrl :props.prod.imageUrl,
         
      }
      cartCtx.addItem(newItem)
  console.log(newItem)*/
  const productList = dummy_cart.map((item)=>(
    <ProductItem
    key={item.id}
    id={item.id}
    title={item.title}
    price={item.price}
    imageUrl={item.imageUrl}
  />
  ));
    return(
     
      <section className={classes.meals}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
       
    );


}
export default AvailableProducts;