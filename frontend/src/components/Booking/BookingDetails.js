import React, { useState, useEffect } from 'react';

const BookingDetails = ({ bookingId }) => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Fetch booking details from the backend using the bookingId
    // Add code to make API call to fetch booking details by ID
    // Example: fetchBookingDetails(bookingId).then((data) => setBooking(data));
    // Replace fetchBookingDetails with your actual API call function
    // For demonstration purposes, setting a sample booking object:
    const sampleBooking = {
      id: bookingId,
      tour: 'Sample Tour',
      customer: 'Sample Customer',
      bookingDate: '2023-12-31',
      status: 'confirmed'
    };
    setBooking(sampleBooking);
  }, [bookingId]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Booking ID: {booking.id}</p>
      <p>Tour: {booking.tour}</p>
      <p>Customer: {booking.customer}</p>
      <p>Booking Date: {booking.bookingDate}</p>
      <p>Status: {booking.status}</p>
      {/* Additional display of other booking details */}
    </div>
  );
};

export default BookingDetails;
