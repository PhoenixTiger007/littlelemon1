import React, { useState } from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) { 
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({ time: '' }); // State to handle specific form errors

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setFormErrors({ time: '' });

    // Validate time selection
    if (!formData.time) {
      setFormErrors({ time: 'Please select a valid time.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitForm(formData); 
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert('An error occurred while placing your booking. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Reserve Your Table</h2>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        aria-required="true"
        disabled={isSubmitting}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        aria-required="true"
        pattern="[0-9]{10}" 
        disabled={isSubmitting}
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        aria-required="true"
        disabled={isSubmitting}
      />

      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        required
        aria-required="true"
        disabled={isSubmitting}
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={formData.time}
        onChange={handleChange}
        required
        aria-required="true"
        disabled={isSubmitting || availableTimes.length === 0}
        aria-invalid={!!formErrors.time} // Mark the field as invalid if there's an error
      >
        <option value="">Choose a time</option> {/* Updated default option */}
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {/* Display specific error message under the time selector */}
      {formErrors.time && (
        <div style={{ color: 'red' }} aria-live="polite">
          {formErrors.time}
        </div>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
        aria-required="true"
        disabled={isSubmitting}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
        aria-required="true"
        disabled={isSubmitting}
      >
        <option value="">Choose Occasion</option> {/* Updated default option */}
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value={isSubmitting ? 'Submitting...' : 'Make Your Reservation'}
        aria-label="Make Your Reservation"
        disabled={isSubmitting}
      />

      {isSubmitting && <div aria-live="polite">Submitting your reservation...</div>}
    </form>
  );
}

export default BookingForm;
