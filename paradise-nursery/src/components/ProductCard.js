// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p className="cost">${plant.cost}</p>
      <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;