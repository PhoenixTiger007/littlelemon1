import './index.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Main from './Components/Main'; 
import ConfirmedBooking from './Components/ConfirmedBooking.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <div role="main"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/reservations" element={<Main />} /> 
          <Route path="/order-online" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Hero />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
