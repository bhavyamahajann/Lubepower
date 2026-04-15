import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const badges = [
  "🏆 ISO 9001:2015",
  "🇮🇳 Made in India",
];

const contactItems = [
  {
    icon: "📍",
    label: "Head Office",
    value: "SCO 85-86, 1st Floor, 17D, Chandigarh, 160017",
  },
  {
    icon: "🏭",
    label: "Plant",
    value:
      "Plot No. 127, Maruti Industrial Estate, Bardoli Road, Saybe Mill, Jolva, Kadodara, Surat, Gujarat, 394305",
  },
  { icon: "📞", label: "Phone", value: "+91 99147-08800" },
  { icon: "✉️", label: "Email", value: "customer@lubepower.in" },
  { icon: "⏰", label: "Hours", value: "Mon-Sat: 9AM - 6PM" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
            High-performance lubricants engineered for industrial and automotive
            excellence. Trusted by professionals across India since 2003.
          </p>
          <div className="footer__badges">
            {badges.map((badge) => (
              <span className="badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="footer__links-group">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("about")}
                style={{ cursor: "pointer" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("why-us")}
                style={{ cursor: "pointer" }}
              >
                Why LubePower
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("contact")}
                style={{ cursor: "pointer" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Products</h4>
          <ul>
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
               WORLD RIDE
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
                SMOOTH PRO / WORLD PRO 
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
               SMOOTHX
              </a>
            </li>
            
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
               WORLD POWER 
              </a>
            </li>
            
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
                PREMIUM
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
                PREMIUMRIDE PLUS
              </a>
            </li>
             <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
               ULTRA RIDE / TURBO POWER 
              </a>
            </li>
             <li>
              <a
                onClick={() => scrollTo("products")}
                style={{ cursor: "pointer" }}
              >
              SYNTHETIC X 
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Contact</h4>
          <ul className="footer__contact-list">
            {contactItems.map((item) => (
              <li key={item.label} className="footer__contact-item">
                <span className="footer__contact-icon">{item.icon}</span>
                <span className="footer__contact-text">
                  <strong className="footer__contact-label">
                    {item.label}
                  </strong>
                  <span className="footer__contact-value">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 LubePower PVT LTD. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
            Privacy Policy
          </a>
          <a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;