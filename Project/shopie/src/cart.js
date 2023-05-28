import React,{useContext,useEffect,useState} from 'react'
import './cart.css'
import CartContext from './context/CartContext'

export const Cart = (props) => {

  const CartCtx = useContext(CartContext);
  const [item,setItem] = useState({
    product_name:props.name,
    product_price:props.price,
    qty:props.qty
  });
  useEffect(()=>{
    setItem({
      product_name:props.name,
      product_price:props.price,
      qty:props.qty
    })
  },[CartCtx.cartItems])

  const addHandler=()=>{

    let CartItems = [...CartCtx.cartItems];

    CartItems = CartItems.filter(cartItem=>cartItem.product_name === props.name);
    if(CartItems.length>0){
        CartItems[0].qty = CartItems[0].qty + 1;
        CartCtx.setcartItems([...CartCtx.cartItems])
    }
  }

  const subtractHandler=()=>{

    let CartItems = [...CartCtx.cartItems];

    CartItems = CartItems.filter(cartItem=>cartItem.product_name === props.name);
    if(CartItems.length>0 && CartItems[0].qty>1){
        CartItems[0].qty = CartItems[0].qty - 1;
        CartCtx.setcartItems([...CartCtx.cartItems])
    }
    else{
      removeHandler();
    }
  }

  const removeHandler=()=>{

    let CartItems = [...CartCtx.cartItems];

    CartItems = CartItems.filter(cartItem=>cartItem.product_name != props.name);
    CartCtx.setcartItems([...CartItems]);
  }

  return (
    <div>
        <div className="tile">
                <div className="name">
                    {item.product_name}
                </div>
                <div className='quantity'>
                  <button className='btn' onClick={addHandler}>+</button>
                    <input type= 'Number' value={item.qty}  readOnly></input>
                    <button className='btn'onClick={subtractHandler}>−</button>
                    <br/>
                    <button className='remove' onClick={removeHandler}>Remove</button>
                </div>
                <div className = "price">
                  ₹ {item.product_price*item.qty}
                </div><div className='clear'></div>
            </div>
        
    </div>
  )
}
