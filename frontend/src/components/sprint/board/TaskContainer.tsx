import React, {useState} from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import { Task } from './Task';

import '../../../styles/global.css'

interface TaskContainerProps {
    title: string;
    droppableId: string;
    tasks:Task[]
    onTaskCreate: (task: Task) => void
}

const TaskContainer: React.FC<TaskContainerProps> = ({title, droppableId, tasks, onTaskCreate}) => {    
  const [isCreating, setIsCreating] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const filteredTasks = tasks.filter(task => task.droppableId === droppableId);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: `${Date.now()}`,
        title: newTaskTitle.trim(),
        droppableId,
      }
      onTaskCreate(newTask)
      setNewTaskTitle('')
      setIsCreating(false)
    } else if (e.key === 'Escape') {
      setNewTaskTitle('')
      setIsCreating(false)
    }
  }

  return (

    <div className="tasks-container">
      <h2 className="tasks-container-title">{title}</h2>

      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div className="task-list" ref={provided.innerRef}  {...provided.droppableProps} >
            {filteredTasks.map((task, index) => (

              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TaskCard id={task.id} title={task.title} priority={''} iconPath={''} />
                  </div>
                )}
              </Draggable>

            ))}

            {isCreating && (
              <div className="temp-task-card">
                <input
                  className="temp-task-input"
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="What needs to be done?"
                  autoFocus
                />
              </div>
            )}

            {provided.placeholder}
            {!snapshot.isDraggingOver && (
              <button className='create-issue-container' onClick={() => setIsCreating(true)}>
              <img src="/images/board/plus-icon.svg" alt="plus" className='create-issue-icon'/>
              <p className='create-issue-text'>Create Issue</p>
            </button>
          
          )}  
          </div>
        )}

      </Droppable>
    </div>
  )
}

export default TaskContainer
