import { useState } from "react";

import ProjectName from "./sidebar_items/ProjectName";
import ProjectInfo from "./sidebar_items/ProjectInfo";
import SidebarContent from "./sidebar_items/SidebarContent";

import "../navbar/navbar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar-container ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "<" : ">"}
      </button>

      <ProjectName />
      <SidebarContent />
      <ProjectInfo />
    </div>
  );
};

export default Sidebar;
