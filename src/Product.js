import React from 'react'

export default function Product({name, address}) {
  return (
    <div className='product_container'>
        <h3>{name}</h3>
        <h2>$244</h2>
        <img src={address} alt='name'/>
    </div>
  )
}
