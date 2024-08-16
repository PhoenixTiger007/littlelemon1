import { Link } from 'react-router-dom'; 
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav-container">
      <Link to="/" onClick={closeMenu}>
        <img src="./src/assets/images/Logo.jpg" alt="Little Lemon Logo" className="nav-logo" />
      </Link>
      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
          <li><Link to="/order-online" onClick={closeMenu}>Order Online</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        </ul>
        {/* Close button */}
        {isOpen && (
          <button className="close-button" onClick={closeMenu}>
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
