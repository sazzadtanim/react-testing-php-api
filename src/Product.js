import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Product({ name, address }) {
  return (
    <div className="product_container">
      <h4>{name.toUpperCase()}</h4>
      <LazyLoadImage  src={address} alt={name} />
      <h3>৳ 1,200</h3>
      <button>Add to cart</button>
    </div>
  );
}
