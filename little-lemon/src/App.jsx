// App.jsx
import './index.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Main from './Components/Main'; // Import Main component

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservations" element={<Main />} /> {/* Use Main component */}
        <Route path="/order-online" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Hero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
