import React, { useEffect, useState } from 'react';

const TourList = ({ searchTours }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Fetch tours from the backend (search or all tours based on your implementation)
    searchTours({}); // Pass search criteria if needed
    // Update setTours with the fetched tour data
    // Example: setTours(data);
  }, [searchTours]);

  return (
    <div>
      <h2>Tour List</h2>
      {tours.length === 0 ? (
        <p>No tours found.</p>
      ) : (
        <ul>
          {tours.map((tour) => (
            <li key={tour.id}>
              <p>{tour.title}</p>
              <p>Description: {tour.description}</p>
              <p>Price: {tour.price}</p>
              {/* Display additional tour details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TourList;
