import React, { useEffect, useState } from "react";
import { Task, TaskType } from "./Task";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

import "../../../styles/tasks.css";
import TaskContainer from "./TaskContainer";
import { authFetch } from "../../../Utils";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;

        const response = await authFetch(`${API_URL}/tasks`);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`)
          
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleRemoveTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const movedTaskIndex = tasks.findIndex((task) => task.id == draggableId);
    const movedTask = tasks[movedTaskIndex];
    if (!movedTask) return;

    const updatedTask = { ...movedTask, droppableId: destination.droppableId };

    const newTasks = Array.from(tasks);
    newTasks.splice(movedTaskIndex, 1);

    const destinationIndex = newTasks.findIndex(
      (t, i) =>
        i === destination.index && t.droppableId === destination.droppableId
    );

    if (destinationIndex === -1) {
      newTasks.push(updatedTask);
    } else {
      newTasks.splice(destination.index, 0, updatedTask);
    }

    setTasks(newTasks);
    try {
      const API_URL = process.env.REACT_APP_API_URL;

      await authFetch(`${API_URL}/tasks/${updatedTask.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedTask),
      });

      const newTasks = tasks
        .filter((task) => task.id !== updatedTask.id)
        .concat(updatedTask);

      setTasks(newTasks);
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="tasks-flex-container">
        <TaskContainer
          title="TO DO"
          droppableId="todo"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="Paused"
          droppableId="paused"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="In Progress"
          droppableId="inprogress"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="Resolved"
          droppableId="resolved"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="In Review"
          droppableId="review"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="Archive"
          droppableId="archive"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
        <TaskContainer
          title="Done"
          droppableId="done"
          tasks={tasks}
          onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
          onTaskRemoved={handleRemoveTask}
        />
      </div>
    </DragDropContext>
  );
};

export default Tasks;
