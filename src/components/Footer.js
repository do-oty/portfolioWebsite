import React from 'react';
import { Heart, Shield, Network, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const technicalSkills = [
    'Network Security',
    'GNS3 Simulation',
    'React Development',
    'C Programming',
    'Python Automation',
    'Linux Administration'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/do-oty', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kczenarosa2003@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card/50 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Network className="h-8 w-8 text-cyber-blue" />
                <Shield className="h-4 w-4 text-cyber-green absolute -top-1 -right-1" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              BSIT student specializing in network security and development. 
              Building secure, scalable network solutions for the future.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-bg border border-dark-border rounded-lg text-gray-400 hover:text-cyber-blue hover:border-cyber-blue transition-all duration-300"
                    title={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-cyber-green hover:shadow-[0_0_8px_rgba(0,255,148,0.2)] px-2 py-1 rounded transition-all duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Skills</h3>
            <div className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-400 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Ready for opportunities in:</p>
                <p className="text-cyber-blue text-sm font-medium">Network Security & DevOps</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Open to:</p>
                <p className="text-cyber-green text-sm">Entry-level positions & Internships</p>
              </div>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
              >
                Contact Me
                <Mail className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kyle Zenarosa Portfolio. Built with React & Tailwind CSS.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed for network security professionals and development enthusiasts.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> for the networking community
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-dark-bg border border-cyber-green/50 rounded-lg text-gray-400 hover:text-cyber-green hover:border-cyber-green hover:bg-cyber-green/10 hover:shadow-[0_0_10px_rgba(0,255,148,0.3)] transition-all duration-300"
                title="Back to top"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 