import React from "react";
import { Task, TaskPriorityIcons, TaskType, TaskTypeIcons } from "./Task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task-card">
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
      </div>
    </div>
  );
};

export default TaskCard;
