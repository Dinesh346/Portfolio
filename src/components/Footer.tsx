import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className={`flex items-center justify-center space-x-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>© {currentYear} DevNest - Dinesh Gurjar. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;