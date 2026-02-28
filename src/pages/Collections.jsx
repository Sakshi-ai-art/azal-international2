// src/pages/Collections.jsx
import React from "react";
import "../styles/pages.css";
import { productsData } from "../data/productData.js"; // correct file name
import ProductCard from "../components/common/ProductCard.jsx";

export default function Collections() {
  return (
    <div className="page page-collections">
      <div className="container">
        <h1 className="section-title">Our Collections</h1>
        <p className="section-desc">
          A selection of our completed projects across residential and commercial spaces.
        </p>

        <div className="grid grid-3">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}