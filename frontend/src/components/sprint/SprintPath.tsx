import React from "react";
import "../../styles/sprint.css";

const SprintPath = () => {
  return (
    <div>
      <div className="project-path-container">
        <button className="project-path-button">Projects</button>
        <p className="project-path-text"> / </p>
        <button className="project-path-button">Jira Task Manager</button>
      </div>
    </div>
  );
};

export default SprintPath;
