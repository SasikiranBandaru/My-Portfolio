import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2024",
      category: "Data Analytics",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft", 
      year: "2024",
      category: "Cloud Computing",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Oracle MySQL 8.0 Database Developer",
      issuer: "Oracle",
      year: "2024", 
      category: "Database",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      year: "2024",
      category: "AI & CRM",
      color: "from-blue-500 to-teal-600"
    },
    {
      title: "AIoT (Artificial Intelligence of Things)",
      issuer: "AICTE/Intel",
      year: "2023",
      category: "IoT & AI", 
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Oracle Cloud Infrastructure Foundation Associate",
      issuer: "Oracle",
      year: "2023",
      category: "Cloud Computing",
      color: "from-red-600 to-orange-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across cloud computing, data analytics, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Certificate Header */}
              <div className={`h-20 bg-gradient-to-r ${cert.color} flex items-center justify-center relative`}>
                <Award className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{cert.issuer}</span>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;