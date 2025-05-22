import React from "react";
import "../styles/sidebar.css";

const ProjectName = () => {
  return (
    <div className="project-name-container">
      <img
        className="project-image"
        src="/project-photo.svg"
        alt="project logo"
      ></img>
      <div className="project-details">
        <h1 className="project-title">My Project</h1>
        <p className="project-type">Software Project</p>
      </div>
    </div>
  );
};

export default ProjectName;
