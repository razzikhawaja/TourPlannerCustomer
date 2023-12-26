import React from 'react';
import TourList from '../components/TourList'; // Import your TourList component

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Tour Management Application!</h1>
      <TourList /> {/* Render the TourList component */}
      {/* Other components or content for the home page */}
    </div>
  );
};

export default Home;
