import React from 'react';
import './App.css';
import Footer from './Footer';


function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          COGENT<br />WEB SERVICES
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#mobile" onClick={() => setMenuOpen(false)}>Mobile App Development</a>
          <a href="#website" onClick={() => setMenuOpen(false)}>Website Development</a>
          <a href="#logo" onClick={() => setMenuOpen(false)}>Logo Design</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        </nav>

        <div className="call-box">
          <a href="tel:+917080855524">Call Now +91-7080855524</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trust in Your Imagination</h1>
            <p>We Design & Develop Android and iOS Mobile Application for Your Business</p>
            <button
              className="call-button"
              onClick={() => window.location.href = 'https://wa.me/917080855524'}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsapp-icon"
              />
              Chat on WhatsApp
            </button>
          </div>
          <div className="hero-bg">
            <img
              src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056151.jpg"
              alt="Mobile App Illustration"
            />
          </div>
        </div>

        <a className="floating-phone" href="tel:+917080855524">
          <img
            src="https://cdn-icons-png.flaticon.com/512/15/15874.png"
            alt="Phone"
          />
        </a>

        <a className="floating-whatsapp" href="https://wa.me/917080855524">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </section>

      <section className="strategy-section" id="strategy">
        <div className="strategy-content">
          <div className="strategy-text">
            <h2><span className="bar"></span>Strategy We Attain</h2>
            <p>
              We approach each & every phase of the product development process that adds value and
              transforms every spectrum of your business idea & tends you to excel towards your ambitions.
            </p>

            <div className="strategy-steps">
            <img
        src="https://cwservices.co.in/assets/home/workflow.svg"
        alt="Strategy Workflow"
      />
            </div>
          </div>

          <div className="strategy-image animated-circle">
            <img
              src="https://cwservices.co.in/assets/home/strategy.gif"
              alt="Strategy Graphic"
            />
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default App;

