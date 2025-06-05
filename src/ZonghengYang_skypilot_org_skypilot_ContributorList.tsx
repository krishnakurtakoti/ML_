import React from 'react';

// Sample data for contributors
const contributors = [
  { name: 'Michaelvll', commits: 985, githubLink: 'https://github.com/Michaelvll' },
   { name: 'Zongheng Yang', commits: 531, githubLink: 'https://github.com/concretevitamin' },
  // { name: 'Charlie', commits: 30, githubLink: 'https://github.com/charlie' },
  // { name: 'Dave', commits: 10, githubLink: 'https://github.com/dave' },
];

// Sort contributors by number of commits in descending order
const sortedContributors = contributors.sort((a, b) => b.commits - a.commits);

const ZonghengYang_skypilot_org_skypilot_ContributorList = () => {
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

export default ZonghengYang_skypilot_org_skypilot_ContributorList;
