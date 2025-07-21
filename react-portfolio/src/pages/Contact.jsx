import React, { useState } from 'react';
import '../styles/contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormMessage('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p className="contact-description">
        Feel free to reach out! I'll get back to you as soon as possible.
      </p>
      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-container">
            <BsPerson className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            <HiOutlineMail className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            <BiMessageDetail className="input-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit">
          Send Message
          <span className="button-overlay"></span>
        </button>

        {formMessage && (
          <div className="form-message success">
            {formMessage}
          </div>
        )}
      </form>
    </section>
  );
} 