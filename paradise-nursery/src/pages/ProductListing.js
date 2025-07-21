// src/pages/ProductListing.js
import React from 'react';
import { plants } from '../data/plantData';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  // Group plants by category
  const categories = plants.reduce((acc, plant) => {
    acc[plant.category] = acc[plant.category] || [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-listing-page">
      {Object.entries(categories).map(([category, plantsInCategory]) => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plantsInCategory.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListing;