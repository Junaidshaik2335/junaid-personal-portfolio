
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_aw9ut2o', // Service ID
        'template_cn45ahn', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'BmnF9lhg9hGOPM2g-' // Public Key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "smdjunaid2335@gmail.com",
      href: "mailto:smdjunaid2335@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8074722358",
      href: "tel:+918074722358",
      color: "text-green-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/mohammed-junaid",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/smdjunaid",
      color: "text-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="mr-3 h-6 w-6 text-blue-600" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry, collaboration, etc."
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, requirements, timeline, budget, or any questions you have..."
                      rows={6}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors ${method.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{method.label}</h3>
                          <p className="text-gray-600">{method.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Availability & Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Status:</span>
                    <Badge className="bg-green-100 text-green-800">
                      Available for new projects
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Response Time:</span>
                    <span className="font-semibold text-gray-900">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Timezone:</span>
                    <span className="font-semibold text-gray-900">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Preferred Contact:</span>
                    <span className="font-semibold text-gray-900">Email</span>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MapPin className="mr-2 h-6 w-6 text-blue-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Based in India, available for remote work worldwide. 
                    Open to discussing different time zones and project requirements.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      🌍 Remote-first approach with flexible working hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What is your typical response time?
                </h3>
                <p className="text-gray-600">
                  I respond to all inquiries within 24 hours, usually much sooner. For urgent 
                  matters, feel free to mention it in your message.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-gray-600">
                  Absolutely! I work with clients worldwide and am flexible with different 
                  time zones. Most of my communication is done via email and video calls.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What information should I include in my inquiry?
                </h3>
                <p className="text-gray-600">
                  Please include details about your project requirements, timeline, budget range, 
                  and any specific technologies or features you need. The more details you provide, 
                  the better I can understand and assist with your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
