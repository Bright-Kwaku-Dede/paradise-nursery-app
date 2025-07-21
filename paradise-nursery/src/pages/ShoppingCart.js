// src/pages/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cart/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartItemsArray = Object.entries(cartItems);

  const totalCost = cartItemsArray.reduce((acc, [id, item]) => {
    return acc + (item.cost * item.quantity);
  }, 0);

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  if (cartItemsArray.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <Link to="/products"><button className="btn">Continue Shopping</button></Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItemsArray.map(([id, item]) => (
        <div key={id} className="cart-item-card">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Unit Cost: ${item.cost}</p>
            <p>Total Cost: ${item.cost * item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decrementQuantity({ id }))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity({ id }))}>+</button>
            </div>
            <button className="btn-delete" onClick={() => dispatch(removeFromCart({ id }))}>Delete</button>
          </div>
        </div>
      ))}
      <h3>Total Cart Cost: ${totalCost.toFixed(2)}</h3>
      <div className="cart-actions">
        <Link to="/products"><button className="btn">Continue Shopping</button></Link>
        <button className="btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;