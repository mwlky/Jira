import React from "react";

interface SidebarButtonProps {
  title: string;
  icon: string;
  iconSize?: number;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  icon,
  iconSize = 27,
}) => {
  return (
    <button className="sidebar-button-container">
      <img
        src={icon}
        alt="side button icon"
        className="sidebar-button-icon"
        style={{ width: iconSize, height: iconSize }}
      />
      <p className="sidebar-button-text">{title}</p>
    </button>
  );
};

export default SidebarButton;
