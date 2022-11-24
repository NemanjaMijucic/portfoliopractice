import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/projects.css";
import Proj1 from "../assets/memorygame.png";
import Proj2 from "../assets/weather-img.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectsList">
        <ProjectItem name="Memory game" image={Proj1} />
        <ProjectItem name="Weather forecast" image={Proj2} />
      </div>
    </div>
  );
};
export default Projects;
