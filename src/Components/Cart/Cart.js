import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/Cart_Context";

const Cart = (props) => {
 const cartCtx=useContext(CartContext);

 const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
    <CartItem
    key={item.id}
    imageUrl={item.imageUrl}
    title={item.title}
    amount={item.amount}
    price={item.price}
   />
  
      ))}
    </ul>
  
   
  );
  console.log(cartItems);
  return (
    <Modal >
     
      {cartItems}
    
      
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']}  onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}  
        </div>
      
    </Modal>
  );
};
export default Cart;
