import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: 'FinerPalate',
      description: 'Elegant restaurant and culinary experience platform with sophisticated design and user-friendly interface for fine dining establishments.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: 'https://finerpalate.com/',
    },
    {
      title: 'ProgenyCoffee',
      description: 'Premium coffee brand website with e-commerce features, product catalog, and seamless shopping experience for coffee enthusiasts.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'E-commerce'],
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: 'https://progenycoffee.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Showcasing my recent projects and technical expertise
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 hover:transform hover:scale-105 bg-gray-800 border border-gray-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-400/50 text-white px-3 py-1 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 font-semibold transition-colors duration-300 flex items-center"
                    >
                      View Live <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;