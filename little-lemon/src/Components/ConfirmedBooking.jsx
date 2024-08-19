import React from 'react';
import '../App.css'; 

function ConfirmedBooking() {
  return (
    <div className="confirmation-container" role="main" aria-labelledby="confirmation-heading">
      <div className="confirmation-box" role="alert" aria-live="assertive">
        <h2 id="confirmation-heading">Booking Confirmed!</h2>
        <p>Your table has been successfully reserved.</p>
        <p>We look forward to seeing you soon!</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
