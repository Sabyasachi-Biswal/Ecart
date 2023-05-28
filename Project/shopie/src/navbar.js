import React,{useState,useContext, useEffect} from 'react'
import './navbar.css'
import {useNavigate} from 'react-router-dom'
import CartContext from './context/CartContext'
import AuthContext from './context/AuthContext'
export const NavBar = () => {
  const [noOfItems,setNoOfItems] = useState(0);
  const CartCtx = useContext(CartContext);
  const AuthCtx = useContext(AuthContext);
  useEffect(()=>{
    setNoOfItems(CartCtx.cartItems.length)
  },[CartCtx.cartItems])

  const navigate = useNavigate();

  const logOutHandler = ()=>{
    AuthCtx.setIsLoggedIn(false);
    navigate('/admin/login');
  }

  return (
    <div>
    <nav>
      <div className='logo'><img src='https://th.bing.com/th/id/OIP.o9OEgMj1Ds_hinTU5vSTbQHaBZ?w=350&h=66&c=7&r=0&o=5&dpr=1.25&pid=1.7' alt='company logo'/></div>
      <button onClick={()=>navigate('/')} className='navigate'>HOME</button>
      <button onClick={()=>navigate('/admin/add')} className='navigate'>ADD PRODUCT</button>
      <button onClick={()=>navigate('/bag')} className='navigate'>BAG<span className='num'>{noOfItems}</span></button>
      
      {!AuthCtx.isLoggedIn ?
      <button className='login' onClick={()=>navigate('/admin/login')}>Admin Log In</button>
      :
      <button className='login' onClick={logOutHandler}>Log Out</button>}

      {AuthCtx.isLoggedIn != true ?
      <button className='login' onClick={()=>navigate('/admin/register')}>Register</button>:<span></span>}
    </nav>
    </div>
  )
}
