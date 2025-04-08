import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">COGENT<br />WEB SERVICES</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#mobile">Mobile App Development</a>
          <a href="#website">Website Development</a>
          <a href="#logo">Logo Design</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <div className="call-box">
          <a href="tel:+917080855524">Call Now +91-7080855524</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trust in Your Imagination</h1>
            <p>We Design & Develop Android and iOS Mobile Application for Your Business</p>
            <button className="call-button" onClick={() => window.location.href = 'tel:+917080855524'}>Call Now</button>
          </div>
          <div className="hero-bg">
            <img src="/images/hero.jpg" alt="Mobile App" />
          </div>
        </div>
        <a className="floating-phone" href="tel:+917080855524">
          <img src="/images/phone-icon.png" alt="Call" />
        </a>
        <a className="floating-whatsapp" href="https://wa.me/917080855524">
          <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </section>
    </div>
  );
}

export default App;
