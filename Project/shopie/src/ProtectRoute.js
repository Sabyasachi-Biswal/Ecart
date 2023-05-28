import React,{useContext} from 'react'
import AuthContext from './context/AuthContext'
import {Outlet} from 'react-router-dom'
import { Login } from './login'
export const ProtectRoute = () => {
    const AuthCtx = useContext(AuthContext);
  return (
    AuthCtx.isLoggedIn ? <Outlet/> : <Login/>
  )
}
