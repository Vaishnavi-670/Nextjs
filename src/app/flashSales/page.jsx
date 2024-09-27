// Flash Sale & Limited-Time Offers Page
import React from 'react';
import Countdown from 'react-countdown';

const FlashSalePage = ({ offers }) => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Flash Sales & Limited-Time Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{offer.name}</h3>
            <p className="text-gray-600 mt-2">Discount: {offer.discount}%</p>
            <p className="text-lg text-red-600 font-bold mt-2">${offer.price}</p>
            <div className="mt-4">
              <Countdown date={offer.expiryDate} renderer={CountdownRenderer} />
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-md">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom Countdown Renderer
const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-red-600 font-bold">Offer expired!</span>;
  } else {
    return (
      <div className="text-center text-gray-700">
        <p className="text-lg font-medium">
          {days}d {hours}h {minutes}m {seconds}s
        </p>
      </div>
    );
  }
};

export default FlashSalePage;
