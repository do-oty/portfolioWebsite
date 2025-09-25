import React from 'react';
import { 
  Shield, 
  Network, 
  Cloud, 
  Terminal, 
  CheckCircle
} from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Cloud Computing Certificate",
      provider: "ZUITT",
      description: "Cloud infrastructure, services, and deployment strategies",
      icon: Cloud,
      color: "cyber-blue",
      status: "Completed",
      category: "Certifications",
      type: "Certificate"
    }
  ];

  const courses = [
    {
      id: 2,
      title: "Introduction to Networks",
      provider: "Cisco NetAcad",
      description: "Network fundamentals, protocols, and basic configuration",
      icon: Network,
      color: "cyber-green",
      status: "Completed", 
      category: "Course Completions",
      type: "Course"
    },
    {
      id: 3,
      title: "Switching and Routing",
      provider: "Cisco NetAcad", 
      description: "Advanced network switching, routing protocols, and VLAN configuration",
      icon: Network,
      color: "cyber-green",
      status: "Completed",
      category: "Course Completions",
      type: "Course"
    },
    {
      id: 4,
      title: "CyberOps Associate",
      provider: "Cisco NetAcad",
      description: "Security operations center fundamentals and incident response",
      icon: Shield,
      color: "cyber-purple",
      status: "Completed",
      category: "Course Completions",
      type: "Course"
    },
    {
      id: 5,
      title: "Linux Essentials",
      provider: "Cisco NetAcad",
      description: "Linux operating system fundamentals and command line proficiency",
      icon: Terminal,
      color: "cyber-blue",
      status: "Completed",
      category: "Course Completions",
      type: "Course"
    }
  ];

  const pursuing = [
    {
      id: 6,
      title: "BSIT (Bachelor of Science in Information Technology)",
      provider: "University of San Carlos",
      description: "Comprehensive degree program covering software development, networking, and information systems",
      icon: Terminal,
      color: "cyber-blue",
      status: "In Progress",
      category: "Currently Pursuing",
      type: "Degree",
      eta: "Ongoing"
    }
  ];

  const planned = [
    {
      id: 7,
      title: "CompTIA Security+",
      provider: "CompTIA",
      description: "Foundation-level cybersecurity certification covering threats, attacks, and vulnerabilities",
      icon: Shield,
      color: "cyber-purple",
      status: "Planned",
      category: "Planned",
      type: "Certification"
    },
    {
      id: 8,
      title: "Google Cybersecurity Certificate",
      provider: "Google",
      description: "Comprehensive cybersecurity program covering incident response, risk management, and security tools",
      icon: Shield,
      color: "cyber-blue",
      status: "Planned",
      category: "Planned",
      type: "Certificate"
    },
    {
      id: 9,
      title: "CCNA (Cisco Certified Network Associate)",
      provider: "Cisco",
      description: "Professional-level networking certification covering routing, switching, and network security",
      icon: Network,
      color: "cyber-green",
      status: "Planned",
      category: "Planned",
      type: "Certification"
    }
  ];

  const finalGoals = [
    {
      id: 10,
      title: "OSCP (Offensive Security Certified Professional)",
      provider: "Offensive Security",
      description: "Advanced penetration testing certification with hands-on exploit development and ethical hacking",
      icon: Terminal,
      color: "cyber-purple",
      status: "Future Goal",
      category: "Long-term Goals",
      type: "Certification"
    },
    {
      id: 11,
      title: "GCIH (GIAC Certified Incident Handler)",
      provider: "SANS/GIAC",
      description: "Premier blue team certification focusing on incident response, digital forensics, and threat hunting",
      icon: Shield,
      color: "cyber-blue",
      status: "Future Goal",
      category: "Long-term Goals",
      type: "Certification"
    }
  ];

  const allCredentials = [...certifications, ...courses, ...pursuing, ...planned, ...finalGoals];

  const categories = [...new Set(allCredentials.map(item => item.category))];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Education & Certifications</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto terminal-glow px-2">
            Academic background and professional certifications in information technology and cybersecurity
          </p>
        </div>



        <div className="space-y-8">
          {categories.map((category) => {
            const categoryItems = allCredentials.filter(item => item.category === category);
            
            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-5 rounded-full ${
                    category === 'Certifications' ? 'bg-cyber-green' :
                    category === 'Course Completions' ? 'bg-cyber-blue' :
                    category === 'Currently Pursuing' ? 'bg-cyber-blue' :
                    category === 'Planned' ? 'bg-orange-400' :
                    category === 'Long-term Goals' ? 'bg-cyber-purple' :
                    'bg-gray-400'
                  }`}></div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map((item) => {
                    const IconComponent = item.icon;
                    
                    return (
                      <div 
                        key={item.id}
                        className="bg-dark-card rounded-lg p-4 border border-dark-border hover:border-cyber-blue/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className={`p-2 rounded-lg bg-${item.color}/10 border border-${item.color}/20`}>
                            <IconComponent className={`h-5 w-5 text-${item.color}`} />
                          </div>
                          <div className="flex items-center gap-1">
                            {item.status === 'Completed' ? (
                              <CheckCircle className="h-4 w-4 text-cyber-green" />
                            ) : item.status === 'In Progress' ? (
                              <div className="h-4 w-4 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin"></div>
                            ) : item.status === 'Future Goal' ? (
                              <div className="h-4 w-4 border-2 border-cyber-purple rounded-full flex items-center justify-center">
                                <div className="h-1.5 w-1.5 bg-cyber-purple rounded-full"></div>
                              </div>
                            ) : item.status === 'Planned' ? (
                              <div className="h-4 w-4 border-2 border-orange-400 rounded-full"></div>
                            ) : (
                              <div className="h-4 w-4 border-2 border-gray-400 rounded-full"></div>
                            )}
                            <span className={`text-xs font-medium ${
                              item.status === 'Completed' ? 'text-cyber-green' : 
                              item.status === 'In Progress' ? 'text-cyber-blue' : 
                              item.status === 'Future Goal' ? 'text-cyber-purple' :
                              item.status === 'Planned' ? 'text-orange-400' :
                              'text-gray-400'
                            }`}>{item.status}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                          {item.title}
                        </h4>
                        
                        <div className="text-xs font-medium text-cyber-blue mb-2">
                          {item.provider}
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs px-2 py-1 bg-dark-bg border border-dark-border rounded text-gray-400">
                            {item.type}
                          </span>
                          {item.eta && (
                            <div className="text-xs text-gray-500">
                              {item.eta}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 