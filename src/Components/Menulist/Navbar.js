// src/components/Navbar.js
import React from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <nav style={styles.navbar}>
      <h2>Shopping Site</h2>
      <div style={styles.cartIcon} onClick={toggleCart}>
        🛒 <span style={styles.cartCount}>{cartCount}</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  cartIcon: {
    cursor: 'pointer',
  },
  cartCount: {
    marginLeft: '5px',
    fontWeight: 'bold',
  },
};

export default Navbar;
