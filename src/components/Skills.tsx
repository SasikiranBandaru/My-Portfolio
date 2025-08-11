import React from 'react';
import { Code, Database, Cloud, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Web Technologies", 
      icon: <Database className="w-6 h-6" />,
      color: "from-green-600 to-teal-600",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "React", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600", 
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Alteryx", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 65 }
      ]
    }
  ];

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Proficient"; 
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise across multiple domains including programming, web development, data analytics, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {getSkillLevel(skill.level)}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                    
                    {/* Percentage */}
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Programming Languages</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Frameworks & Tools</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Cloud Platforms</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
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

export default Skills;