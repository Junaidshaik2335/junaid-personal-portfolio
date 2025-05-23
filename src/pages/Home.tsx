
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Sparkles, Zap } from "lucide-react";
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

      {/* Quick Stats */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Projects Completed", color: "from-blue-500 to-blue-600" },
              { number: "3+", label: "Years Learning", color: "from-emerald-500 to-emerald-600" },
              { number: "10+", label: "Technologies", color: "from-purple-500 to-purple-600" },
              { number: "100%", label: "Dedication", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent block">
                Experiences
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              I specialize in full stack web development with expertise in React, Node.js, and MongoDB. 
              Currently pursuing BTech in Electronics and Communication Engineering, I bring a unique 
              perspective combining <span className="font-semibold text-gray-800">hardware knowledge</span> with 
              <span className="font-semibold text-gray-800"> software excellence</span>.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 group"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
