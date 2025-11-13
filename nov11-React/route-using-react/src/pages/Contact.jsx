import React, { useState } from "react";
import PopupMessage from "../components/PopupMessage";
import "./PageStyles.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [popup, setPopup] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopup({ message: "Message sent successfully!", type: "success" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>

      {popup && (
        <PopupMessage
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
};

export default Contact;
