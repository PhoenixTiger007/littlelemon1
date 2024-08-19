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
    <header>
      <nav className="nav-container" aria-label="Main Navigation">
        <Link to="/" onClick={closeMenu}>
          <img src="./src/assets/images/Logo.jpg" alt="Little Lemon Logo" className="nav-logo" />
        </Link>
        <div 
          className={`nav-links-container ${isOpen ? 'open' : ''}`}
          aria-expanded={isOpen}
          aria-controls="nav-links"
        >
          <ul id="nav-links" className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
            <li><Link to="/order-online" onClick={closeMenu}>Order Online</Link></li>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          </ul>
         
          {isOpen && (
            <button 
              className="close-button" 
              onClick={closeMenu} 
              aria-label="Close navigation menu"
            >
              ✖
            </button>
          )}
        </div>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-expanded={isOpen} 
          aria-controls="nav-links"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Nav;
