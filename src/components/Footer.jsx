// src/components/Footer.jsx
import React from 'react';

const Footer = ({ darkMode }) => {
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <footer className={`py-8 px-4 border-t ${borderClass}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Insaksrbbni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;