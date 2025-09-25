import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
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
    <section id="contact" className="py-16 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto terminal-glow px-2">
            Ready to discuss opportunities and collaborate on security projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-dark-card rounded-xl p-5 border border-cyber-green/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-dark-bg border border-cyber-green/30 rounded-lg">
                <Mail className="h-5 w-5 text-cyber-green" />
              </div>
              <h3 className="text-lg font-bold text-white">Contact Info</h3>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-dark-bg/30 rounded-lg hover:bg-dark-bg/50 transition-all duration-300">
                    <div className="p-2 bg-cyber-green/20 rounded-lg">
                      <IconComponent className="h-4 w-4 text-cyber-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-cyber-green transition-colors duration-300 font-medium text-sm block truncate"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-4 pt-4 border-t border-dark-border">
              <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
              <div className="flex space-x-3 mb-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-dark-bg border border-dark-border rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-105`}
                      title={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Resume Download */}
              <button className="w-full px-4 py-2 border-2 border-cyber-green text-cyber-green font-semibold rounded-lg hover:bg-cyber-green hover:text-black transition-all duration-300 flex items-center justify-center text-sm">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Career Interests */}
          <div className="bg-dark-card rounded-xl p-5 border border-dark-border">
            <h3 className="text-lg font-bold text-white mb-4">Interests</h3>
            <div className="space-y-2">
              {careerInterests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-dark-bg/30 rounded-lg">
                    <IconComponent className="h-4 w-4 text-cyber-green flex-shrink-0" />
                    <span className="text-gray-300 text-xs">{interest.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 p-3 bg-dark-bg/50 rounded-lg border border-cyber-blue/30">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-4 w-4 text-cyber-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-cyber-blue font-medium">Open to Opportunities</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Seeking blue team cybersecurity and SOC analyst roles.
                  </p>
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