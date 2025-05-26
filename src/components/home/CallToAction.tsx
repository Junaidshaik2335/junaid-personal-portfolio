
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
