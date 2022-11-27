import React from "react";
import "../styles/projectdisplay.css";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills</b>: {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
};
export default ProjectDisplay;
