import React from "react";
import "../styles/projectdisplay.css";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills</b>: {project.skills}
      </p>
      <a href={project.link} target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
      <a href={project.website} target="_blank" rel="noreferrer">
        <WebIcon />
      </a>
    </div>
  );
};
export default ProjectDisplay;
