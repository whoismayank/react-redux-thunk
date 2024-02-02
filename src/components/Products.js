import React, { useState, useEffect } from 'react';
import { add } from '../store/cartSlice';
import { fetchProduct } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES } from '../store/productSlice';
import LoadingComponent from './Loading';
const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
    //old code to render products on homepage without redux
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // }
    // fetchProducts();
  }, [])

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if (status === STATUSES.LOADING) {
    return <LoadingComponent />
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>
  }

  return (
    <div className='productsWrapper'>
      {products.map(product => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='' />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products