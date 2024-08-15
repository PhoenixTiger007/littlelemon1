import React from 'react';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-location">Chicago</h3>
          <p className="about-description">
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. Located in the heart of Chicago, our restaurant is known for its friendly service and our chefs' creativity in delivering the freshest ingredients.
          </p>
        </div>
        <div className="about-images">
          <img src="./src/assets/images/about1.jpg" alt="Little Lemon interior" className="about-image about-image-top" />
          <img src="./src/assets/images/about2.jpg" alt="Little Lemon dish" className="about-image about-image-bottom" />
        </div>
      </div>
    </section>
  );
}

export default About;
