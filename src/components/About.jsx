// src/components/About.jsx
import React from 'react';
import { Github, Instagram, Mail, Youtube } from 'lucide-react';
import Hero from '../assets/images/Hero.jpg';

const About = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className={`${cardBg} rounded-2xl shadow-xl h-96 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${darkMode ? 'hover:shadow-blue-500/50' : 'hover:shadow-blue-800/60'}`}>
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={Hero} 
          alt="Deskripsi foto" 
         className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
          <div>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hello! I'm a passionate full-stack developer with expertise in building modern web applications. 
              I love creating beautiful, functional, and user-friendly digital experiences.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With several years of experience in web development, I specialize in React, Node.js, and modern 
              JavaScript frameworks. I'm always eager to learn new technologies and take on challenging projects.
            </p>
           <div className="flex space-x-4">
  <a href="https://github.com/insaksrbbni" className="text-blue-600 transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)]">
    <Github className="w-6 h-6" />
  </a>
  <a href="https://www.instagram.com/insaksrbbni" className="text-blue-600 transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)]">
    <Instagram className="w-6 h-6" />
  </a>
  <a href="https://youtube.com/@yinsaotsutsuki" className="text-blue-600 transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)]">
    <Youtube className="w-6 h-6" />
  </a>
   <a href="mailto:insaksrbbni@gmail.com" className="text-blue-600 transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)]">
    <Mail className="w-6 h-6" />
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;