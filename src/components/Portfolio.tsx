import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Tech News & Developer Blog Platform',
      description: 'A comprehensive platform for tech news and developer articles with user authentication, commenting system, and admin panel.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
    },
    {
      title: 'Professional Cleaning Services Website',
      description: 'Modern business website with service booking system, testimonials, and contact management for cleaning services company.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/4239020/pexels-photo-4239020.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
    },
    {
      title: 'FinerPalate',
      description: 'Elegant restaurant and culinary experience platform with sophisticated design and user-friendly interface.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: 'https://finerpalate.com/',
    },
    {
      title: 'ProgenyCoffee',
      description: 'Premium coffee brand website with e-commerce features, product catalog, and seamless shopping experience.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'E-commerce'],
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: 'https://progenycoffee.com/',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my recent projects and technical expertise
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="bg-gray-800/90 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="bg-gray-800/90 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 flex items-center"
                    >
                      View Live <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white font-semibold transition-colors duration-300 flex items-center"
                    >
                      GitHub <Github className="w-4 h-4 ml-1" />
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

export default Portfolio;