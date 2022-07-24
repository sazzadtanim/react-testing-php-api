import React from 'react'

export default function Product({name, address}) {
  return (
    <div className='product_container'>
        <h4>{name.toUpperCase()}</h4>
        <h3>৳ 1,200</h3>
        <img src={address} alt='name'/>
        <button>Add to cart</button>
    </div>
  )
}
