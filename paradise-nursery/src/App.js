// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Component & Page Imports ---
// These lines will show an error until you create the files
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';

// --- Stylesheet Import ---
import './styles/main.css'; // You can create this file for your main styles

function App() {
  return (
    <Router>
      {/* The Header will appear on every page because it's outside the <Routes> */}
      <Header />

      {/* The <Routes> component will only render the one <Route> that matches the URL */}
      <Routes>
        {/* Route for the home/landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the product listing page */}
        <Route path="/products" element={<ProductListing />} />

        {/* Route for the shopping cart page */}
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;

