import React from 'react'

const ProductCard = ({title, image}) => {
  return (
    <div className='product'>
        <img className='product-image' src={image} alt={title}/>
        <span >{title}</span>
    </div>
    
  )
}

export default ProductCard