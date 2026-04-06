import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", product: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {/* Left Info */}
        <div className="contact__info">
          <span className="section__eyebrow--light">Get In Touch</span>
          <h2 className="contact__title">Let's Talk <span>Business</span></h2>
          <p className="contact__desc">
            Looking for bulk orders, dealership opportunities, or product consultation? 
            Our team is ready to assist you.
          </p>

          <div className="contact__details">
            <div className="contact__item">
              <div className="contact__icon-box">📍</div>
              <div>
                <strong>Address</strong>
                <span>LubePower PVT LTD, Industrial Area, Punjab, India</span>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__icon-box">📞</div>
              <div>
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__icon-box">✉️</div>
              <div>
                <strong>Email</strong>
                <span>info@lubepower.in</span>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__icon-box">⏰</div>
              <div>
                <strong>Working Hours</strong>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <a href="#" className="social__btn">WhatsApp Us</a>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="form__success">
              <span className="success__icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you! Our team will contact you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="form__reset">Send Another</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="form__title">Request a Quote</h3>

              <div className="form__row">
                <div className="form__group">
                  <label>Your Name *</label>
                  <input type="text" name="name" placeholder="Rajinder Singh" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form__group">
                  <label>Company Name</label>
                  <input type="text" name="company" placeholder="ABC Enterprises" value={form.company} onChange={handleChange} />
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form__group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form__group">
                <label>Product Interest</label>
                <select name="product" value={form.product} onChange={handleChange}>
                  <option value="">Select a product category</option>
                  <option>Engine Oil</option>
                  <option>Gear Oil</option>
                  <option>Hydraulic Oil</option>
                  <option>Greases</option>
                  <option>Specialty Lubricants</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form__group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your requirements — quantity, grade, delivery location..." rows={4} value={form.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="form__submit">Send Enquiry →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
