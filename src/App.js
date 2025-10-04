import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Nav />

      {/* Main Hero Section */}
      <Main />

      {/* Menu Section */}
      <Menu />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About / Owner Section */}
      <About />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;