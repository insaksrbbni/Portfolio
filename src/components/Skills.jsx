// src/components/Skills.jsx
import React from 'react';
import { Code } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';

  const skills = [
    { name: 'React', level: 70, icon: Code },
    { name: 'JavaScript', level: 75, icon: Code },
    { name: 'Node.js', level: 60, icon: Code },
    { name: 'Tailwind CSS', level: 90, icon: Code },
    { name: 'TypeScript', level: 70, icon: Code },
    { name: 'MongoDB', level: 50, icon: Code }
  ];

  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`${cardBg} p-6 rounded-xl shadow-lg`}>
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-semibold">{skill.name}</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-2 text-sm text-blue-600 font-semibold">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;