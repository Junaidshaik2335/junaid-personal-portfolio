
import { Code, Sparkles, Globe, Zap } from "lucide-react";

const QuickStats = () => {
  const stats = [
    { number: "5+", label: "Projects Completed", color: "from-blue-500 to-blue-600", icon: Code },
    { number: "3+", label: "Years Learning", color: "from-emerald-500 to-emerald-600", icon: Sparkles },
    { number: "10+", label: "Technologies", color: "from-purple-500 to-purple-600", icon: Globe },
    { number: "100%", label: "Dedication", color: "from-orange-500 to-orange-600", icon: Zap }
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Milestones</h2>
          <p className="text-gray-600 text-lg">Numbers that showcase my journey in development</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
