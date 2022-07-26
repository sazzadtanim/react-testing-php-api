import React from "react";
import "../pages/Products.css"

export default function Products({ showProducts }) {
  return (
    <div >
      <h1>All products</h1>
      <div className="products__container">{showProducts}</div>
    </div>
  );
}
