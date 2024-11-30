// src/components/ProductCard.js
import React from 'react';

const ProductList = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};  

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    margin: '10px',
    width: '200px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default ProductList;
