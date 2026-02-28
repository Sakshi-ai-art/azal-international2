// src/components/common/ProductCard.jsx
import React from "react";

// Import images (relative to this file)
import collection1 from "../../assets/images/collection1.jpg";
import collection2 from "../../assets/images/collection2.jpg";
import collection3 from "../../assets/images/collection3.jpg";

// Map images in an array
const images = [collection1, collection2, collection3];

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={images[product.imageIndex]}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
    </div>
  );
}
