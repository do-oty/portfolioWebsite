import React from 'react';
import { 
  Shield, 
  Network, 
  Code, 
  Monitor,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Network Security",
      icon: Shield,
      color: "cyber-blue",
      skills: [
        { name: "Suricata IDS", description: "Configured for enterprise network lab simulation" },
        { name: "SIEM/Logging", description: "Implemented logging system for network monitoring" },
        { name: "Firewall Rules", description: "Created ACL policies for network segmentation" },
        { name: "Network ACLs", description: "Applied access control lists in GNS3 lab" },
        { name: "Port Security", description: "Configured port security measures" },
        { name: "Threat Simulation", description: "Conducted penetration testing scenarios" }
      ]
    },
    {
      title: "Networking",
      icon: Network,
      color: "cyber-green",
      skills: [
        { name: "GNS3 Simulation", description: "Built enterprise network topology with multiple VLANs" },
        { name: "VLAN Configuration", description: "Segmented HR, IT, Marketing, Management networks" },
        { name: "Network Segmentation", description: "Implemented DMZ and role-based access" },
        { name: "NAT Configuration", description: "Set up network address translation" },
        { name: "SSH/HTTPS Setup", description: "Configured secure management protocols" },
        { name: "Network Monitoring", description: "Deployed monitoring and alerting systems" }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "cyber-purple",
      skills: [
        { name: "C Programming", description: "Learning fundamentals, potential for automation scripts" },
        { name: "React.js", description: "Built this portfolio website using React" },
        { name: "JavaScript", description: "Learning web development fundamentals" },
        { name: "Python", description: "Willing to learn for network automation purposes" },
        { name: "HTML/CSS", description: "Frontend development with Tailwind CSS" },
        { name: "Git/GitHub", description: "Version control for project management" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      color: "cyber-blue",
      skills: [
        { name: "GNS3", description: "Primary tool for network simulation and testing" },
        { name: "Linux", description: "Learning system administration commands" },
        { name: "Virtual Machines", description: "Experience with VM setup and management" },
        { name: "Network Analysis", description: "Basic packet analysis and troubleshooting" },
        { name: "Documentation", description: "Technical reporting and lab documentation" },
        { name: "Research", description: "Cybersecurity threat intelligence gathering" }
      ]
    }
  ];

  const technologies = [
    { name: "GNS3", icon: Network, desc: "Network Simulation", level: "Good" },
    { name: "Suricata", icon: Shield, desc: "IDS/IPS Security", level: "Good" },
    { name: "Linux", icon: Terminal, desc: "Command Line", level: "Good" },
    { name: "React", icon: Code, desc: "Frontend Dev", level: "Good" },
    { name: "SIEM", icon: Monitor, desc: "Security Monitoring", level: "Learning" },
    { name: "Python", icon: Code, desc: "Automation Scripts", level: "Learning" },
    { name: "C", icon: Code, desc: "Programming", level: "Learning" },
    { name: "Git", icon: Terminal, desc: "Version Control", level: "Good" }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Technical Skills</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto terminal-glow px-2">
            Hands-on experience with network security tools and programming fundamentals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-dark-card rounded-xl p-4 border border-cyber-blue/30">
                <div className="flex items-start sm:items-center mb-4 gap-3">
                  <div className={`p-2 rounded-lg bg-${category.color}/20 flex-shrink-0`}>
                    <IconComponent className={`h-5 w-5 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="border-l-2 border-cyber-blue/30 pl-3 md:pl-4 py-1 md:py-2">
                      <h5 className="text-gray-300 font-medium mb-1 text-sm md:text-base">{skill.name}</h5>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-card rounded-lg p-4 border border-cyber-purple/20">
          <h3 className="text-lg font-semibold text-white text-center mb-3">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              const isGood = tech.level === 'Good';
              
              return (
                <div 
                  key={tech.name}
                  className="bg-dark-bg border border-dark-border rounded-md p-3 hover:border-cyber-blue/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <IconComponent className={`h-4 w-4 ${
                      isGood ? 'text-cyber-green' : 'text-cyber-purple'
                    }`} />
                    <div className={`text-xs px-1.5 py-0.5 rounded ${
                      isGood ? 'text-cyber-green bg-cyber-green/10' : 'text-cyber-purple bg-cyber-purple/10'
                    }`}>
                      {tech.level}
                    </div>
                  </div>
                  <h4 className="text-xs font-medium text-white mb-0.5">{tech.name}</h4>
                  <p className="text-xs text-gray-400">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-dark-card rounded-xl p-4 md:p-6 border border-dark-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyber-green/20 rounded-lg">
                <Shield className="h-5 w-5 text-cyber-green" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-cyber-green">Completed Coursework</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Network Security Fundamentals</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Cloud Computing Architecture</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Networking Protocols & Standards</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">C Programming Fundamentals</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-xl p-4 md:p-6 border border-dark-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Monitor className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400">Currently Learning</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Object-Oriented Programming (OOP)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Data Structures & Algorithms (DSA)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">Systems Administration</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">CompTIA Security+ Preparation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">TryHackMe Red Team Learning Path</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 