import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState(''); // State for success or error message
  const [error, setError] = useState(''); // State for validation error message

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!date || !time || !guests || !occasion) {
      setError('Please fill out all fields.');
      return;
    }

    // If validation passes, proceed with form submission
    setError(''); // Clear any previous error messages
    console.log('Form submitted:', { date, time, guests, occasion });
    
    // Display success message
    setMessage('Your Booking has now been placed.');

    // Clear the form fields
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
    
    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="10"
        />
        
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        
        <input type="submit" value="Make Your Reservation" />
      </form>

      {/* Error message */}
      {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{error}</p>}
      
      {/* Success message */}
      {message && <p style={{ textAlign: 'center', color: 'green', marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default BookingForm;
