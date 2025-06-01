import React, { useEffect, useState } from "react";
import { Project_items } from "./Project_items";
import projimg_github from "../assets/img/project-github.png"; // background Image
import { Row } from "react-bootstrap";

export const Github_items = () => {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Kyapy/repos")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map(repo => ({
          title: repo.name,
          description: repo.description || "No description available.",
          imgUrl: projimg_github,
          link: repo.html_url,
        }));
        setGithubProjects(mapped);
      });
  }, []);

  return (
    <Row>
      {githubProjects.map((project, index) => (
        <Project_items key={index} {...project} />
      ))}
    </Row>
  );
};
