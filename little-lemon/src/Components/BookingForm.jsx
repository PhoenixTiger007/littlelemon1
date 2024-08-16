import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  // State variables for new fields
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // Existing state variables
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log all form data for now
    console.log('Form submitted:', { name, phoneNumber, email, date, time, guests, occasion });

    // Reset form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');

    alert('Your booking has been placed!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Reserve Your Table</h2>

      {/* Name Field */}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        aria-required="true"
      />

      {/* Phone Number Field */}
      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        aria-required="true"
        pattern="[0-9]{10}" // Simple validation for 10-digit phone numbers
      />

      {/* Email Field */}
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-required="true"
      />

      {/* Date Field */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
      />
      
      {/* Time Field */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      
      {/* Number of Guests Field */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
        aria-required="true"
      />
      
      {/* Occasion Field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Make Your Reservation"
      />
    </form>
  );
}

export default BookingForm;
