import { useRef ,useState} from 'react';
import classes from './Checkout.module.css';

const isEmpty = value =>value.trim()==='';
const isFive = value =>value.trim().length===5;

const Checkout = (props) => {

  const [formInputsValidity,setFormInputsValidity] = useState({
    name:true,
    street:true,
    city:true,
    postal:true,
  });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredCityIsValid=!isEmpty(enteredCity)
    const enteredPostalIsValid=isFive(enteredPostal)

    setFormInputsValidity({
      name:enteredNameIsValid,
      street:enteredStreetIsValid,
      city:enteredCityIsValid,
      postal:enteredPostalIsValid,
    })

    const formIsvalid = enteredCityIsValid && enteredStreetIsValid && enteredNameIsValid && enteredPostalIsValid;

    if(!formIsvalid){
      return;
    }

    props.onConfirm({
      name:enteredName,
      stree:enteredStreet,
      postal:enteredPostal,
      city:enteredCity,
    });

  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '':classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '':classes.invalid}`;
  const postalControlClasses = `${classes.control} ${formInputsValidity.postal ? '':classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '':classes.invalid}`;


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a Valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a Valid Street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter a Valid Postal</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;