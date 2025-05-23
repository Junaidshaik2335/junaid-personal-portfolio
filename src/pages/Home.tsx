
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                  Full Stack Developer
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  S Mohammed
                  <span className="text-blue-600 block">Junaid</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  BTech Electronics & Communication Engineering student passionate about 
                  creating innovative web solutions and solving complex problems through code.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600">
                      SMJ
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">3+</h3>
              <p className="text-gray-600">Years Learning</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Technologies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600">Dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Crafting Digital Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I specialize in full stack web development with expertise in React, Node.js, and MongoDB. 
              Currently pursuing BTech in Electronics and Communication Engineering, I bring a unique 
              perspective combining hardware knowledge with software excellence.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
