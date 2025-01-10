import React from 'react';

const CharlieMarsh_PublicProjects = () => {
  const matchItems = [
    {
      title: "Ruff",
      link: "https://github.com/charliermarsh/ruff",
      description: "An extremely fast Python linter, written in Rust"
    },
    {
      title: "MegaMap",
      link: "https://www.springdiscovery.com/blog/megamap/",
      description: "Giving scientist superpowers"
    },
    {
      title: "android-lite",
      link: "https://github.com/charliermarsh/android-lite",
      description: "A 26 KB-take on the Khan Academy Android app"
    },
    {
      title: "math-input",
      link: "https://github.com/Khan/math-input",
      description: "Khan Academy's expression editor for the mobile web"
    },
    {
      title: "Jasper",
      link: "https://jasperproject.github.io",
      description: "An open source platform for developing always-on, voice-controlled applications"
    },
    {
      title: "Script Playground",
      link: "/script-playground",
      description: "An in-browser playground for the Bitcoin Script programming language"
    },
    {
      title: "Intro to Hacking",
      link: "https://introtohacking.github.io/",
      description: "A weekly class taught at Princeton University to survey programming in the wild"
    },
    {
      title: "Online Boosting",
      link: "https://github.com/charliermarsh/online_boosting",
      description: "A suite of online boosting and weak learning algorithms in Python"
    },
    {
      title: "Quizzler",
      link: "/hack",
      description: "An automatic quiz-question generator for iOS with a Python back-end"
    },
  ];

  return (
    <ul className="charlieMarsh-match-list">
      {matchItems.map((item, index) => (
        <li key={index} className="charlieMarsh-match-list-item">
          <span className="charlieMarsh-code-red">|</span>
          <a
            className="charlieMarsh-implicit charlieMarsh-code-orange"
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            style={{ textDecoration: 'underline', color: '#0d6efd' }}
          >
            {item.title} <span className="charlieMarsh-code-red">-&gt;</span>
          </a>
          <a
            className="charlieMarsh-implicit"
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            style={{ textDecoration: 'none', borderBottom: '1px solid #ccc', color: 'inherit' }}
          >
            {item.description}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CharlieMarsh_PublicProjects;
