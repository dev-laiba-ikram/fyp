import React from "react";
import ProductCard from "./ProductCard";
import "./productList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-results">
      <h3 style={{ marginLeft: "30px" }}>Search Results</h3>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
