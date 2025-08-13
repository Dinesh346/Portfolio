import React from 'react';
import { User, Award, Users, Calendar, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import DineshPhoto from '../assets/Dinesh_Photo.jpg';


const About: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white flex items-center justify-center space-x-3">
            <User className="w-12 h-12" />
            <span>About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
             <div>
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src={DineshPhoto} 
                    alt="Dinesh Gurjar" 
                    className="w-72 h-72 object-cover rounded-full" 
                  />

                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                With over 3 years of freelance web development experience, I create modern, responsive websites that look stunning and deliver great user experiences. I focus on understanding your business goals and translating them into digital solutions.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                Creativity, technical expertise, and attention to detail in every project.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-2">5</div>
                  <div className="text-gray-300">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;