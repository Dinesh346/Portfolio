import React from 'react';
import { Palette, Code, Smartphone, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services: React.FC = () => {
  const { isDark } = useTheme();
  
  const services = [
    {
      title: 'Custom Website Design',
      description: 'Brand integration, mobile-first approach, and interactive elements that engage your audience and reflect your unique identity.',
      icon: <Code className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Responsive Development',
      description: 'React/Vue.js development with focus on performance optimization and SEO best practices for maximum visibility.',
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Website Redesign',
      description: 'UX audit, performance boost, and seamless content migration to modernize your existing web presence.',
      icon: <Palette className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Landing Pages',
      description: 'Conversion-focused design with analytics integration and A/B testing to maximize your marketing ROI.',
      icon: <Zap className="w-12 h-12 text-blue-600" />,
    },
  ];

  return (
    <span>
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-white">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Comprehensive web development solutions to elevate your digital presence
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 border bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700/20 hover:to-gray-800 border-gray-700 hover:border-gray-500/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-white group-hover:text-gray-300 transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300 text-white">
                  {service.title}
                </h3>
                
                <p className="leading-relaxed transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-white hover:text-gray-300 font-semibold transition-colors duration-300 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </span>
  );
};

export default Services;