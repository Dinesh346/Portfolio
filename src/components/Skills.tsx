import React from 'react';
import { Code, Database, Globe, GitBranch, Smartphone, Zap, Shield, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React.js', icon: <Code className="w-8 h-8" />, level: 95 },
    { name: 'Next.js', icon: <Globe className="w-8 h-8" />, level: 90 },
    { name: 'Node.js', icon: <Zap className="w-8 h-8" />, level: 88 },
    { name: 'Express.js', icon: <Layers className="w-8 h-8" />, level: 92 },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 85 },
    { name: 'Tailwind CSS', icon: <Smartphone className="w-8 h-8" />, level: 96 },
    { name: 'JWT', icon: <Shield className="w-8 h-8" />, level: 88 },
    { name: 'Socket.IO', icon: <Zap className="w-8 h-8" />, level: 82 },
    { name: 'GitHub Deployment', icon: <GitBranch className="w-8 h-8" />, level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-white text-xl font-semibold ml-3">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="text-right text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;