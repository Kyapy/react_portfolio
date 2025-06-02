import React, { useEffect, useState } from "react";
import { Project_items } from "./Project_items";
import projimg_github from "../assets/img/project-github.png"; // background Image
import { Row } from "react-bootstrap";

export const Github_items = ({ searchTerm }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [error, setError] = useState(null); //Error handling

  useEffect(() => {
  fetch("https://api.github.com/users/Kyapy/repos")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch GitHub repos");
      }
        return res.json();
    })
      .then((data) => {
        const mapped = data.map((repo) => ({
          title: repo.name,
          description: repo.description || "No description available.",
          imgUrl: projimg_github,
          link: repo.html_url,
        }));
        setGithubProjects(mapped);
      })
      .catch((err) => setError(err.message));;
  }, []);

  // Search option
  const filtered = githubProjects.filter(project =>
    (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
);

  return (
    <>
      {filtered.map((project, index) => (
        <Project_items key={index} {...project} />
      ))}
    </>
  );
};
