import React from 'react'

// Reviews and Ratings Section
const ReviewsSection = ({ reviews }) => {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Customer Reviews</h2>
        <div className="space-y-5">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-md p-5 rounded-lg">
              <div className="flex items-center space-x-3">
                <img src={review.userImage} alt={review.userName} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="text-lg font-medium">{review.userName}</h4>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <p>{review.text}</p>
                <div className="flex mt-2">
                  {Array(review.rating).fill().map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.44 2.42 10.56 2.42 10.951 2.927l1.668 2.542 2.823.41c.6.086.84.832.404 1.261l-2.044 1.993.482 2.809c.103.603-.526 1.063-1.062.775L10 12.347l-2.523 1.327c-.537.288-1.165-.172-1.062-.775l.482-2.809L4.853 7.14c-.436-.429-.196-1.175.404-1.261l2.823-.41 1.668-2.542z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default ReviewsSection