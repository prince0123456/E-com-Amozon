import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import data from '../data'
import axios from 'axios'

function HomeScreen() {
  const [products,setProuducts]=useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
      const result= await axios.get('/api/products');
      setProuducts(result.data);
    };
    fetchData();
  },[])
  return (
    <div>
          <h1>Features Products</h1>
      <div className='products'>
      {
        products.map((product)=>(
          <div className='product' key={product.slug}>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name}/>
         </Link>
            <div className='product-info'>
            <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </Link>
            <p><strong>₹{product.price}</strong></p>
            <button>Add to Cart</button>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default HomeScreen