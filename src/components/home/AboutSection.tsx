
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const technicalSkills = [
    "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js",
    "HTML5", "CSS3", "Tailwind CSS", "Git", "RESTful APIs",
    "Python", "C++", "MySQL", "Firebase", "Vercel"
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication",
    "Time Management", "Adaptability", "Critical Thinking",
    "Leadership", "Attention to Detail"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      {/* Header */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my journey, education, and the skills that drive my passion for technology.
          </p>
        </div>
      </div>

      {/* Personal Bio */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am S Mohammed Junaid, a dedicated and passionate BTech student specializing in 
                  Electronics and Communication Engineering. My journey in technology began with a 
                  curiosity about how electronic systems work, which naturally evolved into a deep 
                  fascination with software development.
                </p>
                <p>
                  Throughout my academic journey, I have cultivated a strong foundation in both 
                  hardware and software domains. This unique combination allows me to approach 
                  problems from multiple perspectives, creating innovative solutions that bridge 
                  the gap between physical systems and digital interfaces.
                </p>
                <p>
                  My expertise in full stack web development encompasses modern technologies like 
                  React.js for creating dynamic user interfaces, Node.js for robust backend systems, 
                  and MongoDB for efficient data management. I am passionate about creating scalable, 
                  user-friendly applications that solve real-world problems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💻</span>
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🤝</span>
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
