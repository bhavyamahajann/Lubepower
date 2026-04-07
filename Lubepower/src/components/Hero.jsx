import React from "react";
import "./Hero.css";

const stats = [
  { value: "500+", label: "Products" },
  { value: "20+", label: "Years Experience" },
  { value: "10K+", label: "Happy Clients" },
  { value: "50+", label: "Industries Served" },
];

const features = [
  { icon: "🏆", label: "Premium Quality" },
  { icon: "🛡️", label: "Engine Protection" },
  { icon: "🚚", label: "Fast Delivery" },
  { icon: "🔧", label: "Expert Support" },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background decorations */}
      <div className="hero__bg-shape hero__bg-shape--1"></div>
      <div className="hero__bg-shape hero__bg-shape--2"></div>

      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge__dot"></span>
            India's Trusted Lubricant Brand
          </div>

          <h1 className="hero__title">
            MAXIMUM<br />
            <span className="hero__title--accent">PERFORMANCE</span><br />
            <span className="hero__title--sub">Every Drop Counts</span>
          </h1>

          <p className="hero__desc">
            LubePower delivers high-performance lubricants engineered for
            industrial and automotive excellence. Trusted by professionals
            across India for over 20 years.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              Explore Products
              <span className="btn__arrow">→</span>
            </a>
            <a href="#contact" className="btn btn--outline">
              Get a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual">
          <div className="visual__card">
            <div className="visual__icon">⚙️</div>
            <div className="visual__lines">
              <div className="vline vline--1"></div>
              <div className="vline vline--2"></div>
              <div className="vline vline--3"></div>
            </div>
            <div className="visual__label">
              <span>HIGH PERFORMANCE</span>
              <span>INDUSTRIAL GRADE</span>
              <span className="visual__highlight">LUBEPOWER</span>
            </div>
            <div className="visual__badge">
              <span>ISO</span>
              <span>Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="hero__features">
        {features.map((f, i) => (
          <div className="feature" key={i}>
            <span className="feature__icon">{f.icon}</span>
            <span className="feature__label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
