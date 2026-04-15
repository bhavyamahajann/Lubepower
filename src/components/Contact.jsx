import React, { useState } from "react";
import "./Contact.css";

const contactInfo = [
  {
    title: "Head Office",
    value: "LubePower PVT LTD, SCO 85-86, 1st Floor, 17D, Chandigarh, 160017, India",
    icon: "🏢",
  },
  {
    title: "Plant",
    value: "Plot No. 127, Maruti Industrial Estate, Bardoli Road, Saybe Mill, Jolva, Kadodara, Surat, Gujarat, 394305",
    icon: "🏭",
  },
  {
    title: "Phone",
    value: "+91 99147-08800",
    icon: "📞",
  },
  {
    title: "Email",
    value: "customer@lubepower.in",
    icon: "✉️",
  },
  {
    title: "Working Hours",
    value: "Mon-Sat: 9:00 AM - 6:00 PM",
    icon: "⏰",
  },
];

const supportPoints = [
  { title: "Bulk Order Support", text: "Dealer pricing, fleet requirements, and industrial volume planning." },
  { title: "Product Selection Help", text: "Guidance for engine oils, greases, hydraulic oils, and coolants." },
  { title: "Fast Response Team", text: "We respond quickly with product fit, pricing guidance, and next steps." },
];

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
        <div className="contact__info">
          <span className="section__eyebrow--light">Get In Touch</span>
          <h2 className="contact__title">Let's Talk <span>Business</span></h2>
          <p className="contact__desc">
            Looking for bulk orders, dealership opportunities, or product consultation?
            Our team is ready to assist you.
          </p>

          <div className="contact__support-grid">
            {supportPoints.map((item) => (
              <div className="contact__support-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="contact__details">
            {contactInfo.map((item) => (
              <div className="contact__item" key={item.title}>
                <div className="contact__icon-box">{item.icon}</div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__social">
            <a href="https://wa.me/919914708800?text=Hi" className="social__btn" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="form__success">
              <span className="success__icon">&#9989;</span>
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
                  <input type="tel" name="phone" placeholder="+91 99147-08800" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form__group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />
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
                <textarea name="message" placeholder="Tell us about your requirements - quantity, grade, delivery location..." rows={4} value={form.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="form__submit">Send Enquiry &rarr;</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;