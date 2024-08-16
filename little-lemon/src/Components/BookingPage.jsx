import React from 'react';
import BookingForm from './BookingForm';
import './App.css'; // Ensure you have this CSS file

function BookingPage() {
  return (
    <div className="booking-page-container">
      <h1 className="booking-page-title">Reserve a Table</h1>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
