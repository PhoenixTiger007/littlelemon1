import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import heroImage from '../assets/images/restauranfood1.jpg'; 

function Hero() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleReserveClick = () => {
    navigate('/reservations'); // Navigate to the reservations page
  };

  return (
    <section className="hero-container" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">Little Lemon</h1>
        <p className="hero-location">Chicago</p>
        <p className="hero-description">
          Experience the best of Mediterranean cuisine in the heart of Chicago.
          Our dishes are prepared with the freshest ingredients to bring you a
          taste of the Mediterranean.
        </p>
        <button
          className="reserve-button"
          onClick={handleReserveClick}
          aria-label="Reserve a table at Little Lemon"
        >
          Reserve a Table
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Interior view of Little Lemon Restaurant"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
