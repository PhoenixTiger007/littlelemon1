import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return initializeTimes();
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="main-container">
      <h1>Reserve Your Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Main;
