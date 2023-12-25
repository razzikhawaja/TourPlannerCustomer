import React from 'react';
import TourDetails from '../components/TourDetails'; // Import your TourDetails component

const TourDetailsView = ({ match }) => {
  const { tourId } = match.params; // Extract tourId from the URL params

  return (
    <div>
      <h1>Tour Details</h1>
      <TourDetails tourId={tourId} /> {/* Pass the tourId as a prop to the TourDetails component */}
      {/* Other components or content for displaying tour details */}
    </div>
  );
};

export default TourDetailsView;
