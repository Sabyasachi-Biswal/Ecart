
import './App.css';
import {Product} from './Home/product';
import { ProductForm } from './Home/addProduct';
import { ProductList } from './ProductList';
import { ProductState } from './context/ProductState';
import { Bag } from './Shopping Bag';
import {Routes,Route} from 'react-router-dom'
import {NavBar} from './navbar'
import {Cart} from './cart'
import { CartState } from './context/CartState';
import {AuthState} from './context/AuthState';
import { Login } from './login';
import {ProtectRoute} from './ProtectRoute'
import { Register } from './Register';

function App() {
  
  return (
    <div className="App">

      <ProductState>
        <CartState>
         <AuthState> 
            <NavBar></NavBar>
            <Routes>
                <Route path = "/admin/register" element = {<Register/>}/>
                <Route path = "/admin/login" element = {<Login/>}/>
                <Route path="/" element={<ProductList/>}/>
                <Route element={<ProtectRoute/>}>
                  <Route path="admin/add" element={<ProductForm/>}/>
                </Route>
                <Route path="/bag" element={<Bag/>}/>
            </Routes>
          </AuthState>
        </CartState>
      </ProductState>

    </div>
  );
}

export default App;
