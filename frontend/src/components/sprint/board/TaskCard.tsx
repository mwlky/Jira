import React from 'react'

interface TaskCardProps {
    title:string,
    priority:string,
    iconPath:string,
    id:string,
    // isTask:boolean,
}

const TaskCard : React.FC<TaskCardProps> = ( {title, priority, iconPath, id}) => {
  return (
    <div className='task-card'>
        <div className="task-card-flex">
            <p className='task-card-text'>{title}</p>
            <div className="task-properties-flex">
                <div className="task-type-container">
                    <img src="/images/task-icon.svg" alt="task icon" className='task-type-icon' />
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