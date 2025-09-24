import React from 'react';
import { 
  Shield, 
  Network, 
  Eye, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  Monitor
} from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: Network,
      title: "Enterprise Network Design",
      description: "Designed and implemented a multi-VLAN enterprise network with segmented security zones",
      technologies: ["GNS3", "VLAN", "ACLs", "Network Segmentation"]
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Deployed comprehensive security controls including firewalls, IDS, and access controls",
      technologies: ["Suricata IDS", "Firewall Rules", "Port Security", "NAT"]
    },
    {
      icon: Eye,
      title: "Threat Detection & Monitoring",
      description: "Implemented SIEM logging and conducted simulated cyberattacks to validate defenses",
      technologies: ["SIEM", "Log Analysis", "Threat Simulation", "Incident Response"]
    },
    {
      icon: Lock,
      title: "Secure Management",
      description: "Established secure administrative access with SSH and HTTPS protocols",
      technologies: ["SSH", "HTTPS", "Automated Backups", "Cron Jobs"]
    }
  ];

  const networkComponents = [
    { name: "HR VLAN", status: "Secured", color: "cyber-green" },
    { name: "IT VLAN", status: "Secured", color: "cyber-green" },
    { name: "Marketing VLAN", status: "Secured", color: "cyber-green" },
    { name: "Management VLAN", status: "Secured", color: "cyber-green" },
    { name: "DMZ", status: "Monitored", color: "cyber-blue" },
    { name: "Suricata IDS", status: "Active", color: "cyber-purple" },
    { name: "SIEM Logging", status: "Active", color: "cyber-purple" },
    { name: "Firewall", status: "Active", color: "cyber-blue" }
  ];

  const securityLayers = [
    {
      layer: "Physical Layer",
      controls: ["Port Security", "Physical Access Controls", "Cable Management"],
      threats: ["Unauthorized Physical Access", "Cable Tampering"]
    },
    {
      layer: "Network Layer",
      controls: ["VLAN Segmentation", "ACLs", "Firewall Rules"],
      threats: ["Lateral Movement", "Network Scanning", "VLAN Hopping"]
    },
    {
      layer: "Application Layer",
      controls: ["SSH Authentication", "HTTPS Encryption", "Service Hardening"],
      threats: ["Brute Force Attacks", "Service Exploitation", "Data Interception"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Project Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto terminal-glow">
            Hands-on experience designing and securing enterprise-grade network infrastructure
          </p>
        </div>

        {/* Main Project Showcase */}
        <div className="bg-dark-card rounded-xl p-8 border border-dark-border mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-cyber-blue/20 mr-4">
              <Shield className="h-8 w-8 text-cyber-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enterprise Network Security Lab</h3>
              <p className="text-gray-400">GNS3 Simulation • Security-Focused Network Design</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Description */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Designed and implemented a comprehensive enterprise-grade network simulation focusing on 
                security best practices and threat mitigation. The project demonstrates practical knowledge 
                of network segmentation, security controls, and incident response procedures.
              </p>

              <div className="bg-dark-bg/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-cyber-green mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green" />
                    <span className="text-gray-300 text-sm">Multi-VLAN network with role-based access control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green" />
                    <span className="text-gray-300 text-sm">Comprehensive security policy implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green" />
                    <span className="text-gray-300 text-sm">Intrusion detection and SIEM integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green" />
                    <span className="text-gray-300 text-sm">Successful penetration testing validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Status Dashboard */}
            <div className="bg-dark-bg/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-cyber-blue mb-4 flex items-center">
                <Monitor className="h-5 w-5 mr-2" />
                Network Components Status
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {networkComponents.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-dark-card rounded border border-dark-border">
                    <span className="text-gray-300 text-sm">{component.name}</span>
                    <span className={`text-xs px-2 py-1 rounded text-${component.color} bg-${component.color}/20`}>
                      {component.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="bg-dark-card rounded-xl p-6 border border-dark-border hover:border-cyber-blue transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/20 mr-4">
                    <IconComponent className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-dark-bg text-cyber-blue text-xs rounded-full border border-cyber-blue/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Layers Analysis */}
        <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 text-cyber-green mr-3" />
            OSI Layer Security Analysis
          </h3>
          <p className="text-gray-300 mb-8">
            Comprehensive security implementation across multiple OSI layers with documented threat mitigations
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-dark-bg/50 rounded-lg p-6 border border-dark-border">
                <h4 className="text-lg font-semibold text-cyber-purple mb-4">{layer.layer}</h4>
                
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-cyber-green mb-2">Security Controls</h5>
                  <div className="space-y-1">
                    {layer.controls.map((control, controlIndex) => (
                      <div key={controlIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                        <span className="text-gray-300 text-sm">{control}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-red-400 mb-2">Mitigated Threats</h5>
                  <div className="space-y-1">
                    {layer.threats.map((threat, threatIndex) => (
                      <div key={threatIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{threat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 