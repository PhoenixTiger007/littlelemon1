import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src="./src/assets/images/logo2.png" alt="Little Lemon Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <address className="footer-contact">
          <p>123 Lemon Street, Chicago, IL</p>
          {/* <div id="map" className="map-container"></div> */}
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
        </address>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="footer-social">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
