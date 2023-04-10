import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
    if(action.type==='ADD'){
        // const updatedItems = state.items.concat(action.item);
        
        const existingCarItemIndex = state.items.findIndex((item)=>item.id===action.item.id);

        const existingCarItem = state.items[existingCarItemIndex];

        
        let updatedItems;
        
        if(existingCarItem){
            const updatedItem = {
                ...existingCarItem,
                amount:existingCarItem.amount + action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCarItemIndex]=updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        const updatedTotalAmout=state.totalAmount+action.item.price*action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmout,
        }

    }

    if(action.type === 'REMOVE'){
        const existingCarItemIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingCarItem = state.items[existingCarItemIndex];

        const updatedTotalAmout = state.totalAmount-existingCarItem.price;
        let updatedItems;
        if(existingCarItem.amount === 1){
            updatedItems = state.items.filter(item=> item.id !== action.id )
        }
        else{
            const updatedItem = {...existingCarItem,amount : existingCarItem.amount-1}
            updatedItems = [...state.items]
            updatedItems[existingCarItemIndex]=updatedItem
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmout
        }
    }

    if(action.type==='CLEAR'){
        return defaultCartState;
    }

    return defaultCartState
}

const CartProvider = (props) => {
    
   const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addItemHandler=item=>{
        dispatchCartAction({type:'ADD',item:item});
    }

    const removeItemHandler=id=>{
        dispatchCartAction({type:'REMOVE',id:id});
    }

    const clearCartHandler =()=>{
        dispatchCartAction({type:'CLEAR'})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        clearCart:clearCartHandler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider