
import { Globe, Server, Database, Smartphone } from "lucide-react";

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Firebase", "Data Modeling"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Mobile & More",
      icon: Smartphone,
      skills: ["Responsive Design", "PWA", "Git", "Deployment"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tech Stack &
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent block">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in modern web technologies with a focus on creating scalable, 
            user-centric applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
