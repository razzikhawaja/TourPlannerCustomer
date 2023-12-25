import React, { useEffect, useState } from 'react';

const TourReviews = ({ tourId, getReviewsForTour }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specified tourId from the backend
    getReviewsForTour(tourId).then((data) => {
      setReviews(data);
    });
  }, [tourId, getReviewsForTour]);

  return (
    <div>
      <h2>Reviews for this Tour</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              {/* Display additional review details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TourReviews;
