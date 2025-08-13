import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight} from 'lucide-react';

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className={`absolute inset-0 ${
        'bg-[url(%22data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Cpolygon points=%2230 0 60 30 30 60 0 30%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%22)]'
      } opacity-20`}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg md:text-xl font-semibold mb-4 from-teal-200 to-gray-500 animate-fade-in flex items-center justify-center space-x-2">
            <Code className="w-6 h-6" />
            Welcome to DevNest
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Dinesh Gurjar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-4 animate-fade-in-delay-1 text-white">
            <span className="inline-block animate-pulse">I build</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">modern websites</span> <span className="inline-block animate-bounce">that work.</span>
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2 text-gray-300">
            Creating responsive, user-friendly websites that help businesses grow and succeed online.
          </p>
          
          
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;



