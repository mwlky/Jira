import React, { useEffect, useRef, useState } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import { TaskPriority as TaskPriority, Task, TaskType } from "./Task";

import "../../../styles/global.css";
import TaskTypeDropdown from "./DropdownWithIcons";
import TaskPriorityDropdown from "./TaskPriorityDropdown";

interface TaskContainerProps {
  title: string;
  droppableId: string;
  tasks: Task[];
  onTaskCreate: (task: Task) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  droppableId,
  tasks,
  onTaskCreate,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newTaskType, setNewTaskType] = useState<TaskType>(TaskType.Story);
  const [newTaskPriority, setNewTaskPriority] = useState<TaskPriority>(
    TaskPriority.Medium
  );

  const tempTaskRef = useRef<HTMLDivElement>(null);
  const newTaskTitleRef = useRef("");

  const filteredTasks = tasks.filter(
    (task) => task.droppableId === droppableId
  );

  useEffect(() => {
    if (!isCreating) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (tempTaskRef.current && !tempTaskRef.current.contains(target))
        handleCreateTask();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCreating]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateTask();
    } else if (e.key === "Escape") {
      setIsCreating(false);
    }
  };

  const handleCreateTask = () => {
    const finalTitle = newTaskTitleRef.current.trim();
    if (finalTitle.trim() !== "") {
      const newTask: Task = {
        id: `${Date.now()}`,
        title: finalTitle,
        droppableId,
        type: newTaskType,
        priority: newTaskPriority,
      };

      onTaskCreate(newTask);
      setIsCreating(false);
      newTaskTitleRef.current = "";
    } else {
      setIsCreating(false);
      newTaskTitleRef.current = "";
    }
  };

  return (
    <div className="tasks-container">
      <h2 className="tasks-container-title">{title}</h2>

      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}

            {isCreating && (
              <div className="temp-task-card" ref={tempTaskRef}>
                <input
                  className="temp-task-input"
                  type="text"
                  onChange={(e) => {
                    newTaskTitleRef.current = e.target.value;
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="What needs to be done?"
                  autoFocus
                />
                <div className="dropdowns-container">
                  <div className="temp-task-dropdown-wrapper">
                    <TaskTypeDropdown
                      selectedType={newTaskType}
                      onSelect={setNewTaskType}
                    />
                  </div>
                  <div className="temp-task-dropdown-wrapper">
                    <TaskPriorityDropdown
                      onSelect={setNewTaskPriority}
                      selectedPriority={newTaskPriority}
                    />
                  </div>
                </div>
              </div>
            )}

            {provided.placeholder}
            {!snapshot.isDraggingOver && (
              <button
                className="create-issue-container"
                onClick={() => setIsCreating(true)}
              >
                <img
                  src="/images/board/plus-icon.svg"
                  alt="plus"
                  className="create-issue-icon"
                />
                <p className="create-issue-text">Create Issue</p>
              </button>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskContainer;
