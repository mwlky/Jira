import React, { useEffect, useRef, useState } from "react";
import { Task, TaskPriorityIcons, TaskTypeIcons } from "./Task";

interface TaskCardProps {
  task: Task;
  onTaskRemove: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onTaskRemove }) => {
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const taskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (taskRef.current && !taskRef.current.contains(e.target as Node)) {
        setShowRemoveButton(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="task-card" ref={taskRef}>
      <div className="task-card-flex">
        <p className="task-card-text">{task.title}</p>
        <div className="task-properties-flex">
          <div className="task-type-container">
            <img
              src={TaskTypeIcons[task.type]}
              alt="task icon"
              className="task-type-icon"
            />
            <p className="task-type-text">DG-01</p>
          </div>
          <div className="task-type-container">
            <img
              src={TaskPriorityIcons[task.priority]}
              alt="priority"
              className="task-priority-icon"
            />
            <img
              src="/avatar.png"
              alt="assigned-to-task"
              className="assigned-to-task-avatar"
            />
          </div>
        </div>

        <button
          className="more-button"
          onClick={() => setShowRemoveButton(!showRemoveButton)}
        >
          <img
            className="more-button-image"
            src="/images/dots.svg"
            alt="options icon"
          />
        </button>

        {showRemoveButton && (
          <button className="remove-task-button" onClick={() => onTaskRemove()}>
            <p className="remove-text">Remove</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
