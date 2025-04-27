import React from "react";

import "../../../styles/global.css";
import "../../../styles/boardinfopanel.css";

const BoardInfoPanel = () => {
  return (
    <div className="board-buttons-container">
      <p className="group-by-text">GROUP BY</p>

      <button className="gray-button">
        <div className="gray-button-with-content">
          None
          <img src="/images/indicator.svg" alt="" />
        </div>
      </button>

      <button className="gray-button">
        <div className="gray-button-with-content">
          <img src="/images/board/insights.svg" alt="" />
          Insights
        </div>
      </button>

      <button className="gray-button">
        <div className="gray-button-with-content">
          <img src="/images/board/settings.svg" alt="" />
          View Settings
        </div>
      </button>
    </div>
  );
};

export default BoardInfoPanel;
