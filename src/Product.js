import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Product({ name, address, addToCart, id }) {
  return (
    <div className="product_container">
      <div>
        <h4>{name.toUpperCase()}</h4>
        <LazyLoadImage src={address} alt={name} />
        <h3>৳ 1,200</h3>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}
