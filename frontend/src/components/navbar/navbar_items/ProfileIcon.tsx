import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../navbar.css";

const ProfileIcon = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const onLogout = () => {
    console.log("logout!");
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <>
      <button
        className="profile-icon-button"
        onClick={() => setIsClicked(!isClicked)}
      >
        <img src="/avatar.png" alt="Profile" className="profileIcon" />;
      </button>

      {isClicked && (
        <button className="logout-button" >
          <p className="logout-text" onClick={onLogout}>Log out</p>
        </button>
      )}
    </>
  );
};

export default ProfileIcon;
