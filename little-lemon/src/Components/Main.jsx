import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api'; 
import { useNavigate } from 'react-router-dom'; 

// Helper function to get today's date
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Initialize available times
function initializeTimes() {
  return fetchAPI(new Date(getTodayDate())); 
}

// Reducer to update available times based on selected date
function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.date)); 
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [currentBookings, setCurrentBookings] = useState([]);
  const navigate = useNavigate(); 

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setCurrentBookings(savedBookings);
  }, []);

  // Handle a new booking and save to localStorage
  const handleNewBooking = (newBooking) => {
    const updatedBookings = [...currentBookings, newBooking];
    setCurrentBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  // Handle form submission
  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      handleNewBooking(formData);
      navigate('/confirmed'); 
    } else {
      alert('Failed to place your booking. Please try again.');
    }
  };

  return (
    <main className="main-container">
      <h1>Reserve Your Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      
     
      {/* <h2>Current Bookings</h2>
      <table border="1" aria-label="List of current bookings">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{booking.name}</td>
              <td>{booking.time}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </main>
  );
}

export default Main;
