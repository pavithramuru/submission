import React, { useState } from "react";
import "./PageStyles.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Fill the form below to get in touch with us.</p>
      {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
