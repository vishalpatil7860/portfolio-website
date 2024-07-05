"use client";

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axios from 'axios';

interface StatItem {
  num: number;
  text: string;
}

const StatsSection: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>([
    { num: 0, text: 'Projects Completed' },
    { num: 0, text: 'Years of Experience' },
    { num: 0, text: 'Code Commits' }
  ]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = 'vishalpatil7860';
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = reposResponse.data;

        // Calculate projects completed
        const projectsCompleted = repos.length;

        // Calculate years of experience (starting from November 2020)
        const startDate = new Date('2020-11-01');
        const currentDate = new Date();
        const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear() 
                                  - (currentDate.getMonth() < startDate.getMonth() ||
                                     (currentDate.getMonth() === startDate.getMonth() &&
                                      currentDate.getDate() < startDate.getDate()) ? 1 : 0);

        // Calculate code commits
        let totalCommits = 0;
        for (const repo of repos) {
          const commitsResponse = await axios.get(repo.commits_url.replace('{/sha}', ''));
          totalCommits += commitsResponse.data.length;
        }

        setStats([
            { num: yearsOfExperience, text: 'Years of Experience' },
            { num: projectsCompleted, text: 'Projects Completed' },
            { num: totalCommits, text: 'Code Commits' }
        ]);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((item, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-6xl font-extrabold text-black-600"
              />
              <p className="text-xl font-medium text-gray-700 mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;