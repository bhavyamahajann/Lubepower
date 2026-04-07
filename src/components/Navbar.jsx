import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const PHONE_NUMBER = "+919914708800";
const PHONE_LABEL = "+91 99147-08800";
const EMAIL = "customer@lubepower.in";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">

        {/* Logo */}
        <div className="navbar__logo">
          <img src={logo} alt="LubePower Logo" className="navbar__logo-img" />
        </div>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#products" className="nav-link">Products</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <a href={`tel:${PHONE_NUMBER}`} className="navbar__contact-link navbar__contact-link--phone" aria-label={`Call ${PHONE_LABEL}`}>
            📞 Call Now
          </a>
          <a href={`mailto:${EMAIL}`} className="navbar__contact-link navbar__contact-link--email" aria-label={`Email ${EMAIL}`}>
            Mail Us
          </a>
          <a href="#contact" className="navbar__cta">
            Get a Quote
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href={`tel:${PHONE_NUMBER}`} onClick={() => setMenuOpen(false)}>📞 Call Now: {PHONE_LABEL}</a>
        <a href={`mailto:${EMAIL}`} onClick={() => setMenuOpen(false)}>Mail Us</a>
        <a href="#contact" className="mobile__cta" onClick={() => setMenuOpen(false)}>Get a Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
