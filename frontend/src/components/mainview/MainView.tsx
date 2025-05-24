import "./mainview.css";

import Board from "../board/Board";
import SprintInformation from "../sprint/SprintInformation";

const MainView = () => {
  return (
    <div className="main-view-container">
      <div className="main-view-content">
        <SprintInformation />
        <Board />
      </div>
    </div>
  );
};

export default MainView;
