import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Link</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Graphic Designing</li>
            <li>Mobile Application Development</li>
            <li>Website Development</li>
            <li>Web To App Converter</li>
            <li>Game Development</li>
            <li>UI Design</li>
            <li>Poster Design</li>
            <li>Logo Design</li>
            <li>Custom CRM / ERP</li>
            <li>Maintenance Services</li>
            <li>Contact Us</li>
            <li>Payments</li>
            <li>
              <button className="pay-now">Pay Now</button>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">OUR ADDRESS</h3>
          <p>Cogent Web Services</p>
          <p>Assotech Business Cresterra,</p>
          <p>Sector-135, Noida, Uttar Pradesh, India, 201304</p>
          <p>📞 : +91-7080855524</p>
          <p>📧 : inquiry@cwservices.co.in</p>
          <div className="footer-buttons">
            <button className="call-btn">Call Now</button>
            <button className="mail-btn">Mail Now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2021 Cogent Web Services | <a href="/">Terms & Conditions</a> | <a href="/">Privacy Policy</a> |
          <a href="/">Refund Policy</a> | <a href="/">Shipping Policy</a>
        </p>
        <div className="social-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          <img src="https://cdn-icons-png.flaticon.com/512/145/145799.png" alt="Facebook" />
          <img src="https://cdn-icons-png.flaticon.com/512/145/145805.png" alt="Instagram" />
          <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Behance" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111498.png" alt="Pinterest" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
