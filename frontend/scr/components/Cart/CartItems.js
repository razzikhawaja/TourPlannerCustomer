import React from 'react';

const CartItem = ({ item, updateCartItem, removeFromCart }) => {
  const handleUpdateQuantity = (newQuantity) => {
    // Logic to update quantity of an item in the cart
    // Example: Trigger a function passed as props to update item quantity
    updateCartItem(item.cartId, item.tourId, newQuantity);
  };

  const handleRemoveItem = () => {
    // Logic to remove an item from the cart
    // Example: Trigger a function passed as props to remove item
    removeFromCart(item.cartId, item.tourId);
  };

  return (
    <div>
      <p>Tour: {item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => handleUpdateQuantity(item.quantity + 1)}>Increase Quantity</button>
      <button onClick={() => handleUpdateQuantity(item.quantity - 1)}>Decrease Quantity</button>
      <button onClick={handleRemoveItem}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
