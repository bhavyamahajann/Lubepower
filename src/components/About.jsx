import React from "react";
import "./About.css";
import aboutImage from "../assets/lube_shakti_hd.png";

const milestones = [
  { year: "2003", text: "Founded in Punjab, India" },
  { year: "2008", text: "ISO 9001 Certification achieved" },
  { year: "2015", text: "Expanded to 10+ states across India" },
  { year: "2020", text: "Launched 500+ product range" },
  { year: "2024", text: "Serving 10,000+ happy clients" },
];

const stats = [
  { value: "500+", label: "Products" },
  { value: "20+", label: "Years" },
  { value: "10K+", label: "Clients" },
  { value: "20+", label: "States" },
];

const features = [
  { icon: "\uD83D\uDE9A", title: "Pan-India Delivery", desc: "Fast shipping to 20+ states across India", color: "red" },
  { icon: "\uD83D\uDD2C", title: "Lab Tested", desc: "Every batch quality tested before dispatch", color: "blue" },
  { icon: "\u26A1", title: "Bulk Orders", desc: "Special pricing for wholesale and dealers", color: "yellow" },
  { icon: "\uD83E\uDD1D", title: "24/7 Support", desc: "Dedicated team for technical assistance", color: "green" },
];

const whyUs = [
  {
    icon: "\uD83C\uDFC6",
    title: "20+ Years of Trust",
    desc: "Serving India's automotive and industrial sectors since 2003. Thousands of workshops and factories rely on us daily.",
    stat: "10,000+",
    statLabel: "Happy Clients",
    accent: "gold",
  },
  {
    icon: "\uD83E\uDDEA",
    title: "Advanced Formula",
    desc: "Our R&D team uses cutting-edge additive technology to create lubricants that exceed international API and ACEA standards.",
    stat: "500+",
    statLabel: "Products",
    accent: "blue",
  },
  {
    icon: "\uD83C\uDF0D",
    title: "Pan-India Network",
    desc: "With distributors across 20+ states, we ensure fast delivery and local support wherever your business operates.",
    stat: "20+",
    statLabel: "States Covered",
    accent: "red",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__visual">

          {/* FIXED: stats grid is now INSIDE bg-panel */}
          <div className="about__panel-wrap">
            <div className="about__bg-panel">
              <div className="about__stats-grid">
                {stats.map((s) => (
                  <div className="about__stat-card" key={s.label}>
                    <span className="stat__value">{s.value}</span>
                    <span className="stat__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about__badges">
            <div className="about__badge">
              <span className="badge__icon">\uD83C\uDFED</span>
              <div>
                <strong>Made in India</strong>
                <span>Punjab Facility</span>
              </div>
            </div>
            <div className="about__badge about__badge--iso">
              <span className="iso__text">ISO</span>
              <div>
                <strong>9001:2015</strong>
                <span>Certified</span>
              </div>
            </div>
          </div>

          <div className="about__features">
            {features.map((f) => (
              <div className="feat__card" key={f.title}>
                <div className={`feat__icon feat__icon--${f.color}`}>{f.icon}</div>
                <div>
                  <span className="feat__title">{f.title}</span>
                  <span className="feat__desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about__hero-image-wrap">
            <img src={aboutImage} alt="Lube Shakti product range" className="about__hero-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__eyebrow">
            <span className="eyebrow__dot"></span>
            <span>Who We Are</span>
          </div>

          <h2 className="about__title">
            Powering India's<br />
            <span className="title__highlight">Industries</span> Since 2003
          </h2>

          <p className="about__desc">
            LubePower PVT LTD is one of India's trusted names in high-performance lubricants.
            From small workshops to large-scale industrial plants, our products protect engines,
            reduce wear, and maximize performance every single drop.
          </p>
          <p className="about__desc">
            We blend cutting-edge additive technology with rigorous quality control to deliver
            lubricants that meet and exceed international standards across automotive, industrial,
            and specialty applications.
          </p>

          <div className="about__timeline">
            <div className="timeline__line"></div>
            {milestones.map((m) => (
              <div className="timeline__item" key={m.year}>
                <div className="timeline__dot">
                  <div className="timeline__dot-inner"></div>
                </div>
                <div className="timeline__body">
                  <span className="timeline__year">{m.year}</span>
                  <span className="timeline__text">{m.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about__cta">
            <a href="#products" className="cta__btn cta__btn--primary">Explore Products &rarr;</a>
            <a href="#contact" className="cta__btn cta__btn--secondary">Download Catalogue</a>
          </div>
        </div>
      </div>

      <div className="why__section" id="why-us">
        <div className="why__header">
          <div className="why__eyebrow">
            <span className="eyebrow__dot"></span>
            <span>Why LubePower</span>
          </div>
          <h2 className="why__title">The <span>LubePower</span> Advantage</h2>
          <p className="why__sub">We do not just sell lubricants. We deliver performance, protection, and peace of mind.</p>
        </div>

        <div className="why__grid">
          {whyUs.map((w) => (
            <div className={`why__card why__card--${w.accent}`} key={w.title}>
              <div className="why__icon-wrap">
                <span className="why__icon">{w.icon}</span>
              </div>
              <div className="why__card-body">
                <h3 className="why__card-title">{w.title}</h3>
                <p className="why__card-desc">{w.desc}</p>
              </div>
              <div className="why__card-stat">
                <span className="why__stat-value">{w.stat}</span>
                <span className="why__stat-label">{w.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
