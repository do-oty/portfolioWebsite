import React from 'react';
import { Shield, Network, Code, Terminal, ChevronDown, Eye, Server, Search, AlertTriangle } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyber-blue/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-cyber-green/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-cyber-purple/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyber-blue/20 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold terminal-text">
              <span className="block text-white hero-name-glow">Kyle Christian A. Zenarosa</span>
              <span className="block gradient-text terminal-cursor">Aspiring Cybersecurity Professional</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto terminal-glow">
              BSIT-3 Student actively learning network security, threat detection, and enterprise defense systems
            </p>
          </div>

          {/* Skills icons */}
          <div className="flex justify-center space-x-8 py-8">
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-4 rounded-lg border border-dark-border group-hover:border-cyber-blue transition-all duration-300">
                <Shield className="h-8 w-8 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Security</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-4 rounded-lg border border-dark-border group-hover:border-cyber-green transition-all duration-300">
                <Network className="h-8 w-8 text-cyber-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Networking</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-4 rounded-lg border border-dark-border group-hover:border-cyber-purple transition-all duration-300">
                <Code className="h-8 w-8 text-cyber-purple group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Development</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-4 rounded-lg border border-dark-border group-hover:border-cyber-blue transition-all duration-300">
                <Terminal className="h-8 w-8 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Automation</p>
            </div>
          </div>

          {/* Career focus */}
                      <div className="bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/30 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-cyber-blue mb-4 terminal-glow">Career Interest Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="h-4 w-4 text-cyber-blue" />
                <span>Blue Team Cybersecurity</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Eye className="h-4 w-4 text-cyber-green" />
                <span>SOC Analyst / Threat Hunter</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Network className="h-4 w-4 text-cyber-purple" />
                <span>Network Security</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Server className="h-4 w-4 text-cyber-blue" />
                <span>Systems Administration</span>
              </div>
                             <div className="flex items-center space-x-2 text-gray-300">
                 <Search className="h-4 w-4 text-cyber-green" />
                 <span>Penetration Testing</span>
               </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <AlertTriangle className="h-4 w-4 text-cyber-purple" />
                <span>Incident Response</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-network text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Experience
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-cyber-blue hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 