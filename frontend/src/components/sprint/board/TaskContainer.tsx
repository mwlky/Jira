import React, {useState} from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

interface TaskContainerProps {
    title: string;
    droppableId: string;
    
}

const TaskContainer: React.FC<TaskContainerProps> = ({title, droppableId}) => {
  const [tasks, setTasks] = useState([
    { id: `${droppableId}-1`, title: 'Task numero 1' },
    { id: `${droppableId}-2`, title: 'Improvements' },
    { id: `${droppableId}-3`, title: 'Tiruriru' },
  ]);
    
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
            {tasks.map((task, index) => (
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
