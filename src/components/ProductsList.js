import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
    console.log("products", products);
  });

  return (
    <>
      <div className="Nav_bar">
        <h2 className="logo">E_Commerce</h2>
        {/* <input type="search" placeholder="Search Products" />
        <button type="" className="login">
          Login
        </button>
        <button type="" className="register">
          Register
        </button> */}
      </div>
      <div className="product-list">
        <h1>Products List</h1>
        <div className="product-list">

          {products.map((product) => (
            <div key={product.id} className="product-card">

              <Link className="link" to={`/product/${product.id}`}>
                <h3 className="link">{product.title}</h3>
              </Link>

              <img src={product.images[0]} alt="not found!" />

              <div className="price_rate">
                <p>Price : ${product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
