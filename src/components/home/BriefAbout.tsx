
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BriefAbout = () => {
  return (
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
  );
};

export default BriefAbout;
