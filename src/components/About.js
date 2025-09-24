import React from 'react';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 terminal-text">
            <span className="gradient-text terminal-prompt terminal-glow">About Me</span>
          </h2>
                      <p className="text-gray-300 text-lg max-w-3xl mx-auto terminal-glow">
              BSIT student with a passion for network security and development, 
              building the future of secure, automated network infrastructure.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Profile and Text */}
          <div className="space-y-8">
            {/* Profile Photo - ASCII Cat */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-80 rounded-lg bg-dark-card/50 border border-cyber-blue/30 p-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="ascii-art mb-2">{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                <GraduationCap className="h-8 w-8 text-cyber-blue mx-auto mb-2" />
                <h4 className="font-semibold text-white">Education</h4>
                <p className="text-sm text-gray-400">BSIT Student</p>
              </div>
              <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                <Target className="h-8 w-8 text-cyber-green mx-auto mb-2" />
                <h4 className="font-semibold text-white">Focus</h4>
                <p className="text-sm text-gray-400">Network Security</p>
              </div>
              <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                <TrendingUp className="h-8 w-8 text-cyber-purple mx-auto mb-2" />
                <h4 className="font-semibold text-white">Goal</h4>
                <p className="text-sm text-gray-400">Blue Team Cybersecurity</p>
              </div>
            </div>
            </div>
          </div>

          {/* Right side - Skills and courses */}
          <div className="space-y-8">
            {/* Current Skills */}
            <div className="bg-dark-card rounded-xl p-6 border border-cyber-blue/20">
              <h4 className="text-xl font-semibold text-cyber-blue mb-4">Current Skills & Expertise</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">Learning C programming fundamentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">Network Security & Cloud Computing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">Networking 1 & 2 (Completed)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">React Frontend Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">Enterprise Network Simulation (GNS3)</span>
                </div>
              </div>
            </div>

            {/* Upcoming Courses */}
            <div className="bg-dark-card rounded-xl p-6 border border-cyber-green/20">
              <h4 className="text-xl font-semibold text-cyber-purple mb-4">Upcoming Courses</h4>
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
              </div>
            </div>

                         {/* Certification Goals */}
             <div className="bg-dark-card rounded-xl p-6 border border-cyber-purple/20">
               <h4 className="text-xl font-semibold text-cyber-purple mb-4">Certification Goals</h4>
               <div className="space-y-3">
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">CompTIA Security+</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">Cisco CCNA</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">Google Cybersecurity Certificate</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">TryHackMe Red Team Path</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">TryHackMe Blue Team Path</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">OSCP (Offensive Security Certified Professional)</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                   <span className="text-gray-300">GCIH (GIAC Certified Incident Handler)</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 