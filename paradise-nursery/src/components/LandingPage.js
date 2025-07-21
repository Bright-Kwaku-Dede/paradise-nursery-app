// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for the finest house plants to bring nature into your home.</p>
      <Link to="/products">
        <button className="btn">Shop Now</button>
      </Link>
    </div>
  );
};

export default LandingPage;