import React from "react";
import "../styles/home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Nemanja</h2>
        <div className="prompt">
          <div>
            <p>
              A FrontEnd developer with a pasion for learning and creating
              websites
            </p>
            <a
              href="https://www.linkedin.com/in/nemanja-mijucic-228876225/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/NemanjaMijucic"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="mailto:nemanja.mijucic@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>JavaScript, HTML, CSS, React.js, Bootstrap, TailwindCSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Home;
