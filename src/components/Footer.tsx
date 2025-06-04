import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {year} Divya thimmapuram. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" fill="currentColor" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;