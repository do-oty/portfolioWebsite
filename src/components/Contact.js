import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
  CheckCircle,
  AlertCircle,
  Shield,
  Eye,
  Network,
  Server,
  Search,
  GraduationCap,
  Monitor
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kczenarosa2003@gmail.com",
      href: "mailto:kczenarosa2003@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 09310010340",
      href: "tel:+639310010340"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lapu-Lapu City, Cebu, Philippines",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/do-oty",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400"
    }
  ];

      const careerInterests = [
    { icon: Shield, text: "Blue Team Cybersecurity Opportunities" },
    { icon: Eye, text: "SOC Analyst / Threat Hunter Positions" },
    { icon: Network, text: "Network Security Engineer Roles" },
    { icon: Server, text: "Systems Administration Positions" },
    { icon: Search, text: "Penetration Tester Opportunities" },
    { icon: AlertCircle, text: "Incident Response Team Roles" },
    { icon: GraduationCap, text: "Cybersecurity Internships" },
    { icon: Monitor, text: "Security Operations Projects" }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto terminal-glow">
            Ready to discuss networking opportunities, collaborate on security projects, or explore how my skills can contribute to your team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
            <h3 className="text-2xl font-bold text-white mb-6 terminal-glow">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-cyber-green mr-3" />
                <span className="text-cyber-green">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                  placeholder="Job Opportunity / Project Collaboration / Consultation"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can work together..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-network text-white hover:scale-105 shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-cyber-blue/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-cyber-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-cyber-blue transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-dark-border">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-dark-bg border border-dark-border rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                        title={social.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Career Interests */}
            <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
              <h3 className="text-xl font-bold text-white mb-6">I'm Interested In</h3>
                             <div className="space-y-3">
                 {careerInterests.map((interest, index) => {
                   const IconComponent = interest.icon;
                   return (
                     <div key={index} className="flex items-center space-x-3">
                       <IconComponent className="h-4 w-4 text-cyber-green" />
                       <span className="text-gray-300 text-sm">{interest.text}</span>
                     </div>
                   );
                 })}
              </div>
              
              <div className="mt-6 p-4 bg-dark-bg/50 rounded-lg border border-cyber-blue/30">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-cyber-blue mt-0.5" />
                  <div>
                    <p className="text-sm text-cyber-blue font-medium">Open to Opportunities</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Currently seeking entry-level positions in blue team cybersecurity and SOC operations. Available for internships and junior security analyst roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 