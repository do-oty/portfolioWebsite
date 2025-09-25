import React from 'react';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';
import GitHubContributions from './GitHubContributions';

const About = () => {
  const chipColorClasses = {
    'cyber-green': { border: 'border-cyber-green/40', bg: 'bg-cyber-green/10', text: 'text-cyber-green' },
    'cyber-blue': { border: 'border-cyber-blue/40', bg: 'bg-cyber-blue/10', text: 'text-cyber-blue' },
    'cyber-purple': { border: 'border-cyber-purple/40', bg: 'bg-cyber-purple/10', text: 'text-cyber-purple' },
    'orange-400': { border: 'border-orange-400/40', bg: 'bg-orange-400/10', text: 'text-orange-300' },
    'cyan-400': { border: 'border-cyan-400/40', bg: 'bg-cyan-400/10', text: 'text-cyan-300' },
  };
  return (
    <section id="about" className="py-16 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">About Me</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto terminal-glow px-2">
            BSIT student passionate about network security and building secure infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Profile and Text */}
          <div className="space-y-6">
            {/* Profile Photo - ASCII Cat */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-80 rounded-lg bg-dark-card/50 border border-cyber-blue/30 p-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="ascii-art mb-2 text-xs">{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠇⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⡸⣞⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⢀⣧⢿⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢴⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣼⣞⡿⣞⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠓⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⣰⣟⢾⣽⢫⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣠⢤⣶⡻⣞⣿⣺⢯⣽⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣄⡀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⣀⣠⣤⣿⣽⣻⢾⣽⣷⣾⣽⣻⣞⣷⣳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⢻⣿⣶⣄⡀⠀⠀⠀⣉⣲⣴⢶⣞⡿⣽⣞⡷⣯⢿⡽⣞⣿⠟⠋⠁⠉⠈⠳⣟⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢻⣿⣿⣿⣿⢶⣾⣿⡽⣯⣟⡾⣽⡷⣯⣟⡽⡾⣽⡯⠁⠀⠀⠀⠀⠀⠀⢮⣭⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⢞⣿⣿⢯⡿⣿⣯⣟⣷⣯⢿⣳⣟⡷⣽⣼⣻⣽⠀⠀⠀⠀⠀⠀⠀⢀⣼⡯⡗⠋⠤⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢾⣿⣿⣯⣽⣾⣿⣾⣗⡿⣯⡷⣯⣟⡷⣞⣼⣿⣀⠀⠀⠀⠀⢀⣠⡿⣏⡗⠈⠐⠈⠅⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣼⠛⠏⠉⠉⠽⢟⢿⣿⣿⣿⣿⣷⣻⢾⡽⣞⡷⠄⡹⣶⢿⣻⢿⣻⡽⢯⣼⢦⠶⠁⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣸⣯⠇⠀⠀⠀⠀⠀⠁⣽⣿⣿⣿⣷⣯⣿⣽⣛⡦⠀⠀⢩⣿⣹⢯⣷⢻⣟⠺⢣⡖⣘⠤⠓⠀⠀⠀⠀⠀⠀
⠀⠀⢈⣿⡃⠁⠀⠀⠀⢀⣤⣾⣟⢿⣻⣿⣿⣟⡾⣽⡳⠄⠎⢳⣯⢯⣟⡾⢯⣞⣯⣓⠉⢀⠀⠀⡄⢢⡀⠀⠀⠀
⠀⠀⣸⣷⣷⣶⣳⣶⣺⣿⣿⣳⢯⣟⣿⣿⣳⢯⠛⠅⠃⠀⠀⣴⣿⡿⣬⢶⠾⠙⣊⣥⠾⡒⠊⢁⢠⠣⣌⠀⠀⠀
⠀⠀⢺⡽⣾⡽⣯⣟⣿⡿⣯⣿⣿⣾⢿⣿⠳⢏⣈⢠⠀⠀⣰⢿⡿⣽⣉⡶⠌⠋⠉⣀⡀⠁⠀⠀⠀⣘⡐⣂⠀⠀
⠀⠀⠘⣽⣳⣟⣳⣟⣾⣽⣿⣿⣿⣿⣿⣦⣜⡻⡽⠆⠧⣴⡟⣯⢟⡳⣭⠲⠄⠐⠀⠀⠀⠈⠁⠉⠑⢊⡕⢃⠄⠀
⠀⠀⠀⠹⣿⣾⣿⣯⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣾⢧⠀⠹⠾⡵⡞⡽⢢⣃⠐⠀⠀⠄⡐⠀⠀⠀⡘⢦⠘⣌⠀⠀
⠀⠀⠀⠐⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠒⡈⠀⡀⠄⡑⠢⣉⠴⣈⣆
⠀⠀⠀⠀⠀⣀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣏⡴⣶⣵⣢⢤⢠⡀⡄⢠⠐⡰⢌⡱⠀⡁⡀⠆⡥⠆⡥⣛⡽⣾
⠀⠀⡀⠔⠉⠀⠀⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣻⢷⣯⡽⣞⣷⣻⡼⣡⢋⡔⠣⠜⡐⢐⠠⡓⣤⣙⣲⣽⣻⢷
⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡿⣽⣞⣷⣻⡴⣣⢜⡱⣊⡕⣊⠠⡙⡰⣭⢷⣯⣿⢿`}</div>
                    <div className="text-cyber-blue text-sm font-bold terminal-text">Kyle.exe</div>
                    <div className="text-cyan-400 text-xs terminal-text">~/cybersec-student$</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Aspiring Cybersecurity Professional
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a BSIT-3 student, I'm actively learning blue team cybersecurity operations and network defense. 
                  I'm focused on understanding threat detection, incident response, and building robust security monitoring systems 
                  to protect enterprise networks.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm combining networking fundamentals with cybersecurity principles to understand how to identify and mitigate threats. 
                  From SIEM analysis to network forensics, I'm passionate about learning organizational 
                  security practices and developing skills in penetration testing and incident response.
                </p>
              </div>

                             <div className="flex flex-wrap gap-2">
                 <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyber-blue/30 bg-dark-card text-sm w-full sm:w-auto min-w-0">
                   <GraduationCap className="h-4 w-4 text-cyber-blue flex-shrink-0" />
                   <span className="text-gray-300 truncate">BSIT Student</span>
                 </span>
                 <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyber-green/30 bg-dark-card text-sm w-full sm:w-auto min-w-0">
                   <Target className="h-4 w-4 text-cyber-green flex-shrink-0" />
                   <span className="text-gray-300 truncate">Network Security</span>
                 </span>
                 <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyber-purple/30 bg-dark-card text-sm w-full sm:w-auto min-w-0">
                   <TrendingUp className="h-4 w-4 text-cyber-purple flex-shrink-0" />
                   <span className="text-gray-300 truncate">Blue Team Goal</span>
                 </span>
               </div>
            </div>
          </div>

          {/* Right side - Skills and courses */}
          <div className="space-y-6">
            {/* Current Focus */}
            <div className="bg-dark-card p-6 rounded-xl border border-dark-border">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-cyber-green"></span>
                Current Focus
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { title: 'Finish BSIT degree', status: 'Active', color: 'cyber-green', desc: 'Complete academic requirements and capstone deliverables.' },
                  { title: 'IT & Networking fundamentals', status: 'Learning', color: 'cyber-blue', desc: 'Strengthen core networking, Linux, and troubleshooting skills.' },
                  { title: 'Hands-on labs & documentation', status: 'Practicing', color: 'cyber-purple', desc: 'Build repeatable labs and write concise runbooks.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-dark-bg rounded-lg border border-dark-border">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{item.title}</span>
                      {(() => {
                        const c = chipColorClasses[item.color] || chipColorClasses['cyber-blue'];
                        return (
                          <span className={`text-xs font-medium px-2 py-0.5 rounded border whitespace-nowrap ${c.border} ${c.text} ${c.bg}`}>
                            {item.status}
                          </span>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* GitHub Contributions */}
            <GitHubContributions username="do-oty" />

            {/* Next Steps */}
            <div className="bg-dark-card p-6 rounded-xl border border-dark-border">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-cyber-purple"></span>
                Next Steps
              </h3>

              <div className="space-y-3">
                {[
                  { title: 'Industry Certifications', badge: 'Planned', color: 'orange-400', desc: 'e.g., Security+ • Google Cybersecurity' },
                  { title: 'OJT / SOC Experience', badge: 'Goal', color: 'cyan-400', desc: 'On-the-job training and real-world incident handling' },
                  { title: 'Advanced Threat Hunting', badge: 'Future', color: 'cyber-purple', desc: 'Automation, detection engineering, purple teaming' }
                ].map((step, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white leading-tight">{step.title}</h4>
                      {(() => {
                        const c = chipColorClasses[step.color] || chipColorClasses['cyber-blue'];
                        return (
                          <span className={`text-xs px-2 py-0.5 rounded border whitespace-nowrap ${c.border} ${c.text} ${c.bg}`}>{step.badge}</span>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 