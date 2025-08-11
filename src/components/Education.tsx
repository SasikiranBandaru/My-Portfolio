import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech Computer Science & Engineering - Cloud Computing",
      institution: "SRM Institute of Science and Technology",
      year: "2022 - 2026",
      grade: "CGPA: 7.98/10",
      status: "Current",
      description: "Specializing in cloud computing technologies, distributed systems, and modern software development practices."
    },
    {
      degree: "Class XII (Higher Secondary)",
      institution: "Secondary Education",
      year: "2022",
      grade: "62%",
      status: "Completed",
      description: "Completed higher secondary education with focus on science and mathematics."
    },
    {
      degree: "Class X (Secondary)",
      institution: "Secondary Education", 
      year: "2020",
      grade: "100%",
      status: "Completed",
      description: "Achieved perfect score in secondary education demonstrating academic excellence."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-3 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{edu.grade}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">
                      {edu.institution}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;