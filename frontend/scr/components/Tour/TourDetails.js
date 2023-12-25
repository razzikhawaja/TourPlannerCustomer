import React, { useEffect, useState } from 'react';

const TourDetails = ({ tourId, getTourDetails }) => {
  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    // Fetch details for the specified tourId from the backend
    getTourDetails(tourId).then((data) => {
      setTourDetails(data);
    });
  }, [tourId, getTourDetails]);

  return (
    <div>
      {tourDetails ? (
        <div>
          <h2>{tourDetails.title}</h2>
          <p>Description: {tourDetails.description}</p>
          <p>Price: {tourDetails.price}</p>
          <p>Duration: {tourDetails.duration}</p>
          {/* Display additional tour details */}
        </div>
      ) : (
        <p>Loading tour details...</p>
      )}
    </div>
  );
};

export default TourDetails;
