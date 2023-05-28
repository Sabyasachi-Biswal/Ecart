import React, { useContext, useEffect } from 'react'
import ProductContext from './context/ProductContext'
import { Product } from './Home/product'


export const ProductList = () => {

  const ProductCtx = useContext(ProductContext);

  useEffect(()=>{
    getProducts();
  },[ProductCtx.products])

  const getProducts = async ()=>{
  const data = await fetch("http://localhost:1234/product/");
  const product_data = await data.json();
  ProductCtx.setProducts(product_data.product)
}
  return (
    <div>
        <h1>LIST OF PRODUCTS</h1>
        {ProductCtx.products.map((product,index) =>
        <Product key={index} name={product.product_name} 
        image={product.product_img} 
        price={product.product_price} />
        )}
    </div>
  )
}
