import React from 'react';
import { Code, Database, Cloud, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in building end-to-end web applications"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Expert in data visualization and machine learning"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Technologies",
      description: "Experienced with AWS, GCP, and Azure platforms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Strong communication and teamwork skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an enthusiastic and self-motivated software developer and data analyst currently pursuing my B.Tech in Computer Science & Engineering with a specialization in Cloud Computing at SRM IST.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With hands-on experience in full-stack development, data analysis, machine learning, and cloud technologies, I thrive on solving complex problems and creating innovative solutions. My passion lies in building applications that are not only functional but also scalable and user-friendly.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm always eager to learn new tools and technologies, collaborate with like-minded individuals, and contribute to projects that make a meaningful impact.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-1">7.98</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-1">2026</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Graduate</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;