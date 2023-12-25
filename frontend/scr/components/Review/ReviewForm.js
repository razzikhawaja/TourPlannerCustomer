import React, { useState } from 'react';

const ReviewForm = ({ tourId, customerId, addReview }) => {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const handleRatingChange = (newRating) => {
    setReviewData({
      ...reviewData,
      rating: newRating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the review data to the backend
    addReview({ tourId, customerId, ...reviewData });
    // Reset form fields or show success message upon successful review submission
    setReviewData({
      rating: 0,
      comment: ''
    });
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={reviewData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={reviewData.comment}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
