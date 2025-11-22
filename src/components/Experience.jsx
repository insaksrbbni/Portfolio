// src/components/Experience.jsx
import React from 'react';

const Experience = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';

  const experiences = [
    {
      title: 'Intern Frontend Developer',
      company: 'SAWALA Technology',
      period: '2023 - 2023',
      description: 'Leading frontend development team, building scalable web applications'
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Startup Inc',
      period: '2022 - 2024',
      description: 'Developed responsive web applications using React and modern technologies'
    },
    {
      title: 'Full Stack Developer',
      company: 'Elion Information Technology',
      period: '2023 - Present',
      description: 'Founder in building client websites and web applications'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`${cardBg} p-6 rounded-xl shadow-lg border-l-4 border-blue-600`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</span>
              </div>
              <p className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;