import React from 'react';
import CustomerProfile from '../components/CustomerProfile'; // Import your CustomerProfile component

const CustomerDashboard = () => {
  return (
    <div>
      <h1>Welcome to Customer Dashboard</h1>
      <CustomerProfile /> {/* Render the CustomerProfile component */}
      {/* Other components related to customer dashboard */}
    </div>
  );
};

export default CustomerDashboard;
