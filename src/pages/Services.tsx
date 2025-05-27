import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like React.js, Node.js, and MongoDB. From concept to deployment, I handle every aspect of your web project.",
      features: [
        "Custom web application development",
        "Database design and implementation",
        "API development and integration",
        "Responsive frontend design",
        "Performance optimization",
        "Deployment and hosting setup"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML5", "CSS3"],
      icon: "🌐"
    },
    {
      id: 2,
      title: "Backend API Development",
      description: "Robust and scalable backend solutions with RESTful APIs, database integration, authentication systems, and cloud deployment for modern applications.",
      features: [
        "RESTful API design and development",
        "Database modeling and optimization",
        "User authentication and authorization",
        "Third-party API integrations",
        "Cloud deployment (AWS, Heroku, Vercel)",
        "API documentation and testing"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Firebase"],
      icon: "⚡"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Modern, responsive, and user-friendly frontend applications using React.js, with focus on performance, accessibility, and seamless user experience.",
      features: [
        "React.js application development",
        "Responsive web design",
        "UI/UX implementation",
        "State management solutions",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
      icon: "🎨"
    },
    {
      id: 4,
      title: "Database Design & Management",
      description: "Efficient database architecture, optimization, and management solutions for both SQL and NoSQL databases to ensure optimal performance and scalability.",
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration services",
        "Performance monitoring",
        "Backup and recovery solutions",
        "Security implementation"
      ],
      technologies: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      icon: "💾"
    },
    {
      id: 5,
      title: "Consulting & Technical Support",
      description: "Expert technical consultation, code reviews, architecture planning, and ongoing support to help you make informed decisions about your technology stack.",
      features: [
        "Technical consultation",
        "Code review and optimization",
        "Architecture planning",
        "Technology stack recommendations",
        "Performance audits",
        "Ongoing technical support"
      ],
      technologies: ["Various based on project needs"],
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional web development services tailored to your needs. From concept to deployment, 
            I provide comprehensive solutions to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{service.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-3 font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your project's success from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
              <p className="text-gray-600">
                Understanding your requirements, goals, and project scope through detailed discussions.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">Planning</h3>
              <p className="text-gray-600">
                Creating detailed project plans, timelines, and technical specifications for development.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">Development</h3>
              <p className="text-gray-600">
                Building your solution using best practices, with regular updates and feedback sessions.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900">Delivery</h3>
              <p className="text-gray-600">
                Testing, deployment, and handover with documentation and ongoing support options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and create something amazing together. 
            Contact me today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
