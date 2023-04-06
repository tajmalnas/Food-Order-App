import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealIteamForm from './MealIteamForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const price =`$${props.price.toFixed(2)}`
  const cartCtx = useContext(CartContext)
  const addToCartHandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:props.amount,
      price:props.price
    })
  }

  return (
    <li className={classes.meal}>
        <div>
         <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealIteamForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem