// src/pages/Products.jsx
import React from "react";
import "../styles/pages.css";
import { productsData } from "../data/productsData";
import ProductCard from "../components/common/ProductCard.jsx";

export default function Products() {
  return (
    <div className="page page-products">
      <div className="container">
        <h1 className="section-title">Our Products</h1>
        <div className="grid grid-3">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}