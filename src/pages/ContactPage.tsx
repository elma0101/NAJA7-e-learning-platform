// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  // State to manage the form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // A single handler to update state for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is where you will later call your Spring Boot API
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    // Optionally, clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-dark-text">Contact Us</h1>
          <p className="mt-4 text-lg text-medium-text">
            We're here to help! Reach out to us with any questions or feedback.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-16">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-dark-text">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-dark-text">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 font-semibold text-dark-text">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-dark-text">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
            />
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-green-dark transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Other Contact Info Section */}
        <div className="mt-20 text-center border-t pt-10">
          <h2 className="text-2xl font-bold text-dark-text">Other Ways to Reach Us</h2>
          <p className="mt-4 text-medium-text max-w-xl mx-auto">
            For immediate assistance, you can email us at <a href="mailto:support@naja7online.ma" className="text-primary-green font-semibold">support@naja7online.ma</a> or call us at +212 522 22 22 22. Our office is located at 123 Avenue Hassan II, Casablanca, Morocco.
          </p>
          <p className="mt-4 text-medium-text">
            For FAQs, visit our <Link to="/faq" className="text-primary-green font-semibold">Help Center</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;