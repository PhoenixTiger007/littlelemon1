import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <img src="./src/assets/images/Logo.jpg" alt="Little Lemon Logo" className="nav-logo" />
      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/menu" onClick={toggleMenu}>Menu</a></li>
          <li><a href="/reservations" onClick={toggleMenu}>Reservations</a></li>
          <li><a href="/order-online" onClick={toggleMenu}>Order Online</a></li>
          <li><a href="/login" onClick={toggleMenu}>Login</a></li>
        </ul>
        {/* Close button */}
        {isOpen && (
          <button className="close-button" onClick={toggleMenu}>
            ✖
          </button>
        )}
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Nav;
