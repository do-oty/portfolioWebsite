import React, { useState } from 'react';
import { 
  Monitor, 
  Shield, 
  Eye, 
  Calculator, 
  Terminal, 
  Network, 
  Code, 
  Search,
  ExternalLink,
  Github,
  ArrowRight
} from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Network Monitoring Dashboard",
      category: "react",
      description: "Real-time network monitoring dashboard built with React, displaying device status, bandwidth usage, and network topology visualization.",
      technologies: ["React", "D3.js", "WebSocket", "Node.js", "SNMP"],
      features: [
        "Real-time device monitoring",
        "Network topology visualization",
        "Bandwidth usage analytics",
        "Alert management system",
        "Historical data analysis"
      ],
      icon: Monitor,
      status: "Planned",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Firewall Rule Visualizer",
      category: "react",
      description: "Interactive web application for visualizing and managing firewall rules with drag-and-drop policy builder and rule conflict detection.",
      technologies: ["React", "Firebase", "Chart.js", "Python", "iptables"],
      features: [
        "Visual rule builder",
        "Policy conflict detection",
        "Rule optimization suggestions",
        "Import/Export configurations",
        "Security assessment reports"
      ],
      icon: Shield,
      status: "In Development",
      complexity: "Advanced"
    },
    {
      id: 3,
      title: "Suricata Log Viewer",
      category: "react",
      description: "Comprehensive log analysis dashboard for Suricata IDS with threat visualization and automated incident response workflows.",
      technologies: ["React", "Elasticsearch", "Kibana", "Python", "Docker"],
      features: [
        "Real-time log streaming",
        "Threat intelligence integration",
        "Automated alerting",
        "Incident timeline visualization",
        "Custom rule management"
      ],
      icon: Eye,
      status: "Concept",
      complexity: "Expert"
    },
    {
      id: 4,
      title: "IP Address Subnet Calculator",
      category: "react",
      description: "Advanced subnet calculator with VLSM support, network planning tools, and visual subnet representation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PWA"],
      features: [
        "VLSM calculator",
        "Visual subnet mapping",
        "Network planning wizard",
        "IP range validation",
        "Export to documentation"
      ],
      icon: Calculator,
      status: "Completed",
      complexity: "Intermediate"
    },
    {
      id: 5,
      title: "TCP Port Scanner",
      category: "c",
      description: "High-performance multithreaded port scanner written in C with stealth scanning capabilities and service detection.",
      technologies: ["C", "Sockets", "Threading", "Linux", "TCP/IP"],
      features: [
        "Multithreaded scanning",
        "Stealth scan techniques",
        "Service fingerprinting",
        "Custom timing options",
        "Output formatting"
      ],
      icon: Search,
      status: "In Development",
      complexity: "Advanced"
    },
    {
      id: 6,
      title: "Mini Packet Sniffer",
      category: "c",
      description: "Lightweight packet capture and analysis tool with protocol decoding and traffic filtering capabilities.",
      technologies: ["C", "libpcap", "Raw Sockets", "Protocol Analysis"],
      features: [
        "Real-time packet capture",
        "Protocol decoding",
        "Traffic filtering",
        "Hex dump analysis",
        "Statistics generation"
      ],
      icon: Network,
      status: "Planned",
      complexity: "Expert"
    },
    {
      id: 7,
      title: "Network Config Automation",
      category: "python",
      description: "Python automation suite for network device configuration management with version control and rollback capabilities.",
      technologies: ["Python", "Netmiko", "Jinja2", "Git", "YAML"],
      features: [
        "Multi-vendor support",
        "Configuration templates",
        "Version control integration",
        "Automated rollback",
        "Compliance checking"
      ],
      icon: Terminal,
      status: "In Development",
      complexity: "Advanced"
    },
    {
      id: 8,
      title: "CLI to GUI Tool Wrapper",
      category: "react",
      description: "Universal web interface for command-line network tools with saved configurations and batch execution capabilities.",
      technologies: ["React", "Node.js", "Socket.io", "Docker", "REST API"],
      features: [
        "Dynamic form generation",
        "Real-time command output",
        "Configuration presets",
        "Batch job execution",
        "Results export"
      ],
      icon: Code,
      status: "Concept",
      complexity: "Advanced"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'react', name: 'React + Networking', count: projects.filter(p => p.category === 'react').length },
    { id: 'c', name: 'C Programming', count: projects.filter(p => p.category === 'c').length },
    { id: 'python', name: 'Python Automation', count: projects.filter(p => p.category === 'python').length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-cyber-green bg-cyber-green/20';
      case 'In Development': return 'text-cyber-blue bg-cyber-blue/20';
      case 'Planned': return 'text-yellow-400 bg-yellow-400/20';
      case 'Concept': return 'text-cyber-purple bg-cyber-purple/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Intermediate': return 'text-cyan-400';
      case 'Advanced': return 'text-yellow-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Portfolio Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Networking-focused development projects combining security expertise with modern development practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-cyber-blue text-white border-cyber-blue'
                  : 'bg-dark-card text-gray-300 border-dark-border hover:border-cyber-blue hover:text-cyber-blue'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="bg-dark-card rounded-xl border border-dark-border hover:border-cyber-blue transition-all duration-300 group">
                {/* Project Header */}
                <div className="p-6 border-b border-dark-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-cyber-blue/20 group-hover:bg-cyber-blue/30 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-cyber-blue" />
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getComplexityColor(project.complexity)} bg-dark-bg border border-current/30`}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="p-6 border-b border-dark-border">
                  <h4 className="text-sm font-semibold text-cyber-green mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ArrowRight className="h-3 w-3 text-cyber-green" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <p className="text-xs text-gray-500 mt-2">
                        +{project.features.length - 3} more features
                      </p>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-cyber-purple mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-dark-bg text-cyber-blue text-xs rounded border border-cyber-blue/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-network text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </button>
                    <button className="px-4 py-2 border border-cyber-blue text-cyber-blue text-sm font-medium rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Development Philosophy */}
        <div className="mt-16 bg-dark-card rounded-xl p-8 border border-dark-border">
          <h3 className="text-2xl font-bold text-white mb-6">Development Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-cyber-blue/20 rounded-lg inline-block mb-4">
                <Shield className="h-8 w-8 text-cyber-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security First</h4>
              <p className="text-gray-300 text-sm">
                Every project incorporates security best practices and threat modeling from the ground up.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-cyber-green/20 rounded-lg inline-block mb-4">
                <Network className="h-8 w-8 text-cyber-green" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Network Focused</h4>
              <p className="text-gray-300 text-sm">
                Solutions designed specifically for network professionals and infrastructure management.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-cyber-purple/20 rounded-lg inline-block mb-4">
                <Code className="h-8 w-8 text-cyber-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Modern Development</h4>
              <p className="text-gray-300 text-sm">
                Utilizing contemporary frameworks and practices for maintainable, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 