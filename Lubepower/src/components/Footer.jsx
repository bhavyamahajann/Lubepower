import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/src/assets/logo.png" alt="LubePower" className="footer__logo-img" onError={(e) => { e.target.style.display='none'; }} />
            <div className="footer__logo-text">
              <span className="footer__name">LUBEPOWER</span>
              <span className="footer__tag">PVT LTD</span>
            </div>
          </div>
          <p className="footer__tagline">
            High-performance lubricants engineered for industrial and automotive excellence. 
            Trusted by professionals across India since 2003.
          </p>
          <div className="footer__badges">
            <span className="badge">🏆 ISO 9001:2015</span>
            <span className="badge">🇮🇳 Made in India</span>
          </div>
        </div>

        <div className="footer__links-group">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#why-us">Why LubePower</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Engine Oils</a></li>
            <li><a href="#products">Gear Oils</a></li>
            <li><a href="#products">Hydraulic Oils</a></li>
            <li><a href="#products">Greases</a></li>
            <li><a href="#products">Specialty Lubricants</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Contact</h4>
          <ul>
            <li>📍 SCO 85-86, 1st Floor, 17D, Chandigarh, 160017</li>
            <li>📞 +91 99147-08800</li>
            <li>✉️ customer@lubepower.in</li>
            <li>⏰ Mon–Sat: 9AM – 6PM</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 LubePower PVT LTD. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
