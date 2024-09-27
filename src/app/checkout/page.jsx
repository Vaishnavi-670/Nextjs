import React from 'react'

// Secure Checkout Page
const CheckoutPage = () => {
    return (
      <div className="mt-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Secure Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Summary */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex items-center mb-4">
              <img
                src="/images/clay-pot.jpg"
                alt="Product"
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <h4 className="text-lg font-medium">Handcrafted Clay Pot</h4>
                <p className="text-gray-600">Qty: 1</p>
                <p className="text-red-600 font-bold mt-1">$45.00</p>
              </div>
            </div>
            <hr className="my-4" />
            <p className="text-gray-700 font-semibold">Total: <span className="text-red-600">$45.00</span></p>
          </div>
  
          {/* Shipping & Payment Form */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border-gray-300 rounded-md" />
              <input type="text" placeholder="Address" className="w-full p-3 border-gray-300 rounded-md" />
              <input type="text" placeholder="City" className="w-full p-3 border-gray-300 rounded-md" />
              <input type="text" placeholder="Postal Code" className="w-full p-3 border-gray-300 rounded-md" />
              <input type="text" placeholder="Phone Number" className="w-full p-3 border-gray-300 rounded-md" />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md">Proceed to Payment</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckoutPage;
  

