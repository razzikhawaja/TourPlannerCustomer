import React, { useEffect, useState } from 'react';

const WishlistItems = ({ customerId, getWishlist }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Fetch wishlist items for the specified customerId from the backend
    getWishlist(customerId).then((data) => {
      setWishlistItems(data);
    });
  }, [customerId, getWishlist]);

  const handleRemoveFromWishlist = (tourId) => {
    // Logic to remove an item from the wishlist
    // Example: Trigger a function passed as props to remove tour from wishlist
    // removeFromWishlist(customerId, tourId);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <p>Tour: {item.name}</p>
              <button onClick={() => handleRemoveFromWishlist(item.tourId)}>Remove from Wishlist</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistItems;
