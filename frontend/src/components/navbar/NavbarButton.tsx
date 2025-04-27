import React from "react";

interface NavbarButtonProps {
  title: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ title }) => {
  return (
    <button className="navbar-button">
      {title}
      <i className="fas fa-chevron-down"></i>
    </button>
  );
};

export default NavbarButton;
