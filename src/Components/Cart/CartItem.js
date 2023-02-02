import React,{useContext} from 'react'
import './CartItem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CartContext from '../Store/Cart_Context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext)
  const deleteItem=()=>{
    const deleteItem={
      id:parseInt(props.id),
      quantity : parseInt(props.amount),
      price : parseInt(props.price)
    }
    cartCtx.removeItem(deleteItem)
  }
  return (
    <div className='cartitem-main'>
        <div className='cartitem-img'>
            <img className='cartitem-img' src={props.imageUrl} />
            <span>{props.title}</span>
        </div>
        <div className='cartitem-price'>{props.price}</div>
        <div className='cartitem-button'>
            <span className='cartitem-quantity'>{props.total}</span>
            <button onClick={deleteItem} >Delete</button>
        </div>
    </div>
  )
}
export default CartItem;
