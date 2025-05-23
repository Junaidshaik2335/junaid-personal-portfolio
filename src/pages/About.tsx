
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
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
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my journey, education, and the skills that drive my passion for technology.
          </p>
        </div>
      </section>

      {/* Personal Bio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
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
                <p>
                  What drives me is the endless possibility of technology to transform ideas into 
                  reality. Whether it's building a complex e-commerce platform or designing a 
                  simple task management app, I approach every project with enthusiasm, attention 
                  to detail, and a commitment to excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Bachelor of Technology (BTech)
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      Electronics and Communication Engineering
                    </p>
                    <p className="text-gray-600 mb-2">Currently Pursuing</p>
                    <p className="text-gray-700">
                      Focusing on the intersection of electronics and communication systems, 
                      with additional specialization in software development and web technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💻</span>
                  Technical Skills
                </h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🤝</span>
                  Soft Skills
                </h3>
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
      </section>

      {/* Values & Approach */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Problem-Focused</h3>
                <p className="text-gray-600">
                  I believe in understanding the problem deeply before jumping into solutions, 
                  ensuring every line of code serves a purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation-Driven</h3>
                <p className="text-gray-600">
                  I stay updated with the latest technologies and best practices, 
                  constantly learning and adapting to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration-Oriented</h3>
                <p className="text-gray-600">
                  I value teamwork and clear communication, believing that the best 
                  solutions emerge from collaborative efforts and diverse perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
