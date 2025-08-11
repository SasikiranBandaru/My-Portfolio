import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bandaru Sasikiran
            </h3>
            <p className="text-gray-400 mt-2">
              Software Developer | Data Analyst | Cloud Enthusiast
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>&copy; 2024 Bandaru Sasikiran. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Divider */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;