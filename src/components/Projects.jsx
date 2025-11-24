// src/components/Projects.jsx
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const [imageLoaded, setImageLoaded] = useState({});

  const projects = [
    {
      title: 'Casier Application',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image: '/images/projects/casier.png' // Ganti dengan path gambar kamu
    },
    {
      title: 'Elion Project',
      description: 'Company Profile with real-time updates',
      tech: ['React', 'Vite', 'Tailwind'],
      link: 'https://elion-project.vercel.app/',
      image: '/images/projects/elion.png'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark mode and animations',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://insaksrbbni.vercel.app/',
      image: '/images/projects/portfolio.png'
    },
    {
      title: 'Truth Table Calculator',
      description: 'Truth table calculator application for college assignments',
      tech: ['React', 'Vite', 'Tailwindcss'],
      link: 'https://truth-table-calculator-insaksrbbni.vercel.app/',
      image: '/images/projects/truth-table.png'
    },
    {
      title: 'Libratech',
      description: 'Web-based digital library application',
      tech: ['Laravel', 'Vite', 'Tailwindcss', 'MySQL'],
      link: '#',
      image: '/images/projects/libratech.png'
    }
  ];

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${cardBg} rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                {/* Loading skeleton */}
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse text-white text-xl font-semibold">
                      Loading...
                    </div>
                  </div>
                )}
                
                {/* Gambar dengan lazy loading */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 ${
                    imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onError={(e) => {
                    // Fallback jika gambar gagal dimuat
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        ${project.title}
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                        darkMode 
                          ? 'bg-blue-900/50 text-blue-300 group-hover:bg-blue-800 group-hover:scale-105' 
                          : 'bg-blue-100 text-blue-800 group-hover:bg-blue-200 group-hover:scale-105'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-all duration-300 group-hover:gap-3"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;