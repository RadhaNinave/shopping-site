
import ProductForm from './ProductForm';
import classes from './MealsItem.module.css';
import { useContext } from 'react';
import CartContext from '../Store/Cart_Context';


const ProductItem = (props) => {
 const cartCtx=useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount =>{
    cartCtx.addItem({
      id:props.id,
      title:props.title,
      imageUrl:props.imageUrl,
      price:props.price,
      amount:amount
    });

  };

  return (
    <li className={classes.meal}>
      <div>
 x        <h3>{props.title}</h3>
        <div className={classes.description}><img style={{width:"20%"}} src={props.imageUrl} /></div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductForm onAddToCart = {addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
