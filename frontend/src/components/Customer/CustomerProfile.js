import React, { useState, useEffect } from 'react';

const CustomerProfile = ({ customerId, getCustomer, updateCustomer }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Fetch customer details based on the customerId from the backend
    getCustomer(customerId).then((data) => {
      setCustomerData({
        name: data.name,
        email: data.email
      });
    });
  }, [customerId, getCustomer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update customer details in the backend
    updateCustomer(customerId, customerData); // Send updated customerData to the backend
    // Show success message or handle state changes upon successful update
  };

  return (
    <div>
      <h2>Customer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default CustomerProfile;
