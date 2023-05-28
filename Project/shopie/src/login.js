import React,{useState,useContext} from "react";
import './Home/addProduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';
export const Login = ()=>{
    const AuthCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [errmsg,setErrMsg] = useState('');
    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const emailHandler=(event)=>{
        setUser((prevState)=>{
            return{
                ...prevState,
                email:event.target.value
            }
        })
    }

        const passwordHandler=(event)=>{
            setUser((prevState)=>{
                return{
                    ...prevState,
                    password:event.target.value
                }
            })
        }

    const loginHandler=async (event)=>{
        try {
          event.preventDefault();
          const result =  await axios.post('http://localhost:1234/admin/login',user,{
              headers:{
              'Content-Type':'application/json'
          }})
          if(result.data){
            console.log(result.data.message);
            AuthCtx.setIsLoggedIn(true);
            navigate("/admin/add");
          }
        } catch (err) {
          setErrMsg(err.message);
        }
          
      }

    return(
        <div className="addBox">
            <h2>Admin LogIn Portal</h2>
            <form onSubmit={loginHandler}>
                *All fields are required
                {errmsg != '' &&
                    <div className='alert'>{errmsg}</div>}
                <div className="entry">
                    Email: <input type="text" placeholder="Enter Email" onChange={emailHandler} required></input>
                </div>
                <div className="entry">
                    Password: <input type="password" placeholder="Enter Password" onChange={passwordHandler} required></input>
                </div>
                <div>
                    <button className="add">LOG IN</button>
                </div>
            </form>
        </div>
    )
}
