// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">Paradise Nursery</Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItemCount})</Link>
      </nav>
    </header>
  );
};

export default Header;