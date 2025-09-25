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
    <section id="experience" className="py-16 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">Project Experience</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto terminal-glow px-2">
            Enterprise-grade network infrastructure design and security
          </p>
        </div>

        <div className="bg-dark-card rounded-xl p-5 border border-dark-border mb-8">
          <div className="flex items-start sm:items-center mb-5 gap-3">
            <div className="p-2 rounded-lg bg-cyber-blue/20 flex-shrink-0">
              <Shield className="h-6 w-6 text-cyber-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">Enterprise Network Security Lab</h3>
              <p className="text-gray-400 text-sm">GNS3 Simulation • Security-Focused Network Design</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Designed and implemented a comprehensive enterprise-grade network simulation focusing on 
                security best practices and threat mitigation. The project demonstrates practical knowledge 
                of network segmentation, security controls, and incident response procedures.
              </p>

              <div className="bg-dark-bg/50 rounded-lg p-4">
                <h4 className="text-base md:text-lg font-semibold text-cyber-green mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Multi-VLAN network with role-based access control</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Comprehensive security policy implementation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Intrusion detection and SIEM integration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Successful penetration testing validation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-bg/50 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-cyber-blue mb-4 flex items-center">
                <Monitor className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                Network Components
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {networkComponents.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-dark-card rounded border border-dark-border min-w-0">
                    <span className="text-gray-300 text-xs sm:text-sm truncate mr-2">{component.name}</span>
                    <span className={`text-xs px-2 py-1 rounded text-${component.color} bg-${component.color}/20 flex-shrink-0 whitespace-nowrap`}>
                      {component.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="bg-dark-card rounded-xl p-4 md:p-6 border border-dark-border hover:border-cyber-blue transition-colors duration-300">
                <div className="flex items-start sm:items-center mb-4 gap-3">
                  <div className="p-2 md:p-3 rounded-lg bg-cyber-blue/20 flex-shrink-0">
                    <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-cyber-blue" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">{achievement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 md:px-3 py-1 bg-dark-bg text-cyber-blue text-xs rounded-full border border-cyber-blue/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-card rounded-xl p-6 md:p-8 border border-dark-border">
          <div className="flex items-start sm:items-center mb-6 gap-3">
            <div className="p-2 rounded-lg bg-cyber-green/20 flex-shrink-0">
              <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-cyber-green" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">OSI Layer Security Analysis</h3>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Comprehensive security implementation across multiple OSI layers with documented threat mitigations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-dark-bg/50 rounded-lg p-4 md:p-6 border border-dark-border hover:border-cyber-purple/50 transition-colors duration-300">
                <h4 className="text-base md:text-lg font-semibold text-cyber-purple mb-4">{layer.layer}</h4>
                
                <div className="mb-4">
                  <h5 className="text-xs md:text-sm font-medium text-cyber-green mb-2 uppercase tracking-wide">Security Controls</h5>
                  <div className="space-y-1">
                    {layer.controls.map((control, controlIndex) => (
                      <div key={controlIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{control}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs md:text-sm font-medium text-red-400 mb-2 uppercase tracking-wide">Mitigated Threats</h5>
                  <div className="space-y-1">
                    {layer.threats.map((threat, threatIndex) => (
                      <div key={threatIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{threat}</span>
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