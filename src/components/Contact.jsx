// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Masih Tahap Pengembangan Guys)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className={`${cardBg} p-8 rounded-2xl shadow-xl`}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${darkMode ? 'bg-gray-700' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${darkMode ? 'bg-gray-700' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${darkMode ? 'bg-gray-700' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;