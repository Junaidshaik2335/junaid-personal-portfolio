
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Sparkles, Zap, Globe, Database, Server, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                  Full Stack Developer
                </div>
                
                {/* Main heading */}
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  S Mohammed
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent block">
                    Junaid
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  BTech Electronics & Communication student crafting 
                  <span className="font-semibold text-gray-800"> innovative web solutions</span> and 
                  solving complex problems through elegant code.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Download CV
                </Button>
              </div>

              {/* Tech stack indicators */}
              <div className="flex items-center gap-6 pt-4">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Tech Stack</span>
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">React</div>
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">Node.js</div>
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">MongoDB</div>
                </div>
              </div>
            </div>

            {/* Profile section */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="w-full h-full rounded-3xl bg-white p-8 flex items-center justify-center relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50"></div>
                    
                    {/* Profile placeholder */}
                    <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                      <div className="text-6xl font-bold text-gray-500">SMJ</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
                  <Code className="w-8 h-8" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg animate-bounce delay-500">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Stats */}
      <section className="py-20 bg-white/80 backdrop-blur-sm border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Milestones</h2>
            <p className="text-gray-600 text-lg">Numbers that showcase my journey in development</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Projects Completed", color: "from-blue-500 to-blue-600", icon: Code },
              { number: "3+", label: "Years Learning", color: "from-emerald-500 to-emerald-600", icon: Sparkles },
              { number: "10+", label: "Technologies", color: "from-purple-500 to-purple-600", icon: Globe },
              { number: "100%", label: "Dedication", color: "from-orange-500 to-orange-600", icon: Zap }
            ].map((stat, index) => {
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

      {/* Skills Showcase */}
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
            {[
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
            ].map((category, index) => {
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

      {/* Brief About Enhanced */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  About Me
                </div>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Crafting Digital
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent block">
                    Experiences
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I specialize in full stack web development with expertise in React, Node.js, and MongoDB. 
                  Currently pursuing BTech in Electronics and Communication Engineering, I bring a unique 
                  perspective combining <span className="font-semibold text-gray-800">hardware knowledge</span> with 
                  <span className="font-semibold text-gray-800"> software excellence</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
                  >
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clean Code</h4>
                      <p className="text-gray-600 text-sm">Writing maintainable and scalable solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Modern Technologies</h4>
                      <p className="text-gray-600 text-sm">Staying updated with latest frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance First</h4>
                      <p className="text-gray-600 text-sm">Optimized solutions for better user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Something
            <span className="block">Amazing Together?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss your project and bring your ideas to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
