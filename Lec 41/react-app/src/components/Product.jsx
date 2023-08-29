import React from 'react'
import './Product.css'

const Product = ({item}) => {
  return (
    <div className='product-card'>
        <img src={item.thumbnail} alt="" />
        <div className='product-body'>
            <h2>{item.title}</h2>
            <h2>$ {item.price}</h2>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default Product