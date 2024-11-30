// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, totalAmount }) => {
  return (
    <div style={styles.cart}>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h4>Total: ${totalAmount.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

const styles = {
  cart: {
    position: 'fixed',
    right: '10px',
    top: '50px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  image: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
};

export default Cart;
