import React from "react";

import SprintUsers from "./SprintUsers";
import SprintButtons from "../SprintButtons";
import BoardSearchBar from "./BoardSearchBar";
import BoardInfoPanel from "./BoardInfoPanel";

import "../../../styles/board.css";
import Tasks from "./Tasks";

const Board = () => {
  return (
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
};

export default Board;
