import React,{useContext} from "react";
import CartContext from "../context/CartContext";
import './product.css';

export const Product = (props)=>{
    const CartCtx = useContext(CartContext);

    const buyNowHandler = ()=>{
        const cartObj = {
            product_name:props.name,
            qty:1,
            product_price:props.price
        } 

        let CartItems = [...CartCtx.cartItems];

        CartItems = CartItems.filter(cartItem=>cartItem.product_name === props.name);
        if(CartItems.length>0){
            CartItems[0].qty = CartItems[0].qty + 1;
        }else{
            CartCtx.setcartItems([...CartCtx.cartItems,cartObj]);
        }
    }

    return(
        <div>
            <div className="container">
                <div className="product_name">
                    {props.name}
                </div>
                <div className="product_image">
                    <img src={props.image} alt="product img"/>
                </div>
                <div className = "product_price">
                    ₹ {props.price}
                </div>
                <div className="buy">
                    <button className="buy_now" onClick={buyNowHandler}>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}