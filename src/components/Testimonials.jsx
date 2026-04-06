import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rajinder Singh",
    role: "Owner, RS Transport Co.",
    location: "Ludhiana, Punjab",
    text: "We've been using LubePower diesel oil for our truck fleet for 5 years. Engine performance improved significantly and maintenance costs dropped by almost 30%. Highly recommended!",
    rating: 5,
    initial: "R",
  },
  {
    name: "Suresh Kumar",
    role: "Plant Manager, Prakash Industries",
    location: "Amritsar, Punjab",
    text: "LubePower hydraulic oils are excellent for our industrial machinery. Their technical team helped us choose the right grade. No machine breakdowns since we switched. Very satisfied.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Amit Sharma",
    role: "Workshop Owner",
    location: "Delhi",
    text: "My auto repair workshop uses LubePower exclusively. Customers notice the difference in their vehicles. The pricing is fair and delivery is always on time. Great company to work with.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Gurpreet Kaur",
    role: "MD, Kaur Agro Machines",
    location: "Patiala, Punjab",
    text: "Agricultural equipment demands reliable lubrication. LubePower gear oils have been perfect for our tractors and harvesters. Zero failures in 3 years. Their customer support is excellent.",
    rating: 5,
    initial: "G",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header">
        <span className="section__eyebrow">What Clients Say</span>
        <h2 className="testimonials__title">Trusted by <span>10,000+</span> Professionals</h2>
      </div>

      <div className="testimonials__container">
        <div className="testimonials__main">
          <div className="quote__mark">"</div>
          <p className="testimonials__text">{testimonials[active].text}</p>
          <div className="testimonials__author">
            <div className="author__avatar">{testimonials[active].initial}</div>
            <div className="author__info">
              <strong>{testimonials[active].name}</strong>
              <span>{testimonials[active].role}</span>
              <span className="author__location">📍 {testimonials[active].location}</span>
            </div>
            <div className="rating">
              {"★".repeat(testimonials[active].rating)}
            </div>
          </div>
        </div>

        <div className="testimonials__list">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testi__thumb ${active === i ? "testi__thumb--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="thumb__avatar">{t.initial}</div>
              <div className="thumb__info">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
