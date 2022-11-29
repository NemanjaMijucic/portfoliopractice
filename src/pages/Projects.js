import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/projects.css";
import { projects } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
