import React from 'react';
import { Users, Trophy, Calendar, Heart } from 'lucide-react';

const Volunteering: React.FC = () => {
  const activities = [
    {
      title: "ACM Women in Computing",
      role: "Events Lead",
      duration: "Mar 2023 - Mar 2025", 
      description: "Leading event organization and coordination for women in technology initiatives, fostering inclusivity and professional development in the tech community.",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-600 to-purple-600",
      status: "Ongoing"
    },
    {
      title: "SRM Hackathon 8.0",
      role: "Participant",
      duration: "2024",
      description: "Participated in competitive programming and innovation challenge, developing creative solutions under time constraints and collaborating with diverse teams.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600", 
      status: "Completed"
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Volunteering & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Competitions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Community involvement and competitive experiences that showcase leadership, teamwork, and commitment to growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              {/* Activity Header */}
              <div className={`h-32 bg-gradient-to-r ${activity.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300 z-10">
                  {activity.icon}
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-white text-xs font-medium ${
                    activity.status === 'Ongoing' ? 'bg-green-500/30' : 'bg-blue-500/30'
                  }`}>
                    {activity.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Heart className="w-6 h-6 text-white/60" />
                </div>
              </div>

              {/* Activity Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                    {activity.role}
                  </span>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-blue-100">Years of Leadership</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Events Organized</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;