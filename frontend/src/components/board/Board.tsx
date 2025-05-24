import Tasks from "../tasks/Tasks";
import SprintButtons from "../sprint/SprintButtons";
import SprintUsers from "./board_items/SprintUsers";
import BoardInfoPanel from "./board_items/BoardInfoPanel";
import BoardSearchBar from "./board_items/BoardSearchBar";

import "./board.css";

const Board = () => (
  <>
    <div className="board-info-container">
      <div className="board-left">
        <BoardSearchBar />
        <SprintUsers />
        <SprintButtons />
      </div>
      <div className="board-right">
        <BoardInfoPanel />
      </div>
    </div>
    <div className="tasks-sliders">
      <Tasks />
    </div>
  </>
);

export default Board;
