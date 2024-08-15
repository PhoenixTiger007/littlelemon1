import React from 'react';
import heroImage from '../assets/images/restauranfood.jpg'; // Adjust the path based on your project structure

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-location">Chicago</p>
        <p className="hero-description">
          Experience the best of Mediterranean cuisine in the heart of Chicago.
          Our dishes are prepared with the freshest ingredients to bring you a
          taste of the Mediterranean.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Little Lemon Restaurant" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
