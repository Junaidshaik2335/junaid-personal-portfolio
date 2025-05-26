
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like React.js, Node.js, and MongoDB.",
      features: [
        "Custom web application development",
        "Database design and implementation",
        "API development and integration",
        "Responsive frontend design"
      ],
      icon: "🌐",
      pricing: "Starting from $2000"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Modern, responsive, and user-friendly frontend applications using React.js with focus on performance and accessibility.",
      features: [
        "React.js application development",
        "Responsive web design",
        "UI/UX implementation",
        "Performance optimization"
      ],
      icon: "🎨",
      pricing: "Starting from $1200"
    },
    {
      id: 3,
      title: "Backend API Development",
      description: "Robust and scalable backend solutions with RESTful APIs, database integration, and authentication systems.",
      features: [
        "RESTful API design and development",
        "Database modeling and optimization",
        "User authentication and authorization",
        "Third-party API integrations"
      ],
      icon: "⚡",
      pricing: "Starting from $1500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      {/* Header */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional web development services tailored to your needs. From concept to deployment, 
            I provide comprehensive solutions to bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{service.icon}</div>
                    <p className="text-xl font-bold text-blue-600">{service.pricing}</p>
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
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
