import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <p>
        <center>
          <h1>Loading...</h1>
        </center>
      </p>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.images[0]} alt="img_not_found!" />
        <h2>{product.title}</h2>
      </div>
      <div className="card_2">
        <p>
          <b>Description: </b>
          {product.description}
        </p>
        <p className="product-detail-price"><b>Price : </b> ${product.price}</p>
        <p className="stock"><b>In stock :</b> {product.stock}</p>
        <p className="brand">
          <b>Brand : </b> {product.brand}
        </p>
        <p className="rating">
          <b>Rating :</b> {product.rating}
        </p>
        <p className="discount">
          <b>Discount :</b> {product.discountPercentage}
        </p>
        <div className="buttons">
          <button type="">Add to cart</button>
          {/* <button type="" className="buy">
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
