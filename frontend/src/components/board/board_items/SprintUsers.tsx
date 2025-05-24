import SprintUserButton from "./SprintUserButton";

import "./users.css";

const SprintUsers = () => {
  return (
    <div className="users-container">
      <SprintUserButton avatar="/avatar.png" />
      <SprintUserButton avatar="/avatar.png" />
      <SprintUserButton avatar="/avatar.png" />
    </div>
  );
};

export default SprintUsers;
