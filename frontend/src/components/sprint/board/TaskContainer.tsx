import React, {useState} from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import { Task } from './Task';

interface TaskContainerProps {
    title: string;
    droppableId: string;
    tasks:Task[]
}

const TaskContainer: React.FC<TaskContainerProps> = ({title, droppableId, tasks}) => {    
  const filteredTasks = tasks.filter(task => task.droppableId === droppableId);

  return (

    <div className="tasks-container">
      <h2 className="tasks-container-title">{title}</h2>

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredTasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard
                      id={task.id}
                      title={task.title} priority={''} iconPath={''}                    
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TaskContainer
