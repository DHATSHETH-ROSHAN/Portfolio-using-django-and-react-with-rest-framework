import React, { useState } from "react";
import { postContact } from "../services/api";
import "./css/ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(form)
      .then(res => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(err => {
        console.error(err);
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      {status && <p className="contact-status" >{status}</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
    
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default ContactForm;
