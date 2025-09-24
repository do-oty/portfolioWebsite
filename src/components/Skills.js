import React from 'react';
import { 
  Shield, 
  Network, 
  Code, 
  Monitor,
  Wifi,
  Terminal,
  Cloud
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
    { name: "GNS3", icon: Network, category: "Network Simulation" },
    { name: "Suricata", icon: Shield, category: "IDS/IPS" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Linux", icon: Terminal, category: "Operating System" },
    { name: "SIEM", icon: Monitor, category: "Security Monitoring" },
    { name: "Cisco", icon: Wifi, category: "Network Hardware" },
    { name: "Python", icon: Code, category: "Automation" },
    { name: "Cloud", icon: Cloud, category: "Infrastructure" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Technical Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto terminal-glow">
            Actively developing hands-on experience with network security tools, lab environments, and programming fundamentals
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-dark-card rounded-xl p-6 border border-cyber-blue/30">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 mr-4`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="border-l-2 border-cyber-blue/30 pl-4 py-2">
                      <h5 className="text-gray-300 font-medium mb-1">{skill.name}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="bg-dark-card/50 rounded-xl p-8 border border-dark-border">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white terminal-glow">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-dark-card p-4 rounded-lg border border-dark-border group-hover:border-cyber-blue transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="h-8 w-8 text-gray-400 group-hover:text-cyber-blue transition-colors duration-300 mx-auto" />
                  </div>
                  <h4 className="text-sm font-medium text-white mt-2">{tech.name}</h4>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
            <h3 className="text-xl font-semibold text-cyber-green mb-4">Completed Coursework</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span className="text-gray-300">Network Security Fundamentals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span className="text-gray-300">Cloud Computing Architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span className="text-gray-300">Networking Protocols & Standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span className="text-gray-300">C Programming Fundamentals</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Currently Learning</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Object-Oriented Programming (OOP)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Data Structures & Algorithms (DSA)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Systems Administration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">CompTIA Security+ Preparation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">TryHackMe Red Team Learning Path</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 