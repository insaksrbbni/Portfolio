// src/components/Projects.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';

  const projects = [
    {
      title: 'Casier Application',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Elion Project',
      description: 'Company Profile with real-time updates',
      tech: ['React', 'Vite', 'Tailwind'],
      link: 'https://elion-project.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark mode and animations',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://insaksrbbni.vercel.app/'
    },
    {
      title: 'Trut Table Calculator',
      description: 'Truth table calculator application for college assignments',
      tech: ['React', 'Vite', 'Tailwindcss'],
      link: 'https://truth-table-calculator-insaksrbbni.vercel.app/'
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${cardBg} rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow`}>
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                Project Image
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
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