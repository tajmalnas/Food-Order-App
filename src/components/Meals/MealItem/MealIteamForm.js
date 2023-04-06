import React, { useRef,useState } from 'react'

import classes from './MealIteamForm.module.css'
import Input from '../../UI/Input'

const MealIteamForm = (props) => {
  const [amountIsValid,setAmountIsValid] =useState(true)
 const amountInputRef = useRef();
const submitHandler = event =>{
  event.prevent.default();
  const enteredAmount=amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;
  if(enteredAmount.trim().length===0 || enteredAmountNumber<1||enteredAmountNumber>5){
    setAmountIsValid(false);
    return;
  }
  props.onAddToCart(enteredAmountNumber);
}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
    <Input 
        ref={amountInputRef}
        label="Amount" input={{
        id:'amount'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }} />
    <button>+Add</button>
    {!amountIsValid && <p>Please Enter valid amount(1-5)</p>}
    </form>
  )
}

export default MealIteamForm