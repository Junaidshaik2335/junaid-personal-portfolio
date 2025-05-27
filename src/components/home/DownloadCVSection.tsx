
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const DownloadCVSection = () => {
  const handleDownloadCV = () => {
    // Create a temporary link to download the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/15582870-d6ef-4f43-a451-ea9380ff48fd.png';
    link.download = 'S_Mohammed_Junaid_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/s-mohammed-junaid",
      icon: Linkedin,
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "GitHub", 
      href: "https://github.com/Junaidshaik2335",
      icon: Github,
      color: "text-gray-800 hover:text-gray-900"
    },
    {
      name: "Email",
      href: "mailto:smdjunaid2335@gmail.com",
      icon: Mail,
      color: "text-red-600 hover:text-red-700"
    },
    {
      name: "Phone",
      href: "tel:+918074722358",
      icon: Phone,
      color: "text-green-600 hover:text-green-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Download My Resume</h2>
        <p className="text-xl text-gray-600 mb-12">
          Get a detailed overview of my experience, skills, and education
        </p>
        
        <Card className="shadow-lg border-0 mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">S Mohammed Junaid</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 8074722358</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>smdjunaid2335@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Anantapur, Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    BTech in Electronics and Communication Engineering student specializing in 
                    full stack web development with experience in React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`p-3 rounded-full border hover:bg-gray-50 transition-colors ${link.color}`}
                        title={link.name}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Experience Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Full Stack Web Development Intern at Edu Versity (May 2024 - July 2024)</li>
                <li>• Developed responsive user interfaces using HTML, CSS, and JavaScript</li>
                <li>• Built backend APIs using Node.js and Express.js</li>
                <li>• Integrated MongoDB databases for dynamic data storage</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Education</h4>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-semibold">Bachelor of Technology (BTech)</p>
                  <p className="text-sm">Electronics and Communication Engineering</p>
                  <p className="text-sm">Anantha Lakshmi Institute of Technology & Science</p>
                  <p className="text-sm">Nov 2022 - June 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadCVSection;
