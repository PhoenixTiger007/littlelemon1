// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// App.js
// import Header from './Components/Header';
import './index.css'; // Import index.css first
import './App.css';   // Import App.css second

import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import About from './Components/About';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;


