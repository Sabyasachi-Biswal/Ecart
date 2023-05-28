import React, { useContext, useEffect } from 'react'
import CartContext from './context/CartContext'
import { Cart } from './cart'
import './shopping Bag.css'
export const Bag = () => {

    const CartCtx = useContext(CartContext);

    const total = ()=>{
      let sum = 0
      CartCtx.cartItems.forEach((product) => {
        sum = sum +  product.product_price*product.qty;
      });
      return sum;
    }

  return (
    <div>
        <h1>SHOPPING BAG</h1>

       

        {CartCtx.cartItems.map((product,index) =>
        <Cart key={index} name={product.product_name} qty={product.qty}
        price={product.product_price} />
        )}
        
        {CartCtx.cartItems.length===0 ? 
        <h1>IS EMPTY</h1>:
        <div className='total'>
          TOTAL AMOUNT: ₹ {total()}
        </div>}
    </div>
  )
}
