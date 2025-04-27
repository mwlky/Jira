import React, { useState } from "react";
import { Task, TaskType } from "./Task";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

import "../../../styles/tasks.css";
import TaskContainer from "./TaskContainer";

const Tasks = () => {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const movedTask = tasks.find((task) => task.id === draggableId);
    if (!movedTask) return;

    const updatedTask = { ...movedTask, droppableId: destination.droppableId };
    const newTasks = tasks
      .filter((task) => task.id !== draggableId)
      .concat(updatedTask);

    setTasks(newTasks);
  };

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="tasks-flex-container">
        <TaskContainer
          title="TO DO"
          droppableId="todo"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="Paused"
          droppableId="paused"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="In Progress"
          droppableId="inprogress"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="Resolved"
          droppableId="resolved"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="In Review"
          droppableId="review"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="Archive"
          droppableId="archive"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
        <TaskContainer
          title="Done"
          droppableId="done"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
        />
      </div>
    </DragDropContext>
  );
};

export default Tasks;
