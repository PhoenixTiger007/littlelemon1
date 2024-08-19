import React from 'react';
import Main from './Main'; 
import './App.css'; 

function BookingPage() {
  return (
    <div className="booking-page-container">
      <h1 id="booking-page-title" className="booking-page-title">Reserve a Table</h1>
      <Main aria-labelledby="booking-page-title" />
    </div>
  );
}

export default BookingPage;
