import React from 'react';
import { ExternalLink, Github, Cloud, BarChart, Brain, Globe, Film } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cloud Grievance Redressal System",
      description: "Advanced grievance management system using computer vision and cloud analytics for automated complaint processing and real-time reporting.",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["YOLOv11", "Roboflow", "GCP", "BigQuery", "Looker Studio", "Python", "AWS"],
      gradient: "from-blue-600 to-cyan-600",
      category: "Cloud & AI",
      githubUrl: "https://github.com/SasikiranBandaru",
      demoUrl: "#"
    },
    {
      title: "Enterprise Sales Analytics & Automation",
      description: "Comprehensive business intelligence solution with automated reporting, KPI monitoring, and real-time dashboard analytics.",
      icon: <BarChart className="w-8 h-8" />,
      technologies: ["Power BI", "SQL Server", "Power Automate", "DAX", "Power Query"],
      gradient: "from-green-600 to-teal-600", 
      category: "Data Analytics",
      githubUrl: "https://github.com/SasikiranBandaru",
      demoUrl: "#"
    },
    {
      title: "Drought Impact Analysis on Soil Nutrients",
      description: "Machine learning research project analyzing drought effects on soil composition using advanced time series models and microservices architecture.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "TensorFlow", "LSTM", "GRU", "ARIMA", "Spring Boot", "Kafka"],
      gradient: "from-purple-600 to-pink-600",
      category: "ML Research",
      githubUrl: "https://github.com/SasikiranBandaru",
      demoUrl: "#"
    },
    {
      title: "DMA - Direct Market Access Website",
      description: "Full-stack financial platform with secure payment processing, real-time communication, and comprehensive trading features.",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["Node.js", "Express", "MongoDB", "Firebase", "Braintree", "Socket.io"],
      gradient: "from-orange-600 to-red-600",
      category: "Full-Stack",
      githubUrl: "https://github.com/SasikiranBandaru",
      demoUrl: "#"
    },
    {
      title: "Movie Recommendation System",
      description: "Big data solution for personalized movie recommendations using distributed computing and advanced machine learning algorithms.",
      icon: <Film className="w-8 h-8" />,
      technologies: ["HDFS", "Hive", "Pig", "MapReduce", "MongoDB", "MySQL", "Scikit-learn"],
      gradient: "from-indigo-600 to-blue-600",
      category: "Big Data",
      githubUrl: "https://github.com/SasikiranBandaru",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning cloud computing, data analytics, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300 z-10">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;