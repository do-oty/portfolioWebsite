import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/portfolioAss' : ''}>
      <div className="bg-dark-bg min-h-screen text-white">
        <div className="network-grid min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App; 