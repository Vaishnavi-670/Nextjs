import React from 'react'

// Wishlist Page
const WishlistPage = ({ wishlistItems }) => {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Your Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md p-5 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
              <p className="mt-2 text-gray-600">${item.price}</p>
              <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md">
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default WishlistPage;
