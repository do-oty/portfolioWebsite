import React from 'react';
import { Shield, Network, Code, Terminal, ChevronDown, Eye, Server, Search, AlertTriangle } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16 lg:pt-0 pb-20 sm:pb-24 md:pb-28">
      {/* Clean background */}
      <div className="absolute inset-0 overflow-hidden">
      </div>
      
      {/* Typing command animations */}
      <TypingAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Main heading - Mobile responsive */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold terminal-text leading-tight">
              <span className="block text-white hero-name-glow">Kyle Christian A. Zenarosa</span>
              <span className="block gradient-text terminal-cursor text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">Aspiring Cybersecurity Professional</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto terminal-glow px-2">
              BSIT-3 Student actively learning network security, threat detection, and enterprise defense systems
            </p>
          </div>

          {/* Skills icons - Mobile responsive */}
          <div className="flex justify-center space-x-3 sm:space-x-6 md:space-x-8 py-4 md:py-8">
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-2 sm:p-3 md:p-4 rounded-lg border border-dark-border group-hover:border-cyber-blue transition-all duration-300">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-2">Security</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-2 sm:p-3 md:p-4 rounded-lg border border-dark-border group-hover:border-cyber-green transition-all duration-300">
                <Network className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-cyber-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-2">Networking</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-2 sm:p-3 md:p-4 rounded-lg border border-dark-border group-hover:border-cyber-purple transition-all duration-300">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-cyber-purple group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-2">Development</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-dark-card p-2 sm:p-3 md:p-4 rounded-lg border border-dark-border group-hover:border-cyber-blue transition-all duration-300">
                <Terminal className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-2">Automation</p>
            </div>
          </div>

          {/* Career focus - Mobile responsive */}
          <div className="bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/30 rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
            <h3 className="text-base md:text-lg font-semibold text-cyber-blue mb-3 md:mb-4 terminal-glow">Career Interest Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-blue flex-shrink-0" />
                <span>Blue Team Cybersecurity</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-green flex-shrink-0" />
                <span>SOC Analyst / Threat Hunter</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Network className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-purple flex-shrink-0" />
                <span>Network Security</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Server className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-blue flex-shrink-0" />
                <span>Systems Administration</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Search className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-green flex-shrink-0" />
                <span>Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-purple flex-shrink-0" />
                <span>Incident Response</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button 
              onClick={() => document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber-primary group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-bold rounded-lg text-sm sm:text-base tracking-wide uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-20 flex items-center justify-center gap-2">
                <Terminal className="h-4 w-4" />
                View Experience
              </span>
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber-secondary group relative px-6 sm:px-8 py-4 text-cyber-green font-bold rounded-lg text-sm sm:text-base tracking-wide uppercase shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_35px_rgba(0,255,148,0.6)] hover:scale-105 hover:text-black hover:bg-cyber-green transition-all duration-300"
            >
              <span className="relative z-20 flex items-center justify-center gap-2">
                <Shield className="h-4 w-4" />
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-cyber-blue hover:text-cyber-green hover:scale-110 transition-all duration-300 p-2 rounded-full hover:shadow-[0_0_15px_rgba(0,255,148,0.5)]"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 