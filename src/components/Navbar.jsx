import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const PHONE_NUMBER = "+919914708800";
const PHONE_LABEL = "+91 99147-08800";
const EMAIL = "customer@lubepower.in";
const PHONE_ICON = "\uD83D\uDCDE";
const EMAIL_ICON = "\u2709\uFE0F";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
        <div className="navbar__logo">
          <a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="LubePower Logo" className="navbar__logo-img" />
          </a>
        </div>

        <ul className="navbar__links">
          <li><a onClick={() => scrollTo("home")} className="nav-link" style={{cursor:"pointer"}}>Home</a></li>
          <li><a onClick={() => scrollTo("products")} className="nav-link" style={{cursor:"pointer"}}>Products</a></li>
          <li><a onClick={() => scrollTo("about")} className="nav-link" style={{cursor:"pointer"}}>About</a></li>
          <li><a onClick={() => scrollTo("contact")} className="nav-link" style={{cursor:"pointer"}}>Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <a href={`tel:${PHONE_NUMBER}`} className="navbar__contact-link navbar__contact-link--phone" aria-label={`Call ${PHONE_LABEL}`}>
            <span aria-hidden="true">{PHONE_ICON}</span>
            <span>Call Now</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="navbar__contact-link navbar__contact-link--email" aria-label={`Email ${EMAIL}`}>
            <span aria-hidden="true">{EMAIL_ICON}</span>
            <span>Email Us</span>
          </a>
          <a onClick={() => scrollTo("contact")} className="navbar__cta" style={{cursor:"pointer"}}>
            Get a Quote
          </a>
        </div>

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

      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        <a onClick={() => { scrollTo("home"); setMenuOpen(false); }} style={{cursor:"pointer"}}>Home</a>
        <a onClick={() => { scrollTo("products"); setMenuOpen(false); }} style={{cursor:"pointer"}}>Products</a>
        <a onClick={() => { scrollTo("about"); setMenuOpen(false); }} style={{cursor:"pointer"}}>About</a>
        <a onClick={() => { scrollTo("contact"); setMenuOpen(false); }} style={{cursor:"pointer"}}>Contact</a>
        <a href={`tel:${PHONE_NUMBER}`} onClick={() => setMenuOpen(false)}>{PHONE_ICON} Call Now: {PHONE_LABEL}</a>
        <a href={`mailto:${EMAIL}`} onClick={() => setMenuOpen(false)}>{EMAIL_ICON} Email Us</a>
        <a onClick={() => { scrollTo("contact"); setMenuOpen(false); }} className="mobile__cta" style={{cursor:"pointer"}}>Get a Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;