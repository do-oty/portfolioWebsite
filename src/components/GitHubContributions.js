import React, { useState, useEffect } from 'react';
import { Github, Calendar } from 'lucide-react';

const GitHubContributions = ({ username = 'do-oty' }) => {
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Using GitHub's contribution API through a proxy service
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        
        const data = await response.json();
        setContributionData(data);
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 3) return 'bg-cyber-green/20';
    if (count <= 6) return 'bg-cyber-green/40';
    if (count <= 9) return 'bg-cyber-green/60';
    if (count <= 12) return 'bg-cyber-green/80';
    return 'bg-cyber-green';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-dark-card p-3 rounded-xl border border-dark-border">
        <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-green"></span>
          GitHub Activity
        </h3>
        <div className="bg-dark-bg p-1.5 rounded-lg">
          <div className="animate-pulse">
            <div className="flex flex-wrap gap-0.5">
              {Array.from({ length: 365 }, (_, i) => (
                <div key={i} className="w-2 h-2 rounded-sm bg-gray-700" />
              ))}
            </div>
            <div className="mt-1 text-center text-gray-500 text-xs">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dark-card p-3 rounded-xl border border-dark-border">
        <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
          GitHub Activity
        </h3>
        <div className="bg-dark-bg p-1.5 rounded-lg text-center">
          <div className="text-red-400 text-xs">Error loading</div>
        </div>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const totalContributions = contributionData?.total?.[currentYear] || 0;
  const contributions = contributionData?.contributions || [];
  
  // Filter to only show current year contributions
  const yearContributions = contributions.filter(day => {
    const dayYear = new Date(day.date).getFullYear();
    return dayYear === currentYear;
  });

  return (
    <div className="bg-dark-card p-3 rounded-xl border border-dark-border">
      <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
        <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-green"></span>
        GitHub Activity
      </h3>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{totalContributions} this year</span>
          <div className="flex items-center gap-0.5">
            <Github className="h-2 w-2 text-cyber-green" />
            <span className="text-cyber-green">{yearContributions.filter(day => day.count > 0).length} active</span>
          </div>
        </div>
        
        {/* GitHub-style contribution grid - Current year only */}
        <div className="bg-dark-bg p-2 rounded">
          <div className="flex flex-wrap gap-0.5">
            {yearContributions.map((day, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-sm ${getContributionColor(day.count)} hover:ring-1 hover:ring-cyber-green transition-all duration-200`}
                title={`${day.count} contributions on ${formatDate(day.date)}`}
              />
            ))}
          </div>
          

        </div>

        <div className="text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-cyber-green hover:text-cyber-blue transition-colors text-xs"
          >
            <Calendar className="h-2 w-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions; 