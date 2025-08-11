import React from 'react';
import { Globe, Star } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    {
      name: "English",
      level: "Professional",
      proficiency: 95,
      description: "Fluent in professional and academic communication",
      flag: "🇺🇸"
    },
    {
      name: "Telugu", 
      level: "Native",
      proficiency: 100,
      description: "Mother tongue with complete fluency",
      flag: "🇮🇳"
    },
    {
      name: "Hindi",
      level: "Limited", 
      proficiency: 60,
      description: "Basic conversational ability",
      flag: "🇮🇳"
    },
    {
      name: "Tamil",
      level: "Fundamental",
      proficiency: 40,
      description: "Basic understanding and simple phrases",
      flag: "🇮🇳"
    }
  ];

  const getStars = (proficiency: number) => {
    const stars = Math.round(proficiency / 20);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < stars
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Native':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Professional':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Fundamental':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="languages" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Languages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Multilingual capabilities enabling effective communication across diverse cultural and professional environments.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {languages.map((language, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              {/* Language Header */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{language.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {language.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(language.level)}`}>
                  {language.level}
                </span>
              </div>

              {/* Proficiency Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {getStars(language.proficiency)}
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${language.proficiency}%`,
                    animation: `slideIn 1s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                {language.description}
              </p>
            </div>
          ))}
        </div>

        {/* Language Skills Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Global Communication</h3>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Multilingual proficiency enabling seamless collaboration in international teams and cross-cultural projects, with strong emphasis on technical and professional communication in English.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Languages;