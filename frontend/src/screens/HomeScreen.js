import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import logger from 'use-reducer-logger'
// import data from '../data'
import axios from 'axios'
const reducer=(state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return{...state,loading:true};
    case 'FETCH_SUCCESS':
      return{...state,products:action.payload,loading:false};
    case 'FETCH_FAIL':
      return {...state,loading:false,error:action.payload};
    default:
      return state;
  }
}
function HomeScreen() {
  const [{loading,error,products},dispatch]=useReducer(logger(reducer),{
    products:[],
    loading:true,
    error:'',
  })
  useEffect(()=>{
    const fetchData= async ()=>{
      dispatch({type:'FETCH_REQUEST'})
      try {
        const result= await axios.get('/api/products');
        dispatch({type:'FETCH_SUCCESS',payload:result.data});
        
      } catch (error) {
        dispatch({type:'FETCH_FAIL',payload:error.message});
      }
      // setProuducts(result.data);
    };
    fetchData();
  },[])
  return (
    <div>
          <h1>Features Products</h1>
      <div className='products'>
      {
        loading?(<div>Loading.....</div>):error?(<div>{error}</div>):(
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
        )))
      }
    </div>
    </div>
  )
}

export default HomeScreen