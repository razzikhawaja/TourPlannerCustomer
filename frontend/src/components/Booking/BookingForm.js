import React, { useState } from 'react';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    tourId: '',
    customerId: '',
    bookingDate: '',
    status: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and send booking data to the backend
    console.log('Booking Data:', bookingData);
    // Add code to make API call to create a booking
    // Reset form fields after successful submission
    setBookingData({
      tourId: '',
      customerId: '',
      bookingDate: '',
      status: 'pending'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Create a Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tour ID:
          <input
            type="text"
            name="tourId"
            value={bookingData.tourId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Customer ID:
          <input
            type="text"
            name="customerId"
            value={bookingData.customerId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Booking Date:
          <input
            type="date"
            name="bookingDate"
            value={bookingData.bookingDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
