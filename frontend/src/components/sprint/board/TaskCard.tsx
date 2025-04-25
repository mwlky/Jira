import React from 'react'
import { Task, TaskType } from './Task'

interface TaskCardProps {
    task:Task
}

const TaskCard : React.FC<TaskCardProps> = ( {task}) => {

  const getIconPath = (type: TaskType): string => {
    switch (type) {
      case TaskType.Bug:
        return "/images/bug-icon.svg";
    
        case TaskType.Story:
          return "/images/story-icon.svg";

        case TaskType.Task:
          return "/images/task-icon.svg";

      default:
        return '';
    }
  };

  return (
    <div className='task-card'>
        <div className="task-card-flex">
            <p className='task-card-text'>{task.title}</p>
            <div className="task-properties-flex">
                <div className="task-type-container">
                    <img src={getIconPath(task.type)} alt="task icon" className='task-type-icon' />
                    <p className='task-type-text'>DG-01</p>
                </div>
                <div className='task-type-container'>
                  <img src="/images/board/medium-priority-icon.svg" alt="priority" className='task-priority-icon' />
                  <img src="/avatar.png" alt="assigned-to-task" className='assigned-to-task-avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskCard