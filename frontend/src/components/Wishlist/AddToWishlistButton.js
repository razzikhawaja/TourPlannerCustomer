import React from 'react';

const AddToWishlistButton = ({ customerId, tourId, addToWishlist }) => {
  const handleAddToWishlist = () => {
    // Logic to handle adding tour to the wishlist
    addToWishlist({ customerId, tourId });
  };

  return (
    <button onClick={handleAddToWishlist}>Add to Wishlist</button>
  );
};

export default AddToWishlistButton;
