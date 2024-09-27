'use client'
import React from 'react'

// Personalized Recommendations Section
const PersonalizedRecommendations = ({ products = [] }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-5 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="mt-2 text-gray-600">${product.price}</p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;