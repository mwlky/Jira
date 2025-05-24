import SearchBar from "./navbar_items/SearchBar";
import LogoButton from "./navbar_items/LogoButton";
import ProfileIcon from "./navbar_items/ProfileIcon";
import AppLauncher from "./navbar_items/AppLauncher";
import CreateButton from "./navbar_items/CreateButton";
import NavbarButton from "./navbar_items/NavbarButton";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <AppLauncher />
        <LogoButton />
        <NavbarButton title="Your work" />
        <NavbarButton title="Projects" />
        <NavbarButton title="Filters" />
        <NavbarButton title="Dashboards" />
        <NavbarButton title="Teams" />
        <NavbarButton title="Apps" />
        <CreateButton />
      </div>

      <div className="navbar-right">
        <SearchBar />
        <button className="sidebar-right-button">
          <img
            src="/images/notifications-icon.svg"
            alt="notifications"
            className="side-right-icon"
          />
        </button>
        <button className="sidebar-right-button">
          <img
            src="/images/question-mark-icon.svg"
            alt="questions"
            className="side-right-icon"
          ></img>
        </button>
        <button className="sidebar-right-button">
          <img
            src="/images/settings-icon.svg"
            alt="settings"
            className="side-right-icon"
          />
        </button>

        <ProfileIcon />
      </div>
    </div>
  );
};

export default Navbar;
