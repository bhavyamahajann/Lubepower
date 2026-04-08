import React from "react";
import "./Hero.css";

const GearIcon = () => (
  <svg viewBox="0 0 80 80" className="visual__gear" aria-hidden="true">
    <circle cx="40" cy="40" r="12" className="visual__gear-core" />
    <path
      className="visual__gear-ring"
      d="M69.5 45.2v-10.4l-7.3-1.8a23.6 23.6 0 0 0-2.5-6.1l3.9-6.5-7.3-7.3-6.5 3.9a23.6 23.6 0 0 0-6.1-2.5l-1.8-7.3H34.8L33 14.5a23.6 23.6 0 0 0-6.1 2.5l-6.5-3.9-7.3 7.3 3.9 6.5a23.6 23.6 0 0 0-2.5 6.1l-7.3 1.8v10.4l7.3 1.8a23.6 23.6 0 0 0 2.5 6.1l-3.9 6.5 7.3 7.3 6.5-3.9a23.6 23.6 0 0 0 6.1 2.5l1.8 7.3h10.4l1.8-7.3a23.6 23.6 0 0 0 6.1-2.5l6.5 3.9 7.3-7.3-3.9-6.5a23.6 23.6 0 0 0 2.5-6.1l7.3-1.8ZM40 54.5A14.5 14.5 0 1 1 40 25.5a14.5 14.5 0 0 1 0 29Z"
    />
  </svg>
);

const stats = [
  { value: "500+", label: "Products" },
  { value: "20+", label: "Years Experience" },
  { value: "10K+", label: "Happy Clients" },
  { value: "50+", label: "Industries Served" },
];

const features = [
  { icon: "\uD83C\uDFC6", label: "Premium Quality" },
  { icon: "\uD83D\uDEE1\uFE0F", label: "Engine Protection" },
  { icon: "\uD83D\uDE9A", label: "Fast Delivery" },
  { icon: "\uD83D\uDD27", label: "Expert Support" },
];

const highlights = [
  { title: "OEM Grade Formulations", text: "Built for passenger vehicles, heavy-duty fleets, and industrial equipment." },
  { title: "Bulk Supply Ready", text: "Fast dispatch support for distributors, workshops, and large plants." },
  { title: "Technical Guidance", text: "Help choosing viscosity, performance grade, and application fit." },
];

const applicationList = [
  "Passenger cars and motorcycles",
  "Truck, bus, and fleet maintenance",
  "Hydraulic and industrial machinery",
  "Agriculture and construction equipment",
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-shape hero__bg-shape--1"></div>
      <div className="hero__bg-shape hero__bg-shape--2"></div>

      <div className="hero__container">
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
            LubePower delivers high-performance lubricants engineered for industrial and
            automotive excellence. Trusted by professionals across India for over 20 years.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              Explore Products
              <span className="btn__arrow">&rarr;</span>
            </a>
            <a href="#contact" className="btn btn--outline">
              Get a Quote
            </a>
          </div>

          <div className="hero__highlights">
            {highlights.map((item) => (
              <div className="hero__highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-stack">
            <div className="visual__card">
              <div className="visual__icon">
                <GearIcon />
              </div>
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

            <div className="hero__trust-card">
              <span className="hero__trust-label">Applications We Support</span>
              <ul className="hero__applications">
                {applicationList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="hero__trust-link">Talk to Our Team</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__features">
        {features.map((f) => (
          <div className="feature" key={f.label}>
            <span className="feature__icon">{f.icon}</span>
            <span className="feature__label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;