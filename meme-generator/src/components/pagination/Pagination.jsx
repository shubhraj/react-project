import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './pagination.css'

const Pagination = () => {

  const [products, setProducts] = useState([])  
  const [currentPage, setCurrentPage] = useState(0);
  const fetchproductData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=200');
    const json = await res.json();
    setProducts(json.products);
  }  
  
  const LIMIT = 10;
  const totalPages = products.length / LIMIT;
  const start = currentPage * LIMIT;
  const end = start + LIMIT;


  useEffect(()=> {
    fetchproductData();
  }, [])

  return (
    <div>
       
        <div className='products-container'>
            {products.slice(start,end).map(product => (
                <ProductCard key={product.id} title={product.title} image={product.thumbnail} />
            ))} 
        </div>
    </div>
   
  )
}

export default Pagination