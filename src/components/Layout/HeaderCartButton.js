import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump :""}`;

  const {items}= cartCtx;
  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false)
    },300);

    return ()=>{    //CleanUp function
      clearTimeout(timer)
    }

  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton