import React, { useState, useEffect, useRef } from 'react';

const TypingAnimation = () => {
  const [activeCommands, setActiveCommands] = useState([]);
  const [disappearingCommands, setDisappearingCommands] = useState(new Set());
  
  // Use refs to track current state without causing re-renders
  const nextIdRef = useRef(0);
  const usedPositionsRef = useRef(new Set());
  const usedCommandsRef = useRef(new Set());

  // Cybersecurity-themed terminal commands
  const commands = [
    'nmap -sS -O target.local',
    'sudo tail -f /var/log/auth.log',
    'netstat -tulpn | grep LISTEN',
    'ps aux | grep suspicious',
    'tcpdump -i eth0 port 443',
    'iptables -L -n -v',
    'ss -tuln --processes',
    'grep "Failed password" /var/log/auth.log',
    'find /var/log -name "*.log" -mtime -1',
    'lsof -i :22 -n',
    'dig +trace security.org',
    'nslookup -type=MX target.com',
    'traceroute -I 8.8.8.8',
    'ping -c 3 127.0.0.1',
    'whoami && groups',
    'uname -r && uptime',
    'ls -la /etc/ssh/',
    'systemctl status firewalld',
    'journalctl -u sshd --since "1 hour ago"',
    'cat /proc/version',
    'w | head -5',
    'last | head -10',
    'sudo netstat -plant',
    'arp -a | grep incomplete',
    'cat /etc/hosts | grep -v "#"',
    'df -h | grep -E "(/$|/home)"',
    'ps -eo pid,ppid,cmd,%mem --sort=-%mem',
    'sudo ss -plunt',
    'grep -r "ssh" /var/log/ | tail -5',
    'find /tmp -type f -mtime -1',
    'sudo iptables -S',
    'netstat -i',
    'route -n',
    'cat /proc/meminfo | grep Mem',
    'sudo fail2ban-client status',
    'sudo ufw status verbose'
  ];



  const spawnCommand = () => {
    // Get available commands (not currently active)
    const availableCommands = commands.filter(cmd => !usedCommandsRef.current.has(cmd));
    
    // If no commands available, don't spawn
    if (availableCommands.length === 0) {
      return;
    }
    
    // Get available positions - much more spaced out
    const allPositions = [
      // Top corners
      { top: '5%', left: '2%', id: 'tl1' },
      { top: '5%', right: '2%', id: 'tr1' },
      { top: '15%', left: '5%', id: 'tl2' },
      { top: '15%', right: '5%', id: 'tr2' },
      { top: '25%', left: '8%', id: 'tl3' },
      { top: '25%', right: '8%', id: 'tr3' },
      
      // Bottom corners
      { bottom: '5%', left: '2%', id: 'bl1' },
      { bottom: '5%', right: '2%', id: 'br1' },
      { bottom: '15%', left: '5%', id: 'bl2' },
      { bottom: '15%', right: '5%', id: 'br2' },
      { bottom: '25%', left: '8%', id: 'bl3' },
      { bottom: '25%', right: '8%', id: 'br3' },
      
      // Left side - well spaced
      { top: '35%', left: '1%', id: 'ml1' },
      { top: '50%', left: '1%', id: 'ml2' },
      { top: '65%', left: '1%', id: 'ml3' },
      
      // Right side - well spaced
      { top: '35%', right: '1%', id: 'mr1' },
      { top: '50%', right: '1%', id: 'mr2' },
      { top: '65%', right: '1%', id: 'mr3' },
    ];
    
    const availablePositions = allPositions.filter(pos => !usedPositionsRef.current.has(pos.id));
    
    if (availablePositions.length === 0) {
      return;
    }
    
    const command = availableCommands[Math.floor(Math.random() * availableCommands.length)];
    const position = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    const id = nextIdRef.current;
    
    // Much slower typing speed for all commands
    const typingSpeed = 180; // Much slower speed for better readability
    
    const newCommand = {
      id,
      text: command,
      position,
      positionId: position.id,
      isTyping: true,
      displayedText: '',
      currentIndex: 0,
    };
    
    // Mark position and command as used in refs
    usedPositionsRef.current.add(position.id);
    usedCommandsRef.current.add(command);
    nextIdRef.current++;
    
    setActiveCommands(prev => [...prev, newCommand]);
    
    // Start typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= command.length) {
        setActiveCommands(prev => 
          prev.map(cmd => 
            cmd.id === id 
              ? { ...cmd, displayedText: command.slice(0, index) }
              : cmd
          )
        );
        index++;
      } else {
        clearInterval(typingInterval);
        setActiveCommands(prev => 
          prev.map(cmd => 
            cmd.id === id 
              ? { ...cmd, isTyping: false }
              : cmd
          )
        );
        
        // Remove command after it's fully typed and displayed for a while
        const displayTime = 3000; // Consistent 3 seconds display time
        setTimeout(() => {
          // Start disappearing animation
          setDisappearingCommands(prev => new Set([...prev, id]));
          
          // Actually remove after animation completes
          setTimeout(() => {
            setActiveCommands(prev => {
              const commandToRemove = prev.find(cmd => cmd.id === id);
              if (commandToRemove) {
                // Free up the position and command in refs
                usedPositionsRef.current.delete(commandToRemove.positionId);
                usedCommandsRef.current.delete(commandToRemove.text);
              }
              return prev.filter(cmd => cmd.id !== id);
            });
            setDisappearingCommands(prev => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }, 600); // Match animation duration
        }, displayTime);
      }
    }, typingSpeed);
  };

  useEffect(() => {
    // Spawn commands at intervals
    const spawnInterval = setInterval(() => {
      setActiveCommands(currentCommands => {
        // Limit to 8 active commands max - more activity
        const maxCommands = 8;
        const currentCount = currentCommands.length;
        
        if (currentCount < maxCommands && usedPositionsRef.current.size < 18) {
          // Sometimes spawn 2 commands at once for more activity
          const spawnCount = Math.random() < 0.6 ? 1 : 2;
          const actualSpawnCount = Math.min(spawnCount, maxCommands - currentCount);
          
          for (let i = 0; i < actualSpawnCount; i++) {
            setTimeout(() => {
              if (usedPositionsRef.current.size < 18) {
                spawnCommand();
              }
            }, i * 500); // Stagger spawning by 500ms
          }
        }
        
        return currentCommands;
      });
    }, 2500); // Spawn every 2.5 seconds - faster for more activity

    return () => clearInterval(spawnInterval);
  }, []); // No dependencies to prevent re-creation

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {activeCommands.map((command) => (
        <div
          key={command.id}
          className={`absolute text-xs font-mono transition-all duration-500 ${
            disappearingCommands.has(command.id) 
              ? 'animate-typing-disappear' 
              : 'animate-typing-appear'
          }`}
          style={{
            ...command.position,
            zIndex: 1,
            textShadow: '0 0 3px rgba(0, 255, 148, 0.15)',
          }}
        >
          <span className="text-cyber-blue/40">$ </span>
          <span className="text-cyber-green/25">
            {command.displayedText}
            {command.isTyping && (
              <span className="animate-pulse text-cyber-blue/40">|</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation; 