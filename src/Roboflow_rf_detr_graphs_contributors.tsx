import React from 'react';

// Sample data for contributors
const contributors = [
  { name: 'SkalskiP', commits: 40, githubLink: 'https://github.com/SkalskiP' },
  // { name: 'Bob', commits: 15, githubLink: 'https://github.com/bob' },
  // { name: 'Charlie', commits: 30, githubLink: 'https://github.com/charlie' },
  // { name: 'Dave', commits: 10, githubLink: 'https://github.com/dave' },
];

// Sort contributors by number of commits in descending order
const sortedContributors = contributors.sort((a, b) => b.commits - a.commits);

const Roboflow_rf_detr_graphs_contributors_ContributorList = () => {
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

export default Roboflow_rf_detr_graphs_contributors_ContributorList;
