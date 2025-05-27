import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
const CompletePortfolioSection = () => {
  const projects = [{
    id: 1,
    title: "E-Commerce Web Application",
    description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal performance and user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "JWT Authentication"],
    features: ["User registration and authentication", "Product catalog with search and filtering", "Shopping cart and checkout process", "Payment integration with Stripe", "Admin dashboard for product management", "Responsive design for all devices"],
    image: "🛒",
    category: "Full Stack"
  }, {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Features smooth animations, clean design, and optimized performance.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS", "Vercel"],
    features: ["Responsive design with modern UI/UX", "Smooth animations and transitions", "Contact form with email integration", "Project showcase with filtering", "SEO optimized", "Fast loading and performance"],
    image: "👨‍💻",
    category: "Frontend"
  }, {
    id: 3,
    title: "Blog Website with Markdown Support",
    description: "A dynamic blog platform supporting Markdown content creation, with features like category management, search functionality, and a clean reading experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Markdown Parser", "Express.js"],
    features: ["Markdown content creation and editing", "Category and tag management", "Search functionality", "Comment system", "Social media sharing", "Admin panel for content management"],
    image: "📝",
    category: "Full Stack"
  }, {
    id: 4,
    title: "Task Manager App",
    description: "A productivity application for task management with features like project organization, deadline tracking, team collaboration, and progress monitoring.",
    technologies: ["React.js", "Firebase", "Material-UI", "Context API"],
    features: ["Create and organize tasks by projects", "Set deadlines and priorities", "Team collaboration features", "Progress tracking and analytics", "Real-time synchronization", "Mobile-responsive interface"],
    image: "✅",
    category: "Frontend"
  }, {
    id: 5,
    title: "Weather Forecast App",
    description: "A weather application providing current conditions and forecasts with location-based services, interactive maps, and detailed weather analytics.",
    technologies: ["React.js", "Weather API", "Geolocation API", "Chart.js"],
    features: ["Current weather conditions", "7-day weather forecast", "Location-based weather data", "Interactive weather maps", "Weather alerts and notifications", "Historical weather data visualization"],
    image: "🌤️",
    category: "Frontend"
  }];
  return <section id="portfolio" className="py-20 bg-gray-50">
      {/* Header */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h2>
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
            {projects.map(project => <Card key={project.id} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
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
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>)}
                      {project.technologies.length > 4 && <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          +{project.technologies.length - 4} more
                        </Badge>}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default CompletePortfolioSection;