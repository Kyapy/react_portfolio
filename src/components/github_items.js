import { useEffect, useState } from 'react';

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/YOUR_USERNAME/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="project" id="projects">
      <h2>GitHub Projects</h2>
      <div className="project-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};
