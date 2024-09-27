import React from 'react'

// Loyalty Program Page
const LoyaltyProgramPage = ({ points }) => {
    return (
      <div className="mt-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Loyalty Program</h2>
        <div className="bg-white shadow-lg p-8 rounded-lg text-center">
          <img
            src="/images/loyalty-points.png"
            alt="Loyalty Points"
            className="mx-auto w-48 h-48 object-cover mb-6"
          />
          <p className="text-lg text-gray-700 mb-4">You have <span className="font-semibold text-indigo-600">{points}</span> loyalty points available to redeem!</p>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-md">
            Redeem Points
          </button>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">How to Earn Points</h3>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Earn 1 point for every $1 spent on Mitti Mahal.</li>
              <li>Get bonus points on special events or holidays.</li>
              <li>Redeem points for discounts on your future purchases.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoyaltyProgramPage;
  