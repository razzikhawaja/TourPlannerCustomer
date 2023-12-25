import React from 'react';

const AddToCartButton = ({ tourId, customerId, addToCart }) => {
  const handleAddToCart = () => {
    // Logic to handle adding item to the cart
    // Example: Trigger a function passed as props to add item to cart
    addToCart({ tourId, customerId, quantity: 1 }); // Assuming quantity is set to 1 by default
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
