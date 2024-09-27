import React from 'react'

// Referral Program Page
const ReferralProgram = () => {
    return (
      <div className="mt-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Refer & Earn</h2>
        <div className="bg-white shadow-lg p-8 rounded-lg text-center">
          <img
            src="/images/refer-and-earn.png"
            alt="Refer and Earn"
            className="mx-auto w-48 h-48 object-cover mb-6"
          />
          <p className="text-lg text-gray-700 mb-4">
            Refer your friends and earn rewards when they make their first purchase!
          </p>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md">
            Share Referral Link
          </button>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal list-inside text-left space-y-2">
              <li>Invite your friends via your unique referral link.</li>
              <li>They make their first purchase on Mitti Mahal.</li>
              <li>You both earn reward points.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReferralProgram;
  

