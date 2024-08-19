import React from 'react';

function Footer() {
  return (
    <footer className="footer-container" role="contentinfo">
      <div className="footer-column">
        <img src="./src/assets/images/logo2.png" alt="Little Lemon Logo" className="footer-logo" />
      </div>
      
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul className="footer-nav" aria-label="Footer Navigation">
          <li><a href="/" aria-label="Navigate to Home Page">Home</a></li>
          <li><a href="/about" aria-label="Navigate to About Page">About</a></li>
          <li><a href="/menu" aria-label="Navigate to Menu Page">Menu</a></li>
          <li><a href="/reservations" aria-label="Navigate to Reservations Page">Reservations</a></li>
          <li><a href="/order-online" aria-label="Navigate to Order Online Page">Order Online</a></li>
          <li><a href="/login" aria-label="Navigate to Login Page">Login</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact</h3>
        <address className="footer-contact">
          <p>123 Lemon Street, Chicago, IL</p>
          <p>Phone: <a href="tel:+11234567890" aria-label="Call us at 123-456-7890">(123) 456-7890</a></p>
          <p>Email: <a href="mailto:contact@littlelemon.com" aria-label="Email us at contact@littlelemon.com">contact@littlelemon.com</a></p>
        </address>
      </div>

      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="footer-social" aria-label="Social Media Links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our TikTok profile">TikTok</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel">YouTube</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
