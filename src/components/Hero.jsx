// src/components/Hero.jsx
import React from 'react';
import Profile from '../../public/PP.jpg';

const Hero = ({ darkMode, scrollToSection }) => {
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-0.5">
  <img 
    src={Profile} 
    alt="Deskripsi foto" 
    className="w-full h-full rounded-full object-cover"
  />
</div>
        </div>
        <h1 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
          Insa Aksar Rabbani
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${borderClass} px-8 py-3 rounded-lg font-semibold transition-colors`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;