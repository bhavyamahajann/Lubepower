import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const badges = [
  "\uD83C\uDFC6 ISO 9001:2015",
  "\uD83C\uDDEE\uD83C\uDDF3 Made in India",
];

const contactItems = [
  "\uD83D\uDCCD SCO 85-86, 1st Floor, 17D, Chandigarh, 160017",
  "\uD83D\uDCDE +91 99147-08800",
  "\u2709\uFE0F customer@lubepower.in",
  "\u23F0 Mon-Sat: 9AM - 6PM",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="LubePower" className="footer__logo-img" />
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
            {badges.map((badge) => (
              <span className="badge" key={badge}>{badge}</span>
            ))}
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
            <li><a href="#products">Engine Oil</a></li>
            <li><a href="#products">Gear Oil</a></li>
            <li><a href="#products">Lubricating Grease Calcium</a></li>
            <li><a href="#products">Synthetic Oil</a></li>
            <li><a href="#products">Bike Engine Oil</a></li>
            <li><a href="#products">Lubricating Oil</a></li>
            <li><a href="#products">Coolant Oil</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Contact</h4>
          <ul>
            {contactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 LubePower PVT LTD. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
