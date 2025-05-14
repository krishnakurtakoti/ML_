import React from 'react';

// Sample data for contributors
const contributors = [
  { name: 'MerlinVR', commits: 1035, githubLink: 'https://github.com/MerlinVR' },
   { name: 'Momo the Monster', commits: 54, githubLink: 'https://github.com/momo-the-monster' },
  // { name: 'Charlie', commits: 30, githubLink: 'https://github.com/charlie' },
  // { name: 'Dave', commits: 10, githubLink: 'https://github.com/dave' },
];

// Sort contributors by number of commits in descending order
const sortedContributors = contributors.sort((a, b) => b.commits - a.commits);

const MerlinVR_UdonSharp_ContributorList = () => {
  return (
    <div>
      <h2>Contributor Rankings</h2>
      <ul>
        {sortedContributors.map((contributor, index) => (
          <li key={index}>
            <strong>#{index + 1} {contributor.name}</strong> - {contributor.commits} commits
            {' | '}
            <a href={contributor.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerlinVR_UdonSharp_ContributorList;
