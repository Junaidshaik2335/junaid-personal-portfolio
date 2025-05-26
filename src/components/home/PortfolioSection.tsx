
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "🛒",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      image: "👨‍💻",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "A productivity application for task management with features like project organization and deadline tracking.",
      technologies: ["React.js", "Firebase", "Material-UI", "Context API"],
      image: "✅",
      category: "Frontend"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      {/* Header */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects showcasing full stack development, creative problem-solving, 
            and technical expertise across various domains.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="text-6xl text-center mb-4">{project.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 px-2 py-1">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
