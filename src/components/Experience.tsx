import React from 'react';
import { Briefcase, Calendar, MapPin, Cloud } from 'lucide-react';

const Experience: React.FC = () => {
  const responsibilities = [
    "Gained comprehensive knowledge of AWS cloud services and architecture patterns",
    "Worked on cloud-native application development and deployment strategies", 
    "Learned about serverless computing, containerization, and microservices",
    "Developed understanding of cloud security, monitoring, and cost optimization",
    "Collaborated with global teams on cloud infrastructure projects"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  <Cloud className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    AWS - Cloud Foundation
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Cloud Intern
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Apr 2024 - Jun 2024</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Virtual</span>
                </div>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">3 Months Internship</span>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Learning & Responsibilities:
              </h4>
              <div className="grid gap-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Gained */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technologies & Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Cloud Architecture', 'Serverless', 'Docker', 'Microservices', 'DevOps', 'Security'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;