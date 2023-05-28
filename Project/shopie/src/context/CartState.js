import React,{useState} from 'react'
import CartContext from './CartContext'

export const CartState = (props) => {
    const [cartItems,setcartItems] = useState([]);
  return (
    <CartContext.Provider value={{cartItems,setcartItems}}>
        {props.children}
    </CartContext.Provider>
  )
}