import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-600 dark:text-gray-400">BS</div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Bandaru <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sasikiran</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
            Software Developer | Data Analyst | Cloud Enthusiast
          </p>

          {/* Introduction */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable, efficient, and user-friendly applications that solve real-world problems through innovative technology solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/resume.pdf" 
              download="Bandaru_Sasikiran_Resume.pdf"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;