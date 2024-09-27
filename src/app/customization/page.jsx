import React from 'react'

// Customization Section
const ProductCustomization = () => {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Customize Your Product</h2>
        <div className="mt-5 space-y-4">
          <label className="block">
            <span className="text-gray-700">Select Color</span>
            <select className="block w-full mt-1 p-2 border-gray-300 rounded-md">
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Engraving Text (Optional)</span>
            <input type="text" className="block w-full mt-1 p-2 border-gray-300 rounded-md" placeholder="Your Text Here" />
          </label>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-md">Preview Customization</button>
        </div>
      </div>
    );
  };
  

export default ProductCustomization