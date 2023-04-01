import React from 'react'
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems=(<ul className={classes['cart-items']}>{[{id:'c1',name:'sushi',amount:2,price:12}].map(item=><li>{item.name}</li>)}</ul>);
  return (
    <div>
        {cartItems}
        <div></div>
        <div></div>
    </div>
  )
}

export default Cart